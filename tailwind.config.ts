// tailwind.config.js
module.exports = {
	darkMode: 'class',
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		},
		boxShadow: {
			'glow': '0 4px 15px rgba(0, 255, 170, 0.5)', // Customize glow effect
		  },
	  },
	},
  };
  