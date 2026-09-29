const fs = require('fs');
let c = fs.readFileSync('src/app/admin/(protected)/about/page.tsx', 'utf8');
c = c.replace(/\.map\(\((point|stat|card|feature), (idx|i)\)/g, '.map(($1: any, $2: number)');
fs.writeFileSync('src/app/admin/(protected)/about/page.tsx', c);
console.log('Fixed types in about/page.tsx');
