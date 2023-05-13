module.exports = {
  eslint: {
    dirs: ["src"],
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-control",
            value: "max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://get.geojs.io/:path*",
      },
    ];
  },
};
