/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Activa el modo estricto de React
    swcMinify: true, // Habilita la minificación usando SWC
    experimental: {
      appDir: true, // Habilita el uso del nuevo directorio de aplicaciones (si corresponde)
    },
  };
  
  export default nextConfig;