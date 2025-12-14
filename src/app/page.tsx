import Link from "next/link";

const features = [
  {
    title: "SSR (Server-Side Rendering)",
    href: "/ssr",
    description: "Dynamic server rendering on every request",
    icon: "🚀",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "ISR (Incremental Static Regeneration)",
    href: "/isr",
    description: "Static pages with automatic revalidation",
    icon: "⚡",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Server Actions + Todos",
    href: "/todos",
    description: "Full CRUD with Server Actions & Supabase",
    icon: "📝",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "API Routes",
    href: "/api/hello",
    description: "Edge API with rate limiting (Upstash)",
    icon: "🔌",
    color: "from-orange-500 to-red-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Next.js Full Power
          </h1>
          <p className="text-xl text-gray-400 mb-2">
            Running on Cloudflare Workers via cf-deploy
          </p>
          <p className="text-sm text-gray-500">
            Domain: <span className="text-blue-400">nextjs-full.orbty.app</span>
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.color} p-[2px] transition-all hover:scale-[1.02]`}
            >
              <div className="h-full rounded-2xl bg-gray-900 p-6 transition-colors group-hover:bg-gray-800">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <section className="bg-gray-800/50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🛠️ Stack & Integrations</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Framework</h3>
              <ul className="space-y-1 text-gray-400">
                <li>• Next.js 16 (App Router)</li>
                <li>• TypeScript</li>
                <li>• TailwindCSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Cloudflare</h3>
              <ul className="space-y-1 text-gray-400">
                <li>• Workers (Edge Runtime)</li>
                <li>• R2 (ISR Cache)</li>
                <li>• OpenNext Adapter</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Services</h3>
              <ul className="space-y-1 text-gray-400">
                <li>• Supabase (Database)</li>
                <li>• Upstash Redis (Cache)</li>
                <li>• Rate Limiting</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">✨ Features Demonstrated</h2>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-400">
            <li>✅ Server-Side Rendering (SSR)</li>
            <li>✅ Incremental Static Regeneration (ISR)</li>
            <li>✅ Server Actions (mutations)</li>
            <li>✅ API Routes (Edge)</li>
            <li>✅ Middleware</li>
            <li>✅ Database (Supabase)</li>
            <li>✅ Redis Cache (Upstash)</li>
            <li>✅ Rate Limiting</li>
          </ul>
        </section>

        <footer className="text-center mt-16 text-gray-500 text-sm">
          <p>Deployed with cf-deploy • Powered by Cloudflare Workers</p>
        </footer>
      </div>
    </div>
  );
}
