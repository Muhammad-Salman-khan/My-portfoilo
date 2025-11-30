import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "./components/Navbar";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome to my portfoilo" },
    { name: "description", content: "Welcome to my Portfoilo" },
  ];
}
export function Layout({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<null>(null);
  useEffect(() => {
    function update(time: unknown) {}

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ReactLenis
          autoRaf={true}
          options={{ smoothWheel: true, duration: 1 }}
        />
        <Navbar />
        <main className="min-h-screen max-w-screen">{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen max-w-screen px-4 bg-linear-to-r overflow-hidden from-purple-600 via-indigo-600 to-pink-600 dark:from-gray-800 dark:via-gray-900  dark:to-black
                    text-white dark:text-gray-100 relative"
      >
        <h1 className="text-[6rem] md:text-[12rem] animate-pulse mt-12 font-extrabold  text-purple-100 dark:text-gray-300">
          {message}
        </h1>
        <p className="text-center max-w-md mb-8 text-white font-extrabold dark:text-white">
          {details}
        </p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto">
            <code>{stack}</code>
          </pre>
        )}
        <div className="flex gap-4">
          <Link to="/">
            <button
              className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold 
            hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-100 
            dark:hover:bg-gray-600 transition"
            >
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
