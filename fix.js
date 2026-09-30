const fs = require('fs');
let path = 'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/tour-packages/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const targetStr = `                  <input type="file" accept="image/*" onChange={e => {
                    handleImageSelect(e.target.files?.[0], setContentImageFile, () => { e.target.value = ''; });
                  }} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700" />
                </div>`;

const replaceStr = `                  <div className="flex flex-col gap-2">
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

content = content.replace(targetStr.replace(/\r\n/g, '\n'), replaceStr);
content = content.replace(targetStr, replaceStr);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed tour-packages');
