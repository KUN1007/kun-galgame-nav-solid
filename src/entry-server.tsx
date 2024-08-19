// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/webp"
            sizes="32x32"
            href="/favicon.webp"
          />
          <link
            rel="icon"
            type="image/webp"
            sizes="16x16"
            href="/favicon.webp"
          />
          <meta name="msapplication-TileImage" content="/ms-icon-192x192.png" />
          <meta name="msapplication-TileColor" content="#0969da" />
          <meta name="theme-color" content="#0969da" />
          <meta name="msapplication-TileColor" content="#0969da" />
          <meta name="theme-color" content="#0969da" />
          <meta name="og:title" content="KUN Visual Novel | 鲲 Galgame" />
          <meta name="og:url" content="https://www.kungal.com" />
          <meta name="og:type" content="article" />
          <meta name="og:image:width" content="1920" />
          <meta name="og:image:height" content="1080" />
          <meta
            name="og:image:url"
            content="https://www.kungal.com/kungalgame.webp"
          />
          <meta
            name="og:image:secure_url"
            content="https://www.kungal.com/kungalgame.webp"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://www.kungal.com/kungalgame.webp"
          />
          <meta name="twitter:site" content="@kungalgame" />
          <meta
            name="og:description"
            content="KUN Visual Novel, Visual Novel Forum | 鲲 Galgame, 论坛, Galgame 资源, Galgame 社区, Galgame 技术, Galgame 交流"
          />
          <meta
            name="description"
            content="KUN Visual Novel Navigation Page | 鲲 Galgame 导航页, 开源免费, Galgame 论坛, Galgame 资源, Galgame 社区"
          />
          <link rel="icon" type="image/webp" href="/favicon.webp" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
