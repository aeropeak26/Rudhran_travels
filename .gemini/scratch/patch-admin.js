const fs = require('fs');
const path = require('path');

function updateAdminPage(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');

    if (!content.includes('backgroundImage:')) {
        // Add backgroundImage to state initialization
        content = content.replace(
            /(const \[data, setData\] = useState(?:<any>)?\(\{.*?)( \}\);)/s,
            `$1,\n    backgroundImage: ''$2`
        );
        
        // Add to fetchData
        content = content.replace(
            /(setData\(\{.*?)( \}\);)/s,
            `$1,\n          backgroundImage: json?.backgroundImage || ''$2`
        );
        
        // Add handleImageUpload if not exists
        if (!content.includes('handleImageUpload')) {
            const uploadFn = `
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string = 'backgroundImage') => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    try {
      setSaving(true);
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const json = await res.json();
      if (json.url) {
        setData((prev: any) => ({ ...prev, [field]: json.url }));
        toast.success('Image uploaded successfully');
      }
    } catch (err) {
      toast.error('Image upload failed');
    } finally {
      setSaving(false);
    }
  };
`;
            content = content.replace(
                /(const fetchData = async \(\) => \{.*?\n  \};)/s,
                `$1\n${uploadFn}`
            );
        }
            
        // Add UI section
        const uiSection = `
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-8 mb-8">
          <h2 className="text-xl font-bold mb-4 text-slate-800">Page Background Image</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Upload New Background</label>
              <input type="file" accept="image/*" onChange={(e) => {
                if (typeof handleImageUpload === 'function') {
                  // Check if it's the about page which might have a different signature
                  try { handleImageUpload(e as any, 'backgroundImage'); } catch(e) {}
                }
              }} className="w-full border p-1.5 rounded text-black text-sm bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
            {data.backgroundImage && (
              <div className="mt-4 p-4 border border-slate-200 rounded-lg bg-slate-50 relative">
                <img src={data.backgroundImage} alt="Background Preview" className="w-full h-32 object-cover rounded shadow-sm mb-3" />
                <button type="button" onClick={() => setData((prev:any) => ({ ...prev, backgroundImage: '' }))} className="px-3 py-1.5 bg-red-100 text-red-600 rounded text-xs font-bold hover:bg-red-200 transition-colors">
                  Remove Background Image
                </button>
              </div>
            )}
          </div>
        </div>
`;
        content = content.replace(
            /(<div className="flex justify-end">)/,
            `${uiSection}\n        $1`
        );

        fs.writeFileSync(filepath, content, 'utf8');
    }
}

updateAdminPage('src/app/admin/(protected)/tariff/page.tsx');
updateAdminPage('src/app/admin/(protected)/tour-packages/page.tsx');

// For about page, handleImageUpload already exists, we just need to append backgroundImage handling
let aboutContent = fs.readFileSync('src/app/admin/(protected)/about/page.tsx', 'utf8');
if (!aboutContent.includes('backgroundImage:')) {
    aboutContent = aboutContent.replace(
        /(const \[data, setData\] = useState<any>\(\{.*?)( \}\);)/s,
        `$1,\n    backgroundImage: ''$2`
    );
    aboutContent = aboutContent.replace(
        /(setData\(\{.*?)( \}\);)/s,
        `$1,\n          backgroundImage: json?.backgroundImage || ''$2`
    );
    
    // update handleImageUpload to support backgroundImage
    aboutContent = aboutContent.replace(
        /if \(section === 'hero'\) \{[\s\S]*?setData\(\(prev: any\) => \(\{[\s\S]*?\.\.\.prev,[\s\S]*?hero: \{ \.\.\.prev\.hero, image: json\.url \}[\s\S]*?\}\)\);[\s\S]*?\}/,
        `if (section === 'hero') {
          setData((prev: any) => ({ ...prev, hero: { ...prev.hero, image: json.url } }));
        } else if (section === 'backgroundImage') {
          setData((prev: any) => ({ ...prev, backgroundImage: json.url }));
        }`
    );

    const uiSection = `
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-8 mb-8">
          <h2 className="text-xl font-bold mb-4 text-slate-800">Page Background Image</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Upload New Background</label>
              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'backgroundImage')} className="w-full border p-1.5 rounded text-black text-sm bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
            {data.backgroundImage && (
              <div className="mt-4 p-4 border border-slate-200 rounded-lg bg-slate-50 relative">
                <img src={data.backgroundImage} alt="Background Preview" className="w-full h-32 object-cover rounded shadow-sm mb-3" />
                <button type="button" onClick={() => setData((prev:any) => ({ ...prev, backgroundImage: '' }))} className="px-3 py-1.5 bg-red-100 text-red-600 rounded text-xs font-bold hover:bg-red-200 transition-colors">
                  Remove Background Image
                </button>
              </div>
            )}
          </div>
        </div>
`;
    aboutContent = aboutContent.replace(
        /(<div className="flex justify-end mt-8">)/,
        `${uiSection}\n        $1`
    );
    fs.writeFileSync('src/app/admin/(protected)/about/page.tsx', aboutContent, 'utf8');
}
console.log('Admin pages patched successfully');
