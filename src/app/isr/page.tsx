export const revalidate = 60; // Revalidate every 60 seconds

async function getISRData() {
  const buildTime = new Date().toISOString();
  const randomNumber = Math.floor(Math.random() * 1000);
  
  // Simula contador de rebuilds (em produção, usar Upstash Redis)
  const rebuilds = Math.floor(Math.random() * 50) + 1;
  
  return { buildTime, randomNumber, rebuilds };
}

export default async function ISRPage() {
  const { buildTime, randomNumber, rebuilds } = await getISRData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-teal-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">⚡ Incremental Static Regeneration</h1>
        <p className="text-green-200 mb-8">
          This page is statically generated and revalidated every 60 seconds.
        </p>

        <div className="grid gap-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Build Time</h2>
            <p className="text-2xl font-mono text-green-300">{buildTime}</p>
            <p className="text-sm text-green-400 mt-2">
              This timestamp updates every 60 seconds (ISR revalidation)
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Random Number</h2>
            <p className="text-5xl font-bold text-yellow-400">{randomNumber}</p>
            <p className="text-sm text-green-400 mt-2">
              Generated at build time, cached until revalidation
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">ISR Rebuilds</h2>
            <p className="text-3xl font-bold text-blue-400">{rebuilds}</p>
            <p className="text-sm text-green-400 mt-2">
              Total times this page has been regenerated
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-black/30 rounded-lg text-sm">
          <p className="font-semibold mb-2">✨ Features demonstrated:</p>
          <ul className="list-disc list-inside space-y-1 text-green-300">
            <li><code>revalidate = 60</code> - ISR with 60s cache</li>
            <li>R2 bucket for ISR cache storage on Cloudflare</li>
            <li>Static generation with on-demand revalidation</li>
            <li>Best of both worlds: static speed + fresh data</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-600/50 rounded-lg text-sm">
          <p className="font-semibold text-yellow-400">💡 How ISR works on Cloudflare:</p>
          <p className="text-yellow-200 mt-2">
            The page is cached in R2 bucket. After 60 seconds, the next request 
            triggers a background regeneration while serving the stale page instantly.
          </p>
        </div>
      </div>
    </div>
  );
}
