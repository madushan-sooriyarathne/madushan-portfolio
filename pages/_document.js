import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}

          <link rel="manifest" href="manifest.json" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Madushan" />
          <meta name="apple-mobile-web-app-title" content="Madushan" />
          <meta name="theme-color" content="#121212" />
          <meta name="msapplication-navbutton-color" content="#121212" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />

          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/static/icons/icon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="512x512"
            href="/static/icons/icon-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/icons/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="192x192"
            href="/static/icons/icon-192x192.png"
          ></link>
        </Head>
        <body style={{ visibility: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
