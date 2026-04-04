export default function NotFound() {
  return (
    <html data-scroll-behavior="smooth">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'system-ui, sans-serif', color: '#1e293b' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0' }}>404</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>Page not found.</p>
          <a href="/" style={{ marginTop: '2rem', padding: '0.75rem 1.5rem', backgroundColor: '#0ea5e9', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: '500' }}>
            Return Home
          </a>
        </div>
      </body>
    </html>
  );
}
