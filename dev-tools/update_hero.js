const fs = require('fs');
const path = require('path');

const heroPath = path.join(__dirname, 'src', 'components', 'Hero.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');

// Replace char text-white with char text-foreground for readability against light background overlay
heroContent = heroContent.replace(/className="char text-white"/g, 'className="char text-foreground"');

fs.writeFileSync(heroPath, heroContent, 'utf8');
console.log('Hero.tsx updated successfully');
