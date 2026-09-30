'use client';

import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

export default function AdminVehiclesPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'hero' | 'vehicles' | 'standards'>('hero');
  
  const [data, setData] = useState({
    hero: {
      badge: '', title: '', description: '',
      cards: [
        { icon: '', title: '', subtitle: '' },
        { icon: '', title: '', subtitle: '' },
        { icon: '', title: '', subtitle: '' },
        { icon: '', title: '', subtitle: '' }
      ]
    },
    vehicles: [] as any[],
    standards: {
      badge: '', title: '', description: '',
      cards: [
        { icon: '', title: '', description: '', tagIcon: '', tagText: '' },
        { icon: '', title: '', description: '', tagIcon: '', tagText: '' },
        { icon: '', title: '', description: '', tagIcon: '', tagText: '' },
        { icon: '', title: '', description: '', tagIcon: '', tagText: '' }
      ]
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/vehicles-content');
      const json = await res.json();
      if (json && Object.keys(json).length > 0) {
        setData({
          hero: json.hero || data.hero,
          vehicles: json.vehicles || [],
          standards: json.standards || data.standards
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
      const res = await fetch('/api/vehicles-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        toast.success('Vehicles page content saved successfully!');
      } else {
        toast.error('Failed to save content.');
      }
    } catch (e) {
      console.error(e);
      toast.error('Error saving content.');
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
        const newVehicles = [...data.vehicles];
        newVehicles[idx] = { ...newVehicles[idx], img: result.url };
        setData({ ...data, vehicles: newVehicles });
      } else {
        toast.error('Upload failed: ' + result.error);
      }
    } catch (err) {
      console.error(err);
      toast.error('Error uploading image');
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>, vIdx: number, gIdx: number) => {
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
        const newVehicles = [...data.vehicles];
        if (!newVehicles[vIdx].gallery) newVehicles[vIdx].gallery = ['', '', '', ''];
        newVehicles[vIdx].gallery[gIdx] = result.url;
        setData({ ...data, vehicles: newVehicles });
      } else {
        toast.error('Upload failed: ' + result.error);
      }
    } catch (err) {
      console.error(err);
      toast.error('Error uploading image');
    }
  };

  const iconOptions = ['Droplets', 'Shield', 'Zap', 'Phone', 'CheckCircle2', 'MapPin', 'User', 'Thermometer', 'Briefcase', 'Navigation', 'PlaySquare', 'Check'];

  if (loading) return <div className="p-6 text-slate-500">Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Our Fleet / Vehicles CMS</h1>
          <p className="mt-2 text-sm text-slate-600">Update content for the Vehicles page.</p>
        </div>
        <button onClick={() => handleSave()} disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm disabled:opacity-50">
          <Save className="w-5 h-5" />
          {saving ? 'Saving...' : 'Save All Changes'}
        </button>
      </div>

      <div className="flex space-x-8 border-b border-gray-200 mb-6 overflow-x-auto">
        {[
          { id: 'hero', label: 'Hero Section' },
          { id: 'vehicles', label: 'Vehicles Grid (6 Cards)' },
          { id: 'standards', label: 'Quality Standards' }
        ].map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)} 
            className={`pb-4 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        
        {/* HERO TAB */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Hero Text</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Badge</label>
                <input type="text" value={data.hero.badge} onChange={e => setData({...data, hero: {...data.hero, badge: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Title</label>
                <input type="text" value={data.hero.title} onChange={e => setData({...data, hero: {...data.hero, title: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Description</label>
                <textarea rows={2} value={data.hero.description} onChange={e => setData({...data, hero: {...data.hero, description: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mt-8 mb-4">4 Info Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.hero.cards.map((card, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-3">
                  <h3 className="font-bold text-sm">Card {idx + 1}</h3>
                  <select value={card.icon} onChange={e => { const newC = [...data.hero.cards]; newC[idx].icon = e.target.value; setData({...data, hero: {...data.hero, cards: newC}}); }} className="w-full border p-2 rounded text-black text-sm">
                    {iconOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <input type="text" value={card.title} onChange={e => { const newC = [...data.hero.cards]; newC[idx].title = e.target.value; setData({...data, hero: {...data.hero, cards: newC}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Title" />
                  <input type="text" value={card.subtitle} onChange={e => { const newC = [...data.hero.cards]; newC[idx].subtitle = e.target.value; setData({...data, hero: {...data.hero, cards: newC}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Subtitle" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VEHICLES TAB */}
        {activeTab === 'vehicles' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Vehicles Grid (6 Cards)</h2>
            <div className="space-y-6">
              {data.vehicles.map((vehicle, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-lg text-slate-800 mb-4">Vehicle {idx + 1}: {vehicle.name || 'Untitled'}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Image Upload */}
                    <div className="lg:col-span-3 mb-2 flex gap-4 items-center">
                      <div className="flex-1">
                        <label className="block text-xs text-slate-500 mb-1">Vehicle Image</label>
                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, idx)} className="w-full border p-1.5 rounded text-black text-sm bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                      </div>
                      {vehicle.img && <img src={vehicle.img} alt="" className="h-16 w-32 object-cover rounded-md border" />}
                    </div>
                    
                    {/* Basic Info */}
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Vehicle Name</label>
                      <input type="text" value={vehicle.name || ''} onChange={e => { const v = [...data.vehicles]; v[idx].name = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Subtitle</label>
                      <input type="text" value={vehicle.subtitle || ''} onChange={e => { const v = [...data.vehicles]; v[idx].subtitle = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                    </div>
                    <div className="lg:col-span-1">
                      <label className="block text-xs text-slate-500 mb-1">Grid Description (2 lines)</label>
                      <input type="text" value={vehicle.desc || ''} onChange={e => { const v = [...data.vehicles]; v[idx].desc = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                    </div>

                    {/* Meta Info */}
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Category (For Filter)</label>
                      <select value={vehicle.category} onChange={e => { const v = [...data.vehicles]; v[idx].category = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm">
                        <option value="Sedan">Sedan</option>
                        <option value="SUV / MUV">SUV / MUV</option>
                        <option value="Luxury Coach">Luxury Coach</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Seats (For Filter)</label>
                      <select value={vehicle.seats} onChange={e => { const v = [...data.vehicles]; v[idx].seats = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm">
                        <option value="4 Seats">4 Seats</option>
                        <option value="6 - 7 Seats">6 - 7 Seats</option>
                        <option value="12+ Seats">12+ Seats</option>
                      </select>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-xs text-slate-500 mb-1">AC</label>
                        <select value={vehicle.ac ? 'true' : 'false'} onChange={e => { const v = [...data.vehicles]; v[idx].ac = e.target.value === 'true'; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm">
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs text-slate-500 mb-1">Rating</label>
                        <input type="text" value={vehicle.rating || ''} onChange={e => { const v = [...data.vehicles]; v[idx].rating = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs text-slate-500 mb-1">Reviews Count</label>
                        <input type="text" value={vehicle.reviewsCount || ''} onChange={e => { const v = [...data.vehicles]; v[idx].reviewsCount = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                      </div>
                    </div>

                    {/* Pricing */}
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Outstation Rate / km (₹)</label>
                      <input type="text" value={vehicle.price || ''} onChange={e => { const v = [...data.vehicles]; v[idx].price = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm font-bold text-blue-600" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Local Package (₹)</label>
                      <input type="text" value={vehicle.localPackage || ''} onChange={e => { const v = [...data.vehicles]; v[idx].localPackage = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Local Hours (e.g. 8 hrs / 80 KM)</label>
                      <input type="text" value={vehicle.localHours || ''} onChange={e => { const v = [...data.vehicles]; v[idx].localHours = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Minimum Run (km/day)</label>
                      <input type="text" value={vehicle.minRun || ''} onChange={e => { const v = [...data.vehicles]; v[idx].minRun = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Driver Allowance / day</label>
                      <input type="text" value={vehicle.driverAllowance || ''} onChange={e => { const v = [...data.vehicles]; v[idx].driverAllowance = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Night Batta</label>
                      <input type="text" value={vehicle.nightBatta || ''} onChange={e => { const v = [...data.vehicles]; v[idx].nightBatta = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                    </div>

                    {/* Tags */}
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Tag Color</label>
                      <select value={vehicle.tagColor} onChange={e => { const v = [...data.vehicles]; v[idx].tagColor = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm">
                        <option value="amber">Amber</option>
                        <option value="emerald">Emerald</option>
                        <option value="cyan">Cyan</option>
                        <option value="slate">Slate</option>
                        <option value="blue">Blue</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Top Left Badge Text</label>
                      <input type="text" value={vehicle.tagText} onChange={e => { const v = [...data.vehicles]; v[idx].tagText = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Top Right Badge Text</label>
                      <input type="text" value={vehicle.tagBadge} onChange={e => { const v = [...data.vehicles]; v[idx].tagBadge = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
                    </div>
                    
                    {/* Quick Tags Array */}
                    <div className="lg:col-span-3">
                      <label className="block text-xs text-slate-500 mb-1">Quick Select Filters (Comma Separated)</label>
                      <input type="text" value={vehicle.quickTags.join(', ')} onChange={e => { const v = [...data.vehicles]; v[idx].quickTags = e.target.value.split(',').map(s => s.trim()); setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="All Vehicles, Hill Station Ready, Corporate Executive" />
                    </div>

                    {/* Features (4 Items) */}
                    <div className="lg:col-span-3 border-t pt-4 mt-2">
                      <label className="block text-xs font-bold text-slate-700 mb-2">4 Vehicle Features</label>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {(vehicle.features || []).map((feat: any, fIdx: number) => (
                          <div key={fIdx} className="bg-white border rounded p-2 flex flex-col gap-2">
                            <select value={feat.icon || ''} onChange={e => { const v = [...data.vehicles]; v[idx].features[fIdx].icon = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-1 rounded text-black text-xs">
                              {iconOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                            <input type="text" value={feat.text || ''} onChange={e => { const v = [...data.vehicles]; v[idx].features[fIdx].text = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-1 rounded text-black text-xs" placeholder="Feature Title" />
                            <input type="text" value={feat.subtext || ''} onChange={e => { const v = [...data.vehicles]; v[idx].features[fIdx].subtext = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-1 rounded text-black text-xs" placeholder="Subtext (e.g. Captain Chairs)" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href={`/admin/vehicles/${vehicle.id}`} className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-colors block text-center mt-4">
                      Edit Full Details Page
                    </Link>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STANDARDS TAB */}
        {activeTab === 'standards' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Quality Standards Header</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Badge</label>
                <input type="text" value={data.standards.badge} onChange={e => setData({...data, standards: {...data.standards, badge: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Title</label>
                <input type="text" value={data.standards.title} onChange={e => setData({...data, standards: {...data.standards, title: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Description</label>
                <textarea rows={2} value={data.standards.description} onChange={e => setData({...data, standards: {...data.standards, description: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mt-8 mb-4">4 Standard Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.standards.cards.map((card, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-3">
                  <h3 className="font-bold text-sm">Card {idx + 1}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Main Icon</label>
                      <select value={card.icon} onChange={e => { const newCards = [...data.standards.cards]; newCards[idx].icon = e.target.value; setData({...data, standards: {...data.standards, cards: newCards}}); }} className="w-full border p-2 rounded text-black text-sm">
                        {iconOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Bottom Tag Icon</label>
                      <select value={card.tagIcon} onChange={e => { const newCards = [...data.standards.cards]; newCards[idx].tagIcon = e.target.value; setData({...data, standards: {...data.standards, cards: newCards}}); }} className="w-full border p-2 rounded text-black text-sm">
                        {iconOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>
                  
                  <input type="text" value={card.title} onChange={e => { const newCards = [...data.standards.cards]; newCards[idx].title = e.target.value; setData({...data, standards: {...data.standards, cards: newCards}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Title" />
                  <textarea rows={3} value={card.description} onChange={e => { const newCards = [...data.standards.cards]; newCards[idx].description = e.target.value; setData({...data, standards: {...data.standards, cards: newCards}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Description" />
                  <input type="text" value={card.tagText} onChange={e => { const newCards = [...data.standards.cards]; newCards[idx].tagText = e.target.value; setData({...data, standards: {...data.standards, cards: newCards}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Bottom Tag Text" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
