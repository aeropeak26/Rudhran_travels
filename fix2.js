const fs = require('fs');
let path = 'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/tour-packages/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const i1 = content.indexOf('<input type="file" accept="image/*" onChange={e => {');
console.log('Index:', i1);
if (i1 > -1) {
  const sub = content.substring(i1, i1 + 500);
  console.log('Sub:', sub);
  
  // Replace using substring or exact match
  const startToReplace = content.substring(0, i1);
  const endPart = content.substring(i1);
  
  // Find where the </div> is
  const endDivIndex = endPart.indexOf('</div>');
  const actualEndIndex = endDivIndex + 6;
  
  const toReplace = endPart.substring(0, actualEndIndex);
  
  const replaceStr = `<div className="flex flex-col gap-2">
                    <input type="file" accept="image/*" onChange={e => {
                      handleImageSelect(e.target.files?.[0], setContentImageFile, () => { e.target.value = ''; });
                    }} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700" />
                    {(pageContent.heroImage || contentImageFile) && (
                      <button type="button" onClick={() => { setContentImageFile(null); setPageContent({...pageContent, heroImage: ''}); }} className="text-xs text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full w-max font-semibold">
                        Remove Image
                      </button>
                    )}
                  </div>
                </div>`;
                
  const newContent = startToReplace + replaceStr + endPart.substring(actualEndIndex);
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Fixed correctly');
}
