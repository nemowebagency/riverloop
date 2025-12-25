/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        riverloop: {
          50: "#f4f7ff",
          100: "#e3ebff",
          200: "#c7d5ff",
          300: "#9db4ff",
          400: "#6b87ff",
          500: "#3d5bff",
          600: "#2438d4",
          700: "#1b2ba6",
          800: "#17257f",
          900: "#141f63"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.18)"
      }
    }
  },
  plugins: []
};


