/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./assets/**/*.{js,ts,jsx,tsx}",
        "./documentation/**/*.{html,md}",
        "./examples/**/*.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                },
                secondary: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7c3aed',
                    800: '#6b21a8',
                    900: '#581c87',
                    950: '#3b0764',
                },
                success: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                    950: '#052e16',
                },
                warning: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                    950: '#451a03',
                },
                error: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#ef4444',
                    600: '#dc2626',
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                    950: '#450a0a',
                },
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
                '144': '36rem',
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            },
            minHeight: {
                'screen-75': '75vh',
            },
            fontSize: {
                '55': '55rem',
            },
            opacity: {
                '80': '.8',
            },
            zIndex: {
                '2': 2,
                '3': 3,
            },
            inset: {
                '-100': '-100%',
                '-225-px': '-225px',
                '-160-px': '-160px',
                '-150-px': '-150px',
                '-94-px': '-94px',
                '-50-px': '-50px',
                '-29-px': '-29px',
                '-20-px': '-20px',
                '25-px': '25px',
                '40-px': '40px',
                '95-px': '95px',
                '145-px': '145px',
                '195-px': '195px',
                '210-px': '210px',
                '260-px': '260px',
            },
            height: {
                '95-px': '95px',
                '70-px': '70px',
                '350-px': '350px',
                '500-px': '500px',
                '600-px': '600px',
            },
            maxHeight: {
                '860-px': '860px',
            },
            width: {
                '95-px': '95px',
                '225-px': '225px',
                '275-px': '275px',
                '350-px': '350px',
                '600-px': '600px',
            },
            minWidth: {
                '210-px': '210px',
                '350-px': '350px',
                '620-px': '620px',
            },
            backgroundSize: {
                full: '100%',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-left': 'fadeInLeft 0.6s ease-out',
                'fade-in-right': 'fadeInRight 0.6s ease-out',
                'bounce-slow': 'bounce 2s infinite',
                'pulse-slow': 'pulse 3s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                fadeInLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                fadeInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                }
            },
            boxShadow: {
                'soft-xl': '0 20px 27px 0 rgba(0, 0, 0, 0.05)',
                'soft-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                'soft-3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
                'soft-4xl': '0 50px 100px -12px rgba(0, 0, 0, 0.25)',
            },
            backdropBlur: {
                xs: '2px',
            },
            screens: {
                'xs': '475px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
            backgroundColor: ['active', 'disabled'],
            textColor: ['active', 'disabled'],
            borderColor: ['active', 'disabled'],
        },
    },
} 