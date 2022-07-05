import { Outlet, LiveReload, Link, Links, Meta } from "@remix-run/react";
import globalStyleUrl from "~/styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStyleUrl }];

export const meta = () => {
  const description = "A cool blog built with Remix";
  const keywords = "remix, blog, react, javascript";

  return description, keywords;
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : "Remix Blog"}</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to={"/"} className="logo">
          Remix
        </Link>

        <ul className="nav">
          <li>
            <Link to={"/posts"}>Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">{children}</div>
    </>
  );
}
