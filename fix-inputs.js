const fs = require('fs');

// 1. Update About Us CMS
let pathAbout = 'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/about/page.tsx';
let aboutContent = fs.readFileSync(pathAbout, 'utf8');
const aboutTarget = `              <div>
                <label className="block text-xs text-slate-500 mb-1">Hero Background Image</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'hero')} className="w-full border p-1.5 rounded text-black text-sm bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                {data.hero.heroImage && (
                  <div className="mt-2 flex flex-col items-start gap-2">
                    <img src={data.hero.heroImage} alt="" className="h-32 object-cover rounded-md border" />
                    <button type="button" onClick={() => setData({...data, hero: {...data.hero, heroImage: ''}})} className="text-xs text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full font-semibold">Remove Image</button>
                  </div>
                )}
              </div>`;
              
const aboutReplacement = `              <div>
                <label className="block text-xs text-slate-500 mb-2">Hero Background Image</label>
                <div className="flex flex-col gap-3">
                  <input id="about-hero-image" type="file" accept="image/*" onChange={(e) => {
                    handleImageUpload(e, 'hero');
                    e.target.value = '';
                  }} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                  {data.hero.heroImage && (
                    <div className="flex flex-col items-start gap-2 border p-2 rounded-lg bg-slate-50 w-max">
                      <img src={data.hero.heroImage} alt="" className="h-32 object-cover rounded-md border shadow-sm" />
                      <button type="button" onClick={() => {
                        setData({...data, hero: {...data.hero, heroImage: ''}});
                      }} className="text-xs text-red-600 bg-red-100 hover:bg-red-200 px-3 py-1.5 rounded-md font-bold transition-colors">
                        Remove Image
                      </button>
                    </div>
                  )}
                </div>
              </div>`;
              
aboutContent = aboutContent.replace(aboutTarget.replace(/\r\n/g, '\n'), aboutReplacement).replace(aboutTarget, aboutReplacement);
fs.writeFileSync(pathAbout, aboutContent, 'utf8');

// 2. Update Tariff CMS
let pathTariff = 'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/tariff/page.tsx';
let tariffContent = fs.readFileSync(pathTariff, 'utf8');
const tariffTarget = `              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Hero Background Image</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'hero')} className="w-full border p-1.5 rounded text-black text-sm bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                {data.hero.heroImage && (
                  <div className="mt-2 flex flex-col items-start gap-2">
                    <img src={data.hero.heroImage} alt="" className="h-32 object-cover rounded-md border" />
                    <button type="button" onClick={() => setData({...data, hero: {...data.hero, heroImage: ''}})} className="text-xs text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full font-semibold">Remove Image</button>
                  </div>
                )}
              </div>`;

const tariffReplacement = `              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-2">Hero Background Image</label>
                <div className="flex flex-col gap-3">
                  <input id="tariff-hero-image" type="file" accept="image/*" onChange={(e) => {
                    handleImageUpload(e, 'hero');
                    e.target.value = '';
                  }} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                  {data.hero.heroImage && (
                    <div className="flex flex-col items-start gap-2 border p-2 rounded-lg bg-slate-50 w-max">
                      <img src={data.hero.heroImage} alt="" className="h-32 object-cover rounded-md border shadow-sm" />
                      <button type="button" onClick={() => {
                        setData({...data, hero: {...data.hero, heroImage: ''}});
                      }} className="text-xs text-red-600 bg-red-100 hover:bg-red-200 px-3 py-1.5 rounded-md font-bold transition-colors">
                        Remove Image
                      </button>
                    </div>
                  )}
                </div>
              </div>`;

tariffContent = tariffContent.replace(tariffTarget.replace(/\r\n/g, '\n'), tariffReplacement).replace(tariffTarget, tariffReplacement);
fs.writeFileSync(pathTariff, tariffContent, 'utf8');

// 3. Update Contact CMS
let pathContact = 'f:/AeroPeak/Client-Rudhran/src/app/admin/(protected)/contact/page.tsx';
let contactContent = fs.readFileSync(pathContact, 'utf8');
const contactTarget = `          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Upload New Background</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full border p-1.5 rounded text-black text-sm bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
            {data.backgroundImage && (
              <div className="mt-4 p-4 border border-slate-200 rounded-lg bg-slate-50 relative">
                <img src={data.backgroundImage} alt="Background Preview" className="w-full h-32 object-cover rounded shadow-sm mb-3" />
                <button type="button" onClick={() => setData(prev => ({ ...prev, backgroundImage: '' }))} className="px-3 py-1.5 bg-red-100 text-red-600 rounded text-xs font-bold hover:bg-red-200 transition-colors">
                  Remove Background Image
                </button>
              </div>
            )}`;

const contactReplacement = `          <div className="flex flex-col gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Upload New Background</label>
              <input id="contact-hero-image" type="file" accept="image/*" onChange={(e) => {
                handleImageUpload(e);
                e.target.value = '';
              }} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
            {data.backgroundImage && (
              <div className="flex flex-col items-start gap-2 border p-2 rounded-lg bg-slate-50 w-max">
                <img src={data.backgroundImage} alt="Background Preview" className="h-32 object-cover rounded-md border shadow-sm" />
                <button type="button" onClick={() => {
                  setData(prev => ({ ...prev, backgroundImage: '' }));
                }} className="text-xs text-red-600 bg-red-100 hover:bg-red-200 px-3 py-1.5 rounded-md font-bold transition-colors">
                  Remove Background Image
                </button>
              </div>
            )}`;

contactContent = contactContent.replace(contactTarget.replace(/\r\n/g, '\n'), contactReplacement).replace(contactTarget, contactReplacement);
fs.writeFileSync(pathContact, contactContent, 'utf8');

console.log('Fixed inputs!');
