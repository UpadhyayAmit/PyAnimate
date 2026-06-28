export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center font-sans text-slate-800">
      <h1 className="m-0 text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Page not found.</p>
      <a href="/" className="mt-8 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white no-underline transition-colors hover:bg-sky-600">
        Return Home
      </a>
    </div>
  );
}
