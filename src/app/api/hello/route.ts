import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  
  // Simula contador de visitas (em produção, usar Upstash Redis)
  const visits = Math.floor(Math.random() * 1000) + 100;

  return NextResponse.json({
    message: "Hello from Next.js API Route on Cloudflare Workers!",
    visits,
    timestamp: new Date().toISOString(),
    runtime: "edge",
    ip,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // Simula salvamento (em produção, usar Upstash Redis)
  const key = `data:${Date.now()}`;

  return NextResponse.json({
    success: true,
    key,
    data: body,
    message: "Data received (demo mode)",
  });
}
