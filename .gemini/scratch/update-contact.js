const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace phone numbers
  content = content.replace(/9840012345/g, '8760380485');
  content = content.replace(/\+919840012345/g, '+918760380485');
  
  // Also replace any variants of old emails with the new one
  content = content.replace(/info@rudhrantravels\.com/g, 'madurairudhrantravels@gmail.com');
  content = content.replace(/booking@rudhrantravels\.com/g, 'madurairudhrantravels@gmail.com');
  content = content.replace(/support@rudhrantravels\.com/g, 'madurairudhrantravels@gmail.com');
  content = content.replace(/madurairudhrantravela@gmail\.com/g, 'madurairudhrantravels@gmail.com'); // typo fix
  content = content.replace(/admin@rudhran\.com/g, 'madurairudhrantravels@gmail.com');
  content = content.replace(/madurairudhrantravels@gmail\.com/g, 'madurairudhrantravels@gmail.com'); // standardizing just in case

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated', filePath);
  }
}

function walkSync(currentDirPath) {
  fs.readdirSync(currentDirPath).forEach(function (name) {
    var filePath = path.join(currentDirPath, name);
    var stat = fs.statSync(filePath);
    if (stat.isFile()) {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        processFile(filePath);
      }
    } else if (stat.isDirectory() && name !== 'node_modules' && name !== '.next') {
      walkSync(filePath);
    }
  });
}

walkSync(dir);
console.log('Done.');
