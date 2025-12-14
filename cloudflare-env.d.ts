// Tipos gerados automaticamente pelo cf-deploy
// Não edite manualmente - use `cf-deploy init` para regenerar

interface CloudflareEnv {
  ASSETS: Fetcher;
  NEXT_INC_CACHE_R2_BUCKET: R2Bucket;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends CloudflareEnv {}
  }
}

export {};
