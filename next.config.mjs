/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
 
  images: {
    domains: ['i.ibb.co'], // Agrega el dominio aquí
    reactStrictMode: true,
  output: 'export', // This enables static export
  images: {
    unoptimized: true, // Disable image optimization if needed
  },
},

}; // Your other configuration options


export default nextConfig