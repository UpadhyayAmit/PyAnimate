export default function NotFound() {
  return (
    <html data-scroll-behavior="smooth">
      <body>
        <div className="flex flex-col items-center justify-center h-screen font-sans text-slate-800">
          <h1 className="text-6xl font-bold m-0">404</h1>
          <p className="text-xl mt-4">Page not found.</p>
          <a href="/" className="mt-8 px-6 py-3 bg-sky-500 text-white rounded-lg no-underline font-medium hover:bg-sky-600 transition-colors">
            Return Home
          </a>
        </div>
      </body>
    </html>
  );
}
