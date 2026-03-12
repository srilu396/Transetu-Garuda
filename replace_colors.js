const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const rootContent = `--background: 0 0% 100%;--foreground: 222.2 47.4% 11.2%;--card: 0 0% 100%;--card-foreground: 222.2 47.4% 11.2%;--popover: 0 0% 100%;--popover-foreground: 222.2 47.4% 11.2%;--primary: 239 84% 67%;--primary-foreground: 210 40% 98%;--primary-dark: 239 84% 57%;--primary-light: 239 84% 87%;--secondary: 210 40% 96.1%;--secondary-foreground: 222.2 47.4% 11.2%;--accent: 326 100% 60%;--accent-foreground: 210 40% 98%;--accent-dark: 326 100% 40%;--muted: 210 40% 96.1%;--muted-foreground: 215.4 16.3% 46.9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 210 40% 98%;--border: 214.3 31.8% 91.4%;--input: 214.3 31.8% 91.4%;--ring: 239 84% 67%;--radius: .75rem;--gradient-primary: linear-gradient(90deg, #6366F1, #A855F7, #EC4899);--gradient-secondary: linear-gradient(135deg, hsl(239 84% 67%), hsl(326 100% 60%));--gradient-hero: linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #EC4899 100%);--gradient-card: linear-gradient(145deg, hsl(210 40% 98%), hsl(210 40% 96.1%));--shadow-soft: 0 4px 6px -1px rgba(0,0,0,0.05);--shadow-medium: 0 10px 15px -3px rgba(0,0,0,0.1);--shadow-large: 0 25px 50px -12px rgba(0,0,0,0.15);--shadow-glow: 0 0 50px rgba(139, 92, 246, 0.3);--transition-smooth: all .3s cubic-bezier(.4, 0, .2, 1);--transition-bounce: all .3s cubic-bezier(.68, -.55, .265, 1.55);--sidebar-background: 0 0% 100%;--sidebar-foreground: 222.2 47.4% 11.2%;--sidebar-primary: 239 84% 67%;--sidebar-primary-foreground: 210 40% 98%;--sidebar-accent: 210 40% 96.1%;--sidebar-accent-foreground: 222.2 47.4% 11.2%;--sidebar-border: 214.3 31.8% 91.4%;--sidebar-ring: 239 84% 67%`;

// Replace :root
css = css.replace(/:root\s*\{[^}]+\}/g, `:root{${rootContent}}`);

// Replace .dark
css = css.replace(/\.dark\s*\{[^}]+\}/g, `.dark{${rootContent}}`);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('CSS Variables Updated Successfully!');
