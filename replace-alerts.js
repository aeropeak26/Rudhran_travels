const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/gallery/page.tsx',
  'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/home/about/page.tsx',
  'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/home/destinations/page.tsx',
  'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/home/experiences/page.tsx',
  'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/home/hero/page.tsx',
  'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/home/tours/page.tsx',
  'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/home/vehicles/page.tsx',
  'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/tariff/page.tsx',
  'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/testimonials/page.tsx',
  'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/vehicles/[id]/page.tsx',
  'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/vehicles/page.tsx',
];

for (const filePath of filesToUpdate) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    let modified = false;

    // Check if toast is already imported
    if (!content.includes('react-hot-toast')) {
      // Find the last import statement or 'use client';
      const importRegex = /import\s+.*?from\s+['"].*?['"];?/g;
      let match;
      let lastImportIndex = -1;
      
      while ((match = importRegex.exec(content)) !== null) {
        lastImportIndex = match.index + match[0].length;
      }
      
      if (lastImportIndex !== -1) {
        content = content.slice(0, lastImportIndex) + "\nimport { toast } from 'react-hot-toast';" + content.slice(lastImportIndex);
      } else {
        const useClientIndex = content.indexOf("'use client';");
        if (useClientIndex !== -1) {
          const insertIndex = content.indexOf('\n', useClientIndex) + 1;
          content = content.slice(0, insertIndex) + "import { toast } from 'react-hot-toast';\n" + content.slice(insertIndex);
        } else {
          content = "import { toast } from 'react-hot-toast';\n" + content;
        }
      }
      modified = true;
    }

    // Replace alerts
    if (content.includes('alert(')) {
      content = content.replace(/alert\((['"`].*?success.*?[`"'])\)/gi, 'toast.success($1)');
      content = content.replace(/alert\((['"`].*?error.*?[`"'])\)/gi, 'toast.error($1)');
      content = content.replace(/alert\((['"`].*?fail.*?[`"'])\)/gi, 'toast.error($1)');
      content = content.replace(/alert\(/g, 'toast.error('); // Default remaining to error (most are errors like "An error occurred", "Upload failed")
      // wait, what if there's a successful save like "Saved successfully!" which doesn't have "success"?
      // Let's refine the regex for success
      content = content.replace(/toast\.error\((['"`].*?Saved successfully.*?[`"'])\)/gi, 'toast.success($1)');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated: ' + filePath);
    }
  } else {
    console.log('Not found: ' + filePath);
  }
}
