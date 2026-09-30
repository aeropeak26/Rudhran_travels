const fs = require('fs');

// 1. Update Tour Packages CMS
let pathTP = 'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/tour-packages/page.tsx';
let tpContent = fs.readFileSync(pathTP, 'utf8');

// Replace Hero Image input in tour packages
const tpTarget = `<input type="file" accept="image/*" onChange={e => {
                    handleImageSelect(e.target.files?.[0], setContentImageFile, () => { e.target.value = ''; });
                  }} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700" />
                </div>`;
const tpReplacement = `<div className="flex flex-col gap-2">
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
tpContent = tpContent.replace(tpTarget.replace(/\r\n/g, '\n'), tpReplacement).replace(tpTarget, tpReplacement);

fs.writeFileSync(pathTP, tpContent, 'utf8');

// 2. Update About Us CMS
let pathAbout = 'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/about/page.tsx';
let aboutContent = fs.readFileSync(pathAbout, 'utf8');
const aboutTarget = `{data.hero.heroImage && <img src={data.hero.heroImage} alt="" className="mt-2 h-32 object-cover rounded-md" />}`;
const aboutReplacement = `{data.hero.heroImage && (
                  <div className="mt-2 flex flex-col items-start gap-2">
                    <img src={data.hero.heroImage} alt="" className="h-32 object-cover rounded-md border" />
                    <button type="button" onClick={() => setData({...data, hero: {...data.hero, heroImage: ''}})} className="text-xs text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full font-semibold">Remove Image</button>
                  </div>
                )}`;
aboutContent = aboutContent.replace(aboutTarget, aboutReplacement);
fs.writeFileSync(pathAbout, aboutContent, 'utf8');

// 3. Update Tariff CMS
let pathTariff = 'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/tariff/page.tsx';
let tariffContent = fs.readFileSync(pathTariff, 'utf8');
tariffContent = tariffContent.replace(aboutTarget, aboutReplacement); // They have the exact same target string!
fs.writeFileSync(pathTariff, tariffContent, 'utf8');

// 4. Update Contact CMS
let pathContact = 'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/contact/page.tsx';
let contactContent = fs.readFileSync(pathContact, 'utf8');
contactContent = contactContent.replace('Page Background Image', 'Hero Background Image');
fs.writeFileSync(pathContact, contactContent, 'utf8');

console.log('All buttons added successfully!');
