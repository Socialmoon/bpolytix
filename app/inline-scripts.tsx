"use client";

export function InlineScripts({
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
}: {
  organizationSchema: object;
  localBusinessSchema: object;
  websiteSchema: object;
}) {
  return (
    <>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `(()=>{try{const s=localStorage.getItem('theme-preference')||'dark';const d=window.matchMedia('(prefers-color-scheme:dark)').matches;const r=s==='system'?(d?'dark':'light'):s;if(r==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
