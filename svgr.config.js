module.exports = {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
  typescript: true,
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
            cleanupIDs: false,
            collapseGroups: false,
          },
        },
      },
    ],
  },
};
