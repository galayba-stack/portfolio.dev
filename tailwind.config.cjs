/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: ['class', 'class'],
    theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			'card-foreground': 'var(--card-foreground)',
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			'popover-foreground': 'var(--popover-foreground)',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			'primary-foreground': 'var(--primary-foreground)',
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			'secondary-foreground': 'var(--secondary-foreground)',
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			'muted-foreground': 'var(--muted-foreground)',
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			'accent-foreground': 'var(--accent-foreground)',
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			'destructive-foreground': 'var(--destructive-foreground)',
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			'input-background': 'var(--input-background)',
    			'switch-background': 'var(--switch-background)',
    			ring: 'hsl(var(--ring))',
    			sidebar: 'var(--sidebar)',
    			'sidebar-foreground': 'var(--sidebar-foreground)',
    			'sidebar-primary': 'var(--sidebar-primary)',
    			'sidebar-primary-foreground': 'var(--sidebar-primary-foreground)',
    			'sidebar-accent': 'var(--sidebar-accent)',
    			'sidebar-accent-foreground': 'var(--sidebar-accent-foreground)',
    			'sidebar-border': 'var(--sidebar-border)',
    			'sidebar-ring': 'var(--sidebar-ring)',
    			'chart-1': 'var(--chart-1)',
    			'chart-2': 'var(--chart-2)',
    			'chart-3': 'var(--chart-3)',
    			'chart-4': 'var(--chart-4)',
    			'chart-5': 'var(--chart-5)',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontSize: {
    			sm: 'var(--text-sm)',
    			base: 'var(--text-base)',
    			lg: 'var(--text-lg)',
    			xl: 'var(--text-xl)',
    			'2xl': 'var(--text-2xl)'
    		},
    		fontWeight: {
    			normal: 'var(--font-weight-normal)',
    			medium: 'var(--font-weight-medium)'
    		},
    		borderRadius: {
    			sm: 'calc(var(--radius) - 4px)',
    			md: 'calc(var(--radius) - 2px)',
    			lg: 'var(--radius)',
    			xl: 'calc(var(--radius) + 4px)'
    		},
			fontFamily: {
				base: ['"Noto Sans"', 'sans-serif']
			}

		}
    },
    plugins: [require("tailwindcss-animate")],
}
