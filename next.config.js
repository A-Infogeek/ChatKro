/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    //     swcPlugins: [["next-superjson-plugin", {}]]
    //   }
    // images: {
    //     domains: [
    //     //   'res.cloudinary.com', 
    //     //   'avatars.githubusercontent.com',
    //       'lh3.googleusercontent.com'
    //     ]
    //   }
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: "**",
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: "**",
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: "**",
          },
          
        ],
      },
}

module.exports = nextConfig
