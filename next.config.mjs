/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  async redirects() {
    return [
      {
        source: "/news{/}?",
        destination: "https://learn.kce.ac.in/category/latest-news/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
