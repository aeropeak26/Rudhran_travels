'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Image as ImageIcon, Save, ArrowLeft } from 'lucide-react';
import { ITourPackage } from '@/models/TourPackage';
import { ITourPageContent } from '@/models/TourPageContent';

export default function AdminTourPackages() {
  const [activeTab, setActiveTab] = useState<'packages' | 'contents'>('packages');
  
  // --- CONTENTS TAB STATE ---
  const [pageContent, setPageContent] = useState<any>({
    heroImage: '', badge: '', title: '', description: '', features: ['']
  });
  const [contentImageFile, setContentImageFile] = useState<File | null>(null);
  const [isSavingContent, setIsSavingContent] = useState(false);

  // --- PACKAGES TAB STATE ---
  const [packages, setPackages] = useState<any[]>([]);
  const [view, setView] = useState<'table' | 'form'>('table');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmittingPkg, setIsSubmittingPkg] = useState(false);

  // Complex Form State for Package
  const [pkgData, setPkgData] = useState<any>(getEmptyPackage());
  const [pkgMainImage, setPkgMainImage] = useState<File | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resPkg, resContent] = await Promise.all([
        fetch('/api/tour-packages'),
        fetch('/api/tour-content')
      ]);
      const pData = await resPkg.json();
      const cData = await resContent.json();
      setPackages(Array.isArray(pData) ? pData : []);
      if (cData && Object.keys(cData).length > 0) {
        setPageContent({
          heroImage: cData.heroImage || '',
          badge: cData.badge || '',
          title: cData.title || '',
          description: cData.description || '',
          features: cData.features && cData.features.length > 0 ? cData.features : ['']
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // --- IMAGE UPLOAD HELPER ---
  const uploadImage = async (file: File): Promise<string> => {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: fd });
    if (!res.ok) throw new Error('Upload failed');
    const data = await res.json();
    return data.url;
  };

  // --- CONTENT TAB LOGIC ---
  const handleSaveContent = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingContent(true);
    try {
      let finalImg = pageContent.heroImage;
      if (contentImageFile) {
        finalImg = await uploadImage(contentImageFile);
      }
      const payload = { ...pageContent, heroImage: finalImg };
      const res = await fetch('/api/tour-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        alert('Page Content saved!');
        setContentImageFile(null);
        fetchData();
      }
    } catch (error) {
      console.error(error);
      alert('Error saving content');
    } finally {
      setIsSavingContent(false);
    }
  };

  // --- PACKAGE FORM LOGIC ---
  function getEmptyPackage() {
    return {
      title: '', subtitle: '', duration: '', price: '', category: 'Kerala', badge: '', img: '', desc: '', featured: false,
      hero: { badge: '', title: '', desc: '', pacing: '', stayTier: '', carriage: '', escort: '', pricingTitle: '', pricingType: '', pricingAdvance: '' },
      waypoints: [],
      itinerary: [],
      vehicles: [],
      inclusions: [''],
      exclusions: ['']
    };
  }

  const handleOpenForm = (pkg?: any) => {
    if (pkg) {
      setEditingId(pkg._id);
      // Safe merge to ensure nested objects like hero exist even if missing in DB
      const safePkg = { ...getEmptyPackage(), ...JSON.parse(JSON.stringify(pkg)) };
      safePkg.hero = { ...getEmptyPackage().hero, ...(pkg.hero || {}) };
      safePkg.waypoints = pkg.waypoints || [];
      safePkg.itinerary = pkg.itinerary || [];
      safePkg.vehicles = pkg.vehicles || [];
      safePkg.inclusions = pkg.inclusions || [''];
      safePkg.exclusions = pkg.exclusions || [''];
      setPkgData(safePkg);
    } else {
      setEditingId(null);
      setPkgData(getEmptyPackage());
    }
    setPkgMainImage(null);
    setView('form');
  };

  const handleSavePackage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingPkg(true);
    try {
      let finalImg = pkgData.img;
      if (pkgMainImage) {
        finalImg = await uploadImage(pkgMainImage);
      }
      const payload = { ...pkgData, img: finalImg };

      // Upload itinerary images
      if (payload.itinerary && payload.itinerary.length > 0) {
        for (let i = 0; i < payload.itinerary.length; i++) {
          const day = payload.itinerary[i];
          if (day._file) {
            day.img = await uploadImage(day._file);
            delete day._file;
          }
        }
      }

      const url = editingId ? `/api/tour-packages/${editingId}` : `/api/tour-packages`;
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setView('table');
        fetchData();
      } else {
        alert('Failed to save package');
      }
    } catch (err) {
      console.error(err);
      alert('Error saving package');
    } finally {
      setIsSubmittingPkg(false);
    }
  };

  const handleDeletePkg = async (id: string) => {
    if (!confirm('Are you sure you want to delete this package?')) return;
    try {
      await fetch(`/api/tour-packages/${id}`, { method: 'DELETE' });
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Tour Packages CMS</h1>
        <p className="mt-2 text-sm text-slate-600">Manage your dynamic tour itineraries and page contents.</p>
      </div>

      {/* TABS */}
      {view === 'table' && (
        <div className="flex space-x-1 border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('packages')}
            className={`py-3 px-6 text-sm font-medium border-b-2 transition-colors ${activeTab === 'packages' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Manage Packages
          </button>
          <button
            onClick={() => setActiveTab('contents')}
            className={`py-3 px-6 text-sm font-medium border-b-2 transition-colors ${activeTab === 'contents' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Page Contents (Hero)
          </button>
        </div>
      )}

      {/* --- ALL CONTENTS TAB --- */}
      {activeTab === 'contents' && view === 'table' && (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-6 text-slate-800">Tour Page Hero Section</h2>
          <form onSubmit={handleSaveContent} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-32 bg-gray-100 rounded overflow-hidden border border-gray-200">
                    {contentImageFile ? (
                      <img src={URL.createObjectURL(contentImageFile)} className="h-full w-full object-cover" alt="preview" />
                    ) : pageContent.heroImage ? (
                      <img src={pageContent.heroImage} className="h-full w-full object-cover" alt="hero" />
                    ) : (
                      <ImageIcon className="h-8 w-8 text-gray-400 m-auto mt-6" />
                    )}
                  </div>
                  <input type="file" accept="image/*" onChange={e => e.target.files && setContentImageFile(e.target.files[0])} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Top Badge Text</label>
                <input type="text" value={pageContent.badge} onChange={e => setPageContent({...pageContent, badge: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 border p-2 text-black" placeholder="OUR TOUR PACKAGES" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Main Heading</label>
              <input type="text" value={pageContent.title} onChange={e => setPageContent({...pageContent, title: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 border p-2 text-black" placeholder="Discover Places Worth Remembering" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea rows={3} value={pageContent.description} onChange={e => setPageContent({...pageContent, description: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 border p-2 text-black" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Feature Highlights (Pills)</label>
              {pageContent.features.map((feat: string, i: number) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input type="text" value={feat} onChange={e => {
                    const newF = [...pageContent.features];
                    newF[i] = e.target.value;
                    setPageContent({...pageContent, features: newF});
                  }} className="block w-full rounded-md border-gray-300 border p-2 text-black" placeholder="e.g. Guaranteed Punctual Chauffeurs" />
                  <button type="button" onClick={() => setPageContent({...pageContent, features: pageContent.features.filter((_: any, idx: number) => idx !== i)})} className="px-3 py-2 text-red-600 bg-red-50 rounded hover:bg-red-100"><Trash2 className="w-4 h-4"/></button>
                </div>
              ))}
              <button type="button" onClick={() => setPageContent({...pageContent, features: [...pageContent.features, '']})} className="text-sm text-blue-600 font-medium mt-2">+ Add Feature</button>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button type="submit" disabled={isSavingContent} className="px-6 py-2 bg-orange-600 text-white font-medium rounded shadow hover:bg-orange-700 disabled:opacity-50">
                {isSavingContent ? 'Saving...' : 'Save Page Content'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- PACKAGES TAB (TABLE) --- */}
      {activeTab === 'packages' && view === 'table' && (
        <div>
          <div className="flex justify-end mb-4">
            <button onClick={() => handleOpenForm()} className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
              <Plus className="w-4 h-4 mr-2" /> Add Package
            </button>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price / Duration</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr><td colSpan={4} className="px-6 py-10 text-center text-gray-500">Loading...</td></tr>
                ) : packages.length === 0 ? (
                  <tr><td colSpan={4} className="px-6 py-10 text-center text-gray-500">No packages found. Add one!</td></tr>
                ) : (
                  packages.map(p => (
                    <tr key={p._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                            <img src={p.img} alt="" className="h-full w-full object-cover" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{p.title}</div>
                            <div className="text-sm text-gray-500">{p.badge || 'No Badge'} {p.featured && '(Featured)'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{p.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{p.price}<br/><span className="text-xs text-gray-400">{p.duration}</span></td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => handleOpenForm(p)} className="text-indigo-600 hover:text-indigo-900 mr-4"><Edit2 className="w-4 h-4 inline"/></button>
                        <button onClick={() => handleDeletePkg(p._id)} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4 inline"/></button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* --- ADD/EDIT PACKAGE FORM --- */}
      {view === 'form' && (
        <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 border border-gray-200">
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <button onClick={() => setView('table')} className="flex items-center text-gray-500 hover:text-gray-900 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Packages
            </button>
            <h2 className="text-2xl font-bold text-gray-900">{editingId ? 'Edit Tour Package' : 'Create Tour Package'}</h2>
          </div>

          <form onSubmit={handleSavePackage} className="space-y-12">
            
            {/* SECTION 1: BASIC INFO */}
            <section>
              <h3 className="text-lg font-semibold text-blue-900 mb-4 border-b border-gray-100 pb-2">1. Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input type="text" required value={pkgData.title} onChange={e => setPkgData({...pkgData, title: e.target.value})} className="mt-1 block w-full rounded border-gray-300 border p-2 text-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subtitle (Locations)</label>
                  <input type="text" required value={pkgData.subtitle} onChange={e => setPkgData({...pkgData, subtitle: e.target.value})} className="mt-1 block w-full rounded border-gray-300 border p-2 text-black" placeholder="Munnar | Thekkady" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category (Filter Tab)</label>
                  <select required value={pkgData.category} onChange={e => setPkgData({...pkgData, category: e.target.value})} className="mt-1 block w-full rounded border-gray-300 border p-2 text-black">
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="South India Circuit">South India Circuit</option>
                    <option value="Family Trips">Family Trips</option>
                    <option value="Group Trips">Group Trips</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Duration</label>
                  <input type="text" required value={pkgData.duration} onChange={e => setPkgData({...pkgData, duration: e.target.value})} className="mt-1 block w-full rounded border-gray-300 border p-2 text-black" placeholder="5 Days / 4 Nights" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Starting Price</label>
                  <input type="text" required value={pkgData.price} onChange={e => setPkgData({...pkgData, price: e.target.value})} className="mt-1 block w-full rounded border-gray-300 border p-2 text-black" placeholder="12,999" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Badge</label>
                  <input type="text" value={pkgData.badge} onChange={e => setPkgData({...pkgData, badge: e.target.value})} className="mt-1 block w-full rounded border-gray-300 border p-2 text-black" placeholder="POPULAR DESTINATION" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Short Card Description</label>
                  <textarea rows={2} required value={pkgData.desc} onChange={e => setPkgData({...pkgData, desc: e.target.value})} className="mt-1 block w-full rounded border-gray-300 border p-2 text-black" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Main Card Image</label>
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-24 bg-gray-100 rounded overflow-hidden border border-gray-200">
                      {pkgMainImage ? (
                        <img src={URL.createObjectURL(pkgMainImage)} className="h-full w-full object-cover" />
                      ) : pkgData.img ? (
                        <img src={pkgData.img} className="h-full w-full object-cover" />
                      ) : <ImageIcon className="h-6 w-6 text-gray-400 m-auto mt-5" />}
                    </div>
                    <input type="file" accept="image/*" onChange={e => e.target.files && setPkgMainImage(e.target.files[0])} className="text-xs" />
                  </div>
                </div>

                <div className="flex items-center mt-6">
                  <input type="checkbox" checked={pkgData.featured} onChange={e => setPkgData({...pkgData, featured: e.target.checked})} className="h-4 w-4 text-orange-600 rounded" />
                  <label className="ml-2 block text-sm font-medium text-gray-900">Featured (Big Gold Badge)</label>
                </div>
              </div>
            </section>

            {/* SECTION 2: HERO DETAILS */}
            <section>
              <h3 className="text-lg font-semibold text-blue-900 mb-4 border-b border-gray-100 pb-2">2. Details Page Hero</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Top Badge (e.g. CURATED TOUR)" value={pkgData.hero.badge} onChange={e => setPkgData({...pkgData, hero: {...pkgData.hero, badge: e.target.value}})} className="border p-2 rounded text-black" />
                <input type="text" placeholder="Hero Title" value={pkgData.hero.title} onChange={e => setPkgData({...pkgData, hero: {...pkgData.hero, title: e.target.value}})} className="border p-2 rounded text-black" />
                <textarea placeholder="Hero Description" rows={2} value={pkgData.hero.desc} onChange={e => setPkgData({...pkgData, hero: {...pkgData.hero, desc: e.target.value}})} className="border p-2 rounded text-black md:col-span-2" />
                
                <input type="text" placeholder="Pacing (e.g. 5.5h / day)" value={pkgData.hero.pacing} onChange={e => setPkgData({...pkgData, hero: {...pkgData.hero, pacing: e.target.value}})} className="border p-2 rounded text-black" />
                <input type="text" placeholder="Stay Tier (e.g. Boutique Stays)" value={pkgData.hero.stayTier} onChange={e => setPkgData({...pkgData, hero: {...pkgData.hero, stayTier: e.target.value}})} className="border p-2 rounded text-black" />
                <input type="text" placeholder="Carriage (e.g. Innova Crysta)" value={pkgData.hero.carriage} onChange={e => setPkgData({...pkgData, hero: {...pkgData.hero, carriage: e.target.value}})} className="border p-2 rounded text-black" />
                <input type="text" placeholder="Escort (e.g. Hill Master)" value={pkgData.hero.escort} onChange={e => setPkgData({...pkgData, hero: {...pkgData.hero, escort: e.target.value}})} className="border p-2 rounded text-black" />
                
                <input type="text" placeholder="Pricing Box Title (e.g. ALLEPPEY CRUISE)" value={pkgData.hero.pricingTitle} onChange={e => setPkgData({...pkgData, hero: {...pkgData.hero, pricingTitle: e.target.value}})} className="border p-2 rounded text-black" />
                <input type="text" placeholder="Pricing Type (e.g. ALL INCLUSIVE)" value={pkgData.hero.pricingType} onChange={e => setPkgData({...pkgData, hero: {...pkgData.hero, pricingType: e.target.value}})} className="border p-2 rounded text-black" />
              </div>
            </section>

            {/* SECTION 3: ITINERARY */}
            <section>
              <h3 className="text-lg font-semibold text-blue-900 mb-4 border-b border-gray-100 pb-2 flex justify-between items-center">
                3. Day-by-Day Itinerary
                <button type="button" onClick={() => setPkgData({...pkgData, itinerary: [...pkgData.itinerary, { dayLabel: '', tag: '', tagDesc: '', title: '', desc: '', stay: '', distance: '', img: '' }]})} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded">+ Add Day</button>
              </h3>
              
              <div className="space-y-6">
                {pkgData.itinerary.map((day: any, i: number) => (
                  <div key={i} className="bg-gray-50 p-4 rounded border border-gray-200 relative">
                    <button type="button" onClick={() => setPkgData({...pkgData, itinerary: pkgData.itinerary.filter((_:any, idx:number) => idx !== i)})} className="absolute top-2 right-2 text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4"/></button>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <input type="text" placeholder="Day Label (e.g. DAY 01 & 02)" value={day.dayLabel} onChange={e => { const n = [...pkgData.itinerary]; n[i].dayLabel = e.target.value; setPkgData({...pkgData, itinerary: n}); }} className="border p-2 rounded text-black" />
                      <input type="text" placeholder="Location Tag (e.g. HIGHLAND)" value={day.tag} onChange={e => { const n = [...pkgData.itinerary]; n[i].tag = e.target.value; setPkgData({...pkgData, itinerary: n}); }} className="border p-2 rounded text-black" />
                      <input type="text" placeholder="Tag Desc (e.g. 1,600m)" value={day.tagDesc} onChange={e => { const n = [...pkgData.itinerary]; n[i].tagDesc = e.target.value; setPkgData({...pkgData, itinerary: n}); }} className="border p-2 rounded text-black" />
                    </div>
                    <div className="mb-4">
                      <input type="text" placeholder="Day Title (e.g. Valara Cascades)" value={day.title} onChange={e => { const n = [...pkgData.itinerary]; n[i].title = e.target.value; setPkgData({...pkgData, itinerary: n}); }} className="w-full border p-2 rounded text-black mb-2" />
                      <textarea placeholder="Day Description..." rows={3} value={day.desc} onChange={e => { const n = [...pkgData.itinerary]; n[i].desc = e.target.value; setPkgData({...pkgData, itinerary: n}); }} className="w-full border p-2 rounded text-black" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input type="text" placeholder="Stay (e.g. Tall Trees)" value={day.stay} onChange={e => { const n = [...pkgData.itinerary]; n[i].stay = e.target.value; setPkgData({...pkgData, itinerary: n}); }} className="border p-2 rounded text-black" />
                      <input type="text" placeholder="Distance (e.g. 130 km)" value={day.distance} onChange={e => { const n = [...pkgData.itinerary]; n[i].distance = e.target.value; setPkgData({...pkgData, itinerary: n}); }} className="border p-2 rounded text-black" />
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-14 bg-gray-100 rounded border border-gray-300 overflow-hidden shrink-0 flex items-center justify-center">
                          {day._file ? (
                            <img src={URL.createObjectURL(day._file)} className="h-full w-full object-cover" />
                          ) : day.img ? (
                            <img src={day.img} className="h-full w-full object-cover" />
                          ) : <ImageIcon className="w-4 h-4 text-gray-400" />}
                        </div>
                        <input type="file" accept="image/*" onChange={e => {
                          const n = [...pkgData.itinerary];
                          if (e.target.files && e.target.files[0]) {
                            n[i]._file = e.target.files[0];
                          }
                          setPkgData({...pkgData, itinerary: n});
                        }} className="text-xs w-full text-slate-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-blue-50 file:text-blue-700" />
                      </div>
                    </div>
                  </div>
                ))}
                {pkgData.itinerary.length === 0 && <p className="text-sm text-gray-400">No itinerary days added.</p>}
              </div>
            </section>

            {/* SECTION 4: INCLUSIONS & EXCLUSIONS */}
            <section>
              <h3 className="text-lg font-semibold text-blue-900 mb-4 border-b border-gray-100 pb-2">4. Inclusions & Exclusions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Inclusions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inclusions</label>
                  {(pkgData.inclusions || []).map((inc: string, i: number) => (
                    <div key={`inc-${i}`} className="flex gap-2 mb-2">
                      <input type="text" value={inc} onChange={e => {
                        const newInc = [...(pkgData.inclusions || [])];
                        newInc[i] = e.target.value;
                        setPkgData({...pkgData, inclusions: newInc});
                      }} className="block w-full rounded border-gray-300 border p-2 text-black text-sm" placeholder="e.g. Dedicated vehicle..." />
                      <button type="button" onClick={() => setPkgData({...pkgData, inclusions: pkgData.inclusions.filter((_: any, idx: number) => idx !== i)})} className="px-3 py-2 text-red-600 bg-red-50 rounded hover:bg-red-100"><Trash2 className="w-4 h-4"/></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => setPkgData({...pkgData, inclusions: [...(pkgData.inclusions || []), '']})} className="text-sm text-emerald-600 font-medium mt-2">+ Add Inclusion</button>
                </div>

                {/* Exclusions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Exclusions</label>
                  {(pkgData.exclusions || []).map((exc: string, i: number) => (
                    <div key={`exc-${i}`} className="flex gap-2 mb-2">
                      <input type="text" value={exc} onChange={e => {
                        const newExc = [...(pkgData.exclusions || [])];
                        newExc[i] = e.target.value;
                        setPkgData({...pkgData, exclusions: newExc});
                      }} className="block w-full rounded border-gray-300 border p-2 text-black text-sm" placeholder="e.g. Entry tickets..." />
                      <button type="button" onClick={() => setPkgData({...pkgData, exclusions: pkgData.exclusions.filter((_: any, idx: number) => idx !== i)})} className="px-3 py-2 text-red-600 bg-red-50 rounded hover:bg-red-100"><Trash2 className="w-4 h-4"/></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => setPkgData({...pkgData, exclusions: [...(pkgData.exclusions || []), '']})} className="text-sm text-red-600 font-medium mt-2">+ Add Exclusion</button>
                </div>

              </div>
            </section>

            {/* SECTION 5: WAYPOINTS */}
            <section>
              <h3 className="text-lg font-semibold text-blue-900 mb-4 border-b border-gray-100 pb-2 flex justify-between items-center">
                5. Route Waypoints
                <button type="button" onClick={() => setPkgData({...pkgData, waypoints: [...(pkgData.waypoints || []), { id: '', title: '', desc: '' }]})} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded">+ Add Waypoint</button>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(pkgData.waypoints || []).map((wp: any, i: number) => (
                  <div key={`wp-${i}`} className="bg-gray-50 p-4 rounded border border-gray-200 relative">
                    <button type="button" onClick={() => setPkgData({...pkgData, waypoints: pkgData.waypoints.filter((_: any, idx: number) => idx !== i)})} className="absolute top-2 right-2 text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4"/></button>
                    <input type="text" placeholder="ID (e.g. 01)" value={wp.id} onChange={e => { const n = [...pkgData.waypoints]; n[i].id = e.target.value; setPkgData({...pkgData, waypoints: n}); }} className="w-full border p-2 rounded text-black text-sm mb-2" />
                    <input type="text" placeholder="Title (e.g. Cochin Arrival)" value={wp.title} onChange={e => { const n = [...pkgData.waypoints]; n[i].title = e.target.value; setPkgData({...pkgData, waypoints: n}); }} className="w-full border p-2 rounded text-black text-sm mb-2" />
                    <input type="text" placeholder="Short Desc..." value={wp.desc} onChange={e => { const n = [...pkgData.waypoints]; n[i].desc = e.target.value; setPkgData({...pkgData, waypoints: n}); }} className="w-full border p-2 rounded text-black text-sm" />
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 6: VEHICLES */}
            <section>
              <h3 className="text-lg font-semibold text-blue-900 mb-4 border-b border-gray-100 pb-2 flex justify-between items-center">
                6. Available Vehicles / Pricing
                <button type="button" onClick={() => setPkgData({...pkgData, vehicles: [...(pkgData.vehicles || []), { tier: '', category: '', name: '', subtitle: '', price: '', features: [''], recommended: false }]})} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded">+ Add Vehicle</button>
              </h3>
              <div className="space-y-6">
                {(pkgData.vehicles || []).map((v: any, i: number) => (
                  <div key={`veh-${i}`} className="bg-gray-50 p-6 rounded border border-gray-200 relative">
                    <button type="button" onClick={() => setPkgData({...pkgData, vehicles: pkgData.vehicles.filter((_: any, idx: number) => idx !== i)})} className="absolute top-4 right-4 text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4"/></button>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 pr-8">
                      <input type="text" placeholder="Tier (e.g. Tier 01)" value={v.tier} onChange={e => { const n = [...pkgData.vehicles]; n[i].tier = e.target.value; setPkgData({...pkgData, vehicles: n}); }} className="border p-2 rounded text-black text-sm" />
                      <input type="text" placeholder="Category (e.g. COUPLES)" value={v.category} onChange={e => { const n = [...pkgData.vehicles]; n[i].category = e.target.value; setPkgData({...pkgData, vehicles: n}); }} className="border p-2 rounded text-black text-sm" />
                      <input type="text" placeholder="Name (e.g. Sedan)" value={v.name} onChange={e => { const n = [...pkgData.vehicles]; n[i].name = e.target.value; setPkgData({...pkgData, vehicles: n}); }} className="border p-2 rounded text-black text-sm" />
                      <input type="text" placeholder="Price (e.g. 12,999)" value={v.price} onChange={e => { const n = [...pkgData.vehicles]; n[i].price = e.target.value; setPkgData({...pkgData, vehicles: n}); }} className="border p-2 rounded text-black text-sm" />
                    </div>
                    <div className="mb-4">
                      <input type="text" placeholder="Subtitle (e.g. Toyota Etios)" value={v.subtitle} onChange={e => { const n = [...pkgData.vehicles]; n[i].subtitle = e.target.value; setPkgData({...pkgData, vehicles: n}); }} className="w-full border p-2 rounded text-black text-sm mb-2" />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Features</label>
                      {(v.features || []).map((feat: string, fIdx: number) => (
                        <div key={`feat-${fIdx}`} className="flex gap-2 mb-2">
                          <input type="text" value={feat} onChange={e => { const n = [...pkgData.vehicles]; n[i].features[fIdx] = e.target.value; setPkgData({...pkgData, vehicles: n}); }} className="block w-full rounded border-gray-300 border p-2 text-black text-sm" />
                          <button type="button" onClick={() => { const n = [...pkgData.vehicles]; n[i].features = n[i].features.filter((_: any, idxx: number) => idxx !== fIdx); setPkgData({...pkgData, vehicles: n}); }} className="px-3 py-2 text-red-600 bg-red-50 rounded hover:bg-red-100"><Trash2 className="w-4 h-4"/></button>
                        </div>
                      ))}
                      <button type="button" onClick={() => { const n = [...pkgData.vehicles]; if(!n[i].features) n[i].features = []; n[i].features.push(''); setPkgData({...pkgData, vehicles: n}); }} className="text-xs text-blue-600 font-medium">+ Add Feature</button>
                    </div>

                    <div className="flex items-center mt-4">
                      <input type="checkbox" checked={v.recommended} onChange={e => { const n = [...pkgData.vehicles]; n[i].recommended = e.target.checked; setPkgData({...pkgData, vehicles: n}); }} className="h-4 w-4 text-orange-600 rounded" />
                      <label className="ml-2 block text-sm font-medium text-gray-900">Recommended (Highlight Box)</label>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="pt-6 border-t border-gray-200 flex justify-end gap-4">
              <button type="button" onClick={() => setView('table')} className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded shadow-sm hover:bg-gray-50">Cancel</button>
              <button type="submit" disabled={isSubmittingPkg} className="flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded shadow-sm hover:bg-orange-700 disabled:opacity-50">
                <Save className="w-5 h-5 mr-2" /> {isSubmittingPkg ? 'Saving...' : 'Save Complete Package'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
