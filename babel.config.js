
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // This setting helps with the RegExp complexity issue
        bugfixes: true,
        // Use modern syntax features whenever possible
        loose: false,
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  // Minimize RegExp complexity in plugins
  plugins: [
    ["@babel/plugin-transform-runtime", { regenerator: false }],
  ],
};
