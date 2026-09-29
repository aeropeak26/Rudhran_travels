'use client';

import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

export default function AdminGalleryPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'hero' | 'gallery' | 'feedback'>('hero');
  
  const [data, setData] = useState({
    hero: {
      title: '', subtitle: '', badge: '', description: '',
      stats: [
        { icon: '', title: '', subtitle: '' },
        { icon: '', title: '', subtitle: '' },
        { icon: '', title: '', subtitle: '' },
        { icon: '', title: '', subtitle: '' }
      ]
    },
    gallery: [] as any[],
    feedback: [] as any[]
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/gallery-content');
      const json = await res.json();
      if (json && Object.keys(json).length > 0) {
        setData({
          hero: json.hero || data.hero,
          gallery: json.gallery || [],
          feedback: json.feedback || []
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/gallery-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Gallery page content saved successfully!');
      } else {
        alert('Failed to save content.');
      }
    } catch (e) {
      console.error(e);
      alert('Error saving content.');
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      if (res.ok) {
        const newG = [...data.gallery];
        newG[idx].img = result.url;
        setData({...data, gallery: newG});
      } else {
        alert('Upload failed: ' + result.error);
      }
    } catch (err) {
      console.error(err);
      alert('Error uploading image');
    }
  };

  if (loading) return <div className="p-6 text-slate-500">Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Gallery Page CMS</h1>
          <p className="mt-2 text-sm text-slate-600">Update the hero content, photo grid, and guest feedback sections.</p>
        </div>
        <button onClick={() => handleSave()} disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-lg font-medium transition-colors shadow-sm disabled:opacity-50">
          <Save className="w-5 h-5" />
          {saving ? 'Saving...' : 'Save All Changes'}
        </button>
      </div>

      <div className="flex space-x-8 border-b border-gray-200 mb-6">
        <button onClick={() => setActiveTab('hero')} className={`pb-4 text-sm font-medium transition-colors border-b-2 ${activeTab === 'hero' ? 'border-[#ea580c] text-[#ea580c]' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>Hero & Content</button>
        <button onClick={() => setActiveTab('gallery')} className={`pb-4 text-sm font-medium transition-colors border-b-2 ${activeTab === 'gallery' ? 'border-[#ea580c] text-[#ea580c]' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>Photo Gallery</button>
        <button onClick={() => setActiveTab('feedback')} className={`pb-4 text-sm font-medium transition-colors border-b-2 ${activeTab === 'feedback' ? 'border-[#ea580c] text-[#ea580c]' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>Feedback (Auto Scroll)</button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        
        {/* HERO TAB */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Hero Section Text</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="block text-xs text-slate-500 mb-1">Subtitle</label>
                <input type="text" value={data.hero.subtitle} onChange={e => setData({...data, hero: {...data.hero, subtitle: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" placeholder="MOMENTS CAPTURED..." />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Main Title</label>
                <input type="text" value={data.hero.title} onChange={e => setData({...data, hero: {...data.hero, title: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" placeholder="Visual Chronicle: Journeys Crafted With Care" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Description</label>
                <textarea rows={3} value={data.hero.description} onChange={e => setData({...data, hero: {...data.hero, description: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" placeholder="Explore authentic moments..." />
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mt-8 mb-4">Hero Stat Cards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.hero.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-3">
                  <h3 className="text-xs font-bold text-slate-700 uppercase">Stat Card {idx + 1}</h3>
                  <select value={stat.icon} onChange={e => { const newStats = [...data.hero.stats]; newStats[idx].icon = e.target.value; setData({...data, hero: {...data.hero, stats: newStats}}); }} className="w-full border p-2 rounded text-black text-sm">
                    <option value="Clock">Clock</option>
                    <option value="ShieldCheck">Shield Check</option>
                    <option value="Star">Star</option>
                    <option value="Zap">Zap (Lightning)</option>
                    <option value="Check">Check</option>
                  </select>
                  <input type="text" value={stat.title} onChange={e => { const newStats = [...data.hero.stats]; newStats[idx].title = e.target.value; setData({...data, hero: {...data.hero, stats: newStats}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Title (e.g. 14+ Years)" />
                  <input type="text" value={stat.subtitle} onChange={e => { const newStats = [...data.hero.stats]; newStats[idx].subtitle = e.target.value; setData({...data, hero: {...data.hero, stats: newStats}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Subtitle" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GALLERY TAB */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-bold text-slate-800">Photo Gallery (First row renders 2 items, rest render 3)</h2>
              <button onClick={() => setData({...data, gallery: [...data.gallery, { title: '', desc: '', badge: '', img: '' }]})} className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded text-sm font-medium flex items-center gap-1"><Plus className="w-4 h-4"/> Add Image</button>
            </div>
            
            <div className="space-y-4">
              {data.gallery.map((img, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col md:flex-row gap-4 items-start relative pr-12">
                  <button onClick={() => { const newG = data.gallery.filter((_, i) => i !== idx); setData({...data, gallery: newG}); }} className="absolute top-4 right-4 text-red-500 hover:text-red-700"><Trash2 className="w-5 h-5"/></button>
                  <div className="w-full md:w-1/3">
                    <label className="block text-xs text-slate-500 mb-1">Image Upload</label>
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, idx)} className="w-full border p-1.5 rounded text-black text-sm bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    {img.img && <img src={img.img} alt="" className="mt-2 w-full h-24 object-cover rounded-md" />}
                  </div>
                  <div className="w-full md:w-2/3 space-y-3">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Title</label>
                      <input type="text" value={img.title} onChange={e => { const newG = [...data.gallery]; newG[idx].title = e.target.value; setData({...data, gallery: newG}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Misty Mountain Expedition" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Badge</label>
                      <input type="text" value={img.badge} onChange={e => { const newG = [...data.gallery]; newG[idx].badge = e.target.value; setData({...data, gallery: newG}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="CONVOY • MUNNAR HILLS" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Description</label>
                      <textarea rows={2} value={img.desc} onChange={e => { const newG = [...data.gallery]; newG[idx].desc = e.target.value; setData({...data, gallery: newG}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Pristine Innova Crysta..." />
                    </div>
                  </div>
                </div>
              ))}
              {data.gallery.length === 0 && <p className="text-slate-500 text-sm">No images in gallery yet.</p>}
            </div>
          </div>
        )}

        {/* FEEDBACK TAB */}
        {activeTab === 'feedback' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-bold text-slate-800">Feedback Auto Scroll Carousel</h2>
              <button onClick={() => setData({...data, feedback: [...data.feedback, { name: '', title: '', initials: '', quote: '' }]})} className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded text-sm font-medium flex items-center gap-1"><Plus className="w-4 h-4"/> Add Feedback</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.feedback.map((fb, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200 relative pr-10 space-y-3">
                  <button onClick={() => { const newF = data.feedback.filter((_, i) => i !== idx); setData({...data, feedback: newF}); }} className="absolute top-4 right-4 text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4"/></button>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block text-xs text-slate-500 mb-1">Guest Name</label>
                      <input type="text" value={fb.name} onChange={e => { const newF = [...data.feedback]; newF[idx].name = e.target.value; setData({...data, feedback: newF}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Suresh Raghavan" />
                    </div>
                    <div className="w-16">
                      <label className="block text-xs text-slate-500 mb-1">Initials</label>
                      <input type="text" value={fb.initials} onChange={e => { const newF = [...data.feedback]; newF[idx].initials = e.target.value; setData({...data, feedback: newF}); }} className="w-full border p-2 rounded text-black text-sm text-center" placeholder="SR" maxLength={2} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Subtitle / Context</label>
                    <input type="text" value={fb.title} onChange={e => { const newF = [...data.feedback]; newF[idx].title = e.target.value; setData({...data, feedback: newF}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Family Vacation to Ooty" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Quote</label>
                    <textarea rows={3} value={fb.quote} onChange={e => { const newF = [...data.feedback]; newF[idx].quote = e.target.value; setData({...data, feedback: newF}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="We booked the 5-day Munnar..." />
                  </div>
                </div>
              ))}
              {data.feedback.length === 0 && <p className="text-slate-500 text-sm md:col-span-2">No feedback entries yet.</p>}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
