const fs = require('fs');
const path = require('path');

function patchFrontendPage(filepath, dataVar) {
    let content = fs.readFileSync(filepath, 'utf8');

    // we are looking for the <section className="py-12 md:py-16 ... overflow-hidden ...">
    // inside the <main> block, which is the hero section.
    
    // For tariff page:
    if (filepath.includes('tariff') || filepath.includes('tour-packages')) {
        let heroPattern = /(<section className="py-12 md:py-16 md: relative w-full h-\[400px\] md:h-\[500px\] bg-\[#0c1222\] overflow-hidden flex flex-col justify-center items-center text-center">)\s*({.*?})\s*(<div className="absolute inset-0 opacity-30.*?<\/div>)\s*(<div className="absolute inset-0 z-0 opacity-10.*?<\/div>)/s;
        
        let match = content.match(heroPattern);
        if (match) {
            let replacement = `$1\n          {${dataVar}?.backgroundImage ? (
            <>
              <img src={${dataVar}.backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-slate-900/70 z-0"></div>
            </>
          ) : (
            <>
              $2
              $3
              $4
            </>
          )}`;
            content = content.replace(heroPattern, replacement);
            fs.writeFileSync(filepath, content, 'utf8');
            console.log(`Patched ${filepath}`);
        } else {
            console.log(`Pattern not found in ${filepath}`);
        }
    }
}

patchFrontendPage('src/app/tariff/page.tsx', 'pageContent');
patchFrontendPage('src/app/tour-packages/page.tsx', 'pageContent');
