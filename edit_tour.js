const fs = require('fs');
const path = 'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/tour-packages/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the Hero Image input with wrapped div + remove button
const target1 = `<input type="file" accept="image/*" onChange={e => {
                    handleImageSelect(e.target.files?.[0], setContentImageFile, () => { e.target.value = ''; });
                  }} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700" />
                </div>`;
const replacement1 = `<div className="flex flex-col gap-2">
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

content = content.replace(target1.replace(/\r\n/g, '\n'), replacement1);
content = content.replace(target1, replacement1);

// Remove the Page Background Image section
const target2 = `            <div className="pt-4 border-t border-gray-200 mb-6 mt-6">
              <h3 className="block text-sm font-medium text-gray-700 mb-2">Page Background Image</h3>
              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'backgroundImage')} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              {pageContent.backgroundImage && (
                <div className="mt-4 p-4 border border-slate-200 rounded-lg bg-slate-50 relative">
                  <img src={pageContent.backgroundImage} alt="Background Preview" className="w-full h-32 object-cover rounded shadow-sm mb-3" />
                  <button type="button" onClick={() => setPageContent({...pageContent, backgroundImage: ''})} className="px-3 py-1.5 bg-red-100 text-red-600 rounded text-xs font-bold hover:bg-red-200 transition-colors">
                    Remove Background Image
                  </button>
                </div>
              )}
            </div>`;

content = content.replace(target2.replace(/\r\n/g, '\n'), '');
content = content.replace(target2, '');

fs.writeFileSync(path, content, 'utf8');
console.log('Updated tour-packages admin UI');
