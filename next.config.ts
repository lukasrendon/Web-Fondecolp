import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // pptxgenjs importa node:fs y node:https solo en Node. Webpack del cliente
  // no entiende el esquema "node:" y el build de producción falla.
  webpack: (config, { isServer, webpack }) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource: { request: string }) => {
        resource.request = resource.request.replace(/^node:/, "");
      }),
    );

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        https: false,
      };
    }

    return config;
  },
  async redirects() {
    return [
      { source: "/asociados", destination: "/asociate", permanent: false },
      { source: "/contactenos", destination: "/contacto", permanent: false },
      { source: "/convenios-y-aliados", destination: "/convenios", permanent: false },
      { source: "/organos-de-administracion-y-control", destination: "/organos", permanent: false },
      { source: "/formulario-asociacion", destination: "/asociate/formulario", permanent: false },
    ];
  },
};

export default nextConfig;
