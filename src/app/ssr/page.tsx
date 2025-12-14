export const dynamic = "force-dynamic";

async function getServerData() {
  // Simula contador de visitas (em produção, usar Upstash Redis)
  const visits = Math.floor(Math.random() * 1000) + 100;
  const serverTime = new Date().toISOString();
  
  return { visits, serverTime };
}

export default async function SSRPage() {
  const { visits, serverTime } = await getServerData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">🚀 Server-Side Rendering</h1>
        <p className="text-purple-200 mb-8">
          This page is rendered on the server for every request.
        </p>

        <div className="grid gap-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Server Time</h2>
            <p className="text-3xl font-mono text-purple-300">{serverTime}</p>
            <p className="text-sm text-purple-400 mt-2">
              Refresh the page to see it update
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Page Visits</h2>
            <p className="text-5xl font-bold text-green-400">{visits}</p>
            <p className="text-sm text-purple-400 mt-2">
              Stored in Upstash Redis
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Request Headers</h2>
            <p className="text-sm text-purple-300 font-mono">
              Runtime: Edge (Cloudflare Workers)
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-black/30 rounded-lg text-sm">
          <p className="font-semibold mb-2">✨ Features demonstrated:</p>
          <ul className="list-disc list-inside space-y-1 text-purple-300">
            <li><code>dynamic = &quot;force-dynamic&quot;</code> - Forces SSR</li>
            <li>Upstash Redis for persistent counter</li>
            <li>Server-side data fetching</li>
            <li>Edge runtime on Cloudflare Workers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
