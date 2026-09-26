import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
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
