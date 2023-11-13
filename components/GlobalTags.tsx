import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <link
        as="font"
        rel="preload"
        type="font/woff2"
        href={asset("/fonts/VTEXTrust-Regular.woff2")}
      />
    </Head>
  );
}

export default GlobalTags;
