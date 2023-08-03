/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
    @import "./src/styles/colors.scss";
    @import "./src/styles/typography.scss";
    `,
  },
};

module.exports = nextConfig;
