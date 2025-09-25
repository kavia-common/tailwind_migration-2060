/**
 * Tailwind CSS configuration for Vite project.
 * - Scans index.html and all files under src for class usage.
 */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {}
  },
  plugins: []
};
