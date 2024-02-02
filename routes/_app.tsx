import { type PageProps } from "$fresh/server.ts";
import { getStylesheetUrl } from "rfui";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-rfui-test</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href={getStylesheetUrl()} />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
