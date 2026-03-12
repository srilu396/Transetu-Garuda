const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const rootContent = `--background: 0 0% 100%;--foreground: 0 0% 10.2%;--card: 0 0% 100%;--card-foreground: 0 0% 10.2%;--popover: 0 0% 100%;--popover-foreground: 0 0% 10.2%;--primary: 245.5 76.5% 65.1%;--primary-foreground: 0 0% 100%;--primary-dark: 239.5 83.6% 67.5%;--primary-light: 48 95.8% 88.8%;--secondary: 215 16% 47%;--secondary-foreground: 0 0% 100%;--accent: 318.7 63.2% 56.5%;--accent-foreground: 0 0% 100%;--accent-dark: 283.2 51.1% 55.7%;--muted: 48 95.8% 88.8%;--muted-foreground: 215 13.8% 34.1%;--destructive: 0 72% 51%;--destructive-foreground: 0 0% 100%;--border: 218.2 10.6% 64.9%;--input: 218.2 10.6% 64.9%;--ring: 245.5 76.5% 65.1%;--radius: .75rem;--gradient-primary: linear-gradient(135deg, hsl(245.5 76.5% 65.1%), hsl(318.7 63.2% 56.5%));--gradient-secondary: linear-gradient(135deg, hsl(0 0% 100%), hsl(48 95.8% 88.8%));--gradient-hero: linear-gradient(135deg, hsl(245.5 76.5% 65.1%) 0%, hsl(283.2 51.1% 55.7%) 50%, hsl(318.7 63.2% 56.5%) 100%);--gradient-card: linear-gradient(145deg, hsl(0 0% 100%), hsl(48 95.8% 88.8%));--shadow-soft: 0 4px 6px -1px rgba(0,0,0,0.05);--shadow-medium: 0 10px 15px -3px rgba(0,0,0,0.1);--shadow-large: 0 25px 50px -12px rgba(0,0,0,0.15);--shadow-glow: 0 0 50px hsl(245.5 76.5% 65.1% / .3);--transition-smooth: all .3s cubic-bezier(.4, 0, .2, 1);--transition-bounce: all .3s cubic-bezier(.68, -.55, .265, 1.55);--sidebar-background: 0 0% 100%;--sidebar-foreground: 0 0% 10.2%;--sidebar-primary: 245.5 76.5% 65.1%;--sidebar-primary-foreground: 0 0% 100%;--sidebar-accent: 48 95.8% 88.8%;--sidebar-accent-foreground: 0 0% 10.2%;--sidebar-border: 218.2 10.6% 64.9%;--sidebar-ring: 245.5 76.5% 65.1%`;

// Replace :root
css = css.replace(/:root\s*\{[^}]+\}/g, `:root{${rootContent}}`);

// Replace .dark
css = css.replace(/\.dark\s*\{[^}]+\}/g, `.dark{${rootContent}}`);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('CSS Variables Updated Successfully!');
