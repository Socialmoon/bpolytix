import bcrypt from "bcryptjs";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore/lite";

export type ContactSubmission = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  company: string;
  message: string;
};

export type CareerSubmission = {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
};

function nowIso() {
  return new Date().toISOString();
}

function env(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function normalizeStorageBucket(value: string) {
  return value
    .replace(/^gs:\/\//, "")
    .replace(/^https?:\/\/storage\.googleapis\.com\//, "")
    .replace(/\/+$/, "");
}

function getFirebaseConfig() {
  const apiKey = env("NEXT_PUBLIC_FIREBASE_API_KEY");
  const authDomain = env("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN");
  const projectId = env("NEXT_PUBLIC_FIREBASE_PROJECT_ID");
  const storageBucket = normalizeStorageBucket(env("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"));
  const messagingSenderId = env("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID");
  const appId = env("NEXT_PUBLIC_FIREBASE_APP_ID");
  const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID?.trim();

  if (!/^[a-z0-9-]+$/.test(projectId)) {
    throw new Error(
      "Invalid NEXT_PUBLIC_FIREBASE_PROJECT_ID. Expected a plain Firebase project id like 'my-project-123'.",
    );
  }

  if (!/^[a-z0-9.-]+$/.test(storageBucket)) {
    throw new Error(
      "Invalid NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET. Expected a bucket host like 'my-project.appspot.com'.",
    );
  }

  if (!/^\d+$/.test(messagingSenderId)) {
    throw new Error(
      "Invalid NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID. Expected only digits.",
    );
  }

  if (!/^\d+:[a-z0-9-]+:web:[a-z0-9]+$/i.test(appId)) {
    throw new Error(
      "Invalid NEXT_PUBLIC_FIREBASE_APP_ID. Expected a Firebase web app id like '123456:web:abcdef'.",
    );
  }

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
  };
}

function getDb() {
  const firebaseConfig = getFirebaseConfig();
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return getFirestore(app);
}

export async function ensureAdminFromEnv(): Promise<void> {
  const db = getDb();
  const username = process.env.ADMIN_USERNAME || "user";
  const password = process.env.ADMIN_PASSWORD || "1234";

  const ref = doc(db, "admin_users", username);
  const snap = await getDoc(ref);
  const hash = bcrypt.hashSync(password, 10);

  await setDoc(
    ref,
    {
      username,
      passwordHash: hash,
      createdAt: snap.exists() ? (snap.data().createdAt as string) : nowIso(),
      updatedAt: nowIso(),
    },
    { merge: true },
  );
}

export async function verifyAdminCredentials(
  username: string,
  password: string,
): Promise<boolean> {
  const db = getDb();
  const ref = doc(db, "admin_users", username);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return false;
  }

  const data = snap.data() as { passwordHash?: string };
  if (!data.passwordHash) {
    return false;
  }

  return bcrypt.compareSync(password, data.passwordHash);
}

export async function saveContactSubmission(input: {
  name: string;
  email: string;
  company: string;
  message: string;
}): Promise<void> {
  const db = getDb();
  await addDoc(collection(db, "contact_submissions"), {
    name: input.name,
    email: input.email,
    company: input.company,
    message: input.message,
    createdAt: nowIso(),
  });
}

export async function saveCareerSubmission(input: {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
}): Promise<void> {
  const db = getDb();
  await addDoc(collection(db, "career_submissions"), {
    fullName: input.fullName,
    email: input.email,
    phone: input.phone,
    position: input.position,
    message: input.message,
    createdAt: nowIso(),
  });
}

export async function getDashboardSubmissions(): Promise<{
  contact: ContactSubmission[];
  careers: CareerSubmission[];
}> {
  try {
    const db = getDb();
    const [contactSnap, careersSnap] = await Promise.all([
      getDocs(query(collection(db, "contact_submissions"), orderBy("createdAt", "desc"))),
      getDocs(query(collection(db, "career_submissions"), orderBy("createdAt", "desc"))),
    ]);

    const contact = contactSnap.docs.map((entry) => {
      const data = entry.data() as Omit<ContactSubmission, "id">;
      return {
        id: entry.id,
        createdAt: data.createdAt,
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message,
      };
    });

    const careers = careersSnap.docs.map((entry) => {
      const data = entry.data() as Omit<CareerSubmission, "id">;
      return {
        id: entry.id,
        createdAt: data.createdAt,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        position: data.position,
        message: data.message,
      };
    });

    return { contact, careers };
  } catch {
    return { contact: [], careers: [] };
  }
}
