/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    api: 'https://mydomain.com/api',
    phone: '+41 00 000 00 00',
    mail: 'info@mydomain.com',
    ig: 'https://www.instagram.com/myaccount/',
    fb: 'https://www.facebook.com/myaccount',
    in: 'https://www.linkedin.com/company/myaccount',
  },
};

module.exports = nextConfig;
