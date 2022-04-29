/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {...nextConfig,
  images: {
    domains: ['s3.ap-northeast-2.amazonaws.com','picsum.photos','localhost:3000','random.imagecdn.app','images.unsplash.com'],
  },

}


