'use client';

import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

export default function AdminTariffPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'hero' | 'rentalRatesHeader' | 'additionalCharges'>('hero');
  
  const [data, setData] = useState({
    hero: { heroImage: '', badge: '', title: '', description: '', checkmarks: ['', '', '', ''] },
    rentalRatesHeader: { badge: '', title: '', description: '' },
    additionalCharges: {
      badge: '', title: '', description: '',
      cards: [
        { icon: '', title: '', desc: '', tag: '' },
        { icon: '', title: '', desc: '', tag: '' },
        { icon: '', title: '', desc: '', tag: '' },
        { icon: '', title: '', desc: '', tag: '' }
      ]
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/tariff-content');
      const json = await res.json();
      if (json && Object.keys(json).length > 0) {
        setData({
          hero: json.hero || data.hero,
          rentalRatesHeader: json.rentalRatesHeader || data.rentalRatesHeader,
          additionalCharges: json.additionalCharges || data.additionalCharges
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
      const res = await fetch('/api/tariff-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Tariff page content saved successfully!');
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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, section: string) => {
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
        if (section === 'hero') {
          setData({ ...data, hero: { ...data.hero, heroImage: result.url } });
        }
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
          <h1 className="text-3xl font-bold text-slate-900">Rental Tariff CMS</h1>
          <p className="mt-2 text-sm text-slate-600">Update sections of the Rental Tariff page.</p>
        </div>
        <button onClick={() => handleSave()} disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-lg font-medium transition-colors shadow-sm disabled:opacity-50">
          <Save className="w-5 h-5" />
          {saving ? 'Saving...' : 'Save All Changes'}
        </button>
      </div>

      <div className="flex space-x-8 border-b border-gray-200 mb-6 overflow-x-auto">
        {[
          { id: 'hero', label: 'Hero' },
          { id: 'rentalRatesHeader', label: 'Vehicle Rental Rates Header' },
          { id: 'additionalCharges', label: 'Additional Charges & Terms' }
        ].map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)} 
            className={`pb-4 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${activeTab === tab.id ? 'border-[#ea580c] text-[#ea580c]' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        
        {/* HERO TAB */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Hero Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Hero Background Image</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'hero')} className="w-full border p-1.5 rounded text-black text-sm bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                {data.hero.heroImage && <img src={data.hero.heroImage} alt="" className="mt-2 h-32 object-cover rounded-md" />}
              </div>
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
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-2">4 Checkmarks (Features)</label>
                <div className="grid grid-cols-2 gap-4">
                  {data.hero.checkmarks.map((point, idx) => (
                    <input key={idx} type="text" value={point} onChange={e => { const newP = [...data.hero.checkmarks]; newP[idx] = e.target.value; setData({...data, hero: {...data.hero, checkmarks: newP}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder={`Feature ${idx + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RENTAL RATES HEADER TAB */}
        {activeTab === 'rentalRatesHeader' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Vehicle Rental Rates Header</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Badge</label>
                <input type="text" value={data.rentalRatesHeader.badge} onChange={e => setData({...data, rentalRatesHeader: {...data.rentalRatesHeader, badge: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Title</label>
                <input type="text" value={data.rentalRatesHeader.title} onChange={e => setData({...data, rentalRatesHeader: {...data.rentalRatesHeader, title: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Description</label>
                <textarea rows={2} value={data.rentalRatesHeader.description} onChange={e => setData({...data, rentalRatesHeader: {...data.rentalRatesHeader, description: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
            </div>
          </div>
        )}

        {/* ADDITIONAL CHARGES TAB */}
        {activeTab === 'additionalCharges' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Additional Charges Header</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Badge</label>
                <input type="text" value={data.additionalCharges.badge} onChange={e => setData({...data, additionalCharges: {...data.additionalCharges, badge: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Title</label>
                <input type="text" value={data.additionalCharges.title} onChange={e => setData({...data, additionalCharges: {...data.additionalCharges, title: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Description</label>
                <textarea rows={2} value={data.additionalCharges.description} onChange={e => setData({...data, additionalCharges: {...data.additionalCharges, description: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mt-8 mb-4">4 Charge Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.additionalCharges.cards.map((card, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-3">
                  <h3 className="font-bold text-sm">Card {idx + 1}</h3>
                  <select value={card.icon} onChange={e => { const newCards = [...data.additionalCharges.cards]; newCards[idx].icon = e.target.value; setData({...data, additionalCharges: {...data.additionalCharges, cards: newCards}}); }} className="w-full border p-2 rounded text-black text-sm">
                    <option value="Info">Info</option>
                    <option value="ShieldCheck">ShieldCheck</option>
                    <option value="Moon">Moon</option>
                    <option value="Cloud">Cloud</option>
                    <option value="AlertCircle">AlertCircle</option>
                  </select>
                  <input type="text" value={card.title} onChange={e => { const newCards = [...data.additionalCharges.cards]; newCards[idx].title = e.target.value; setData({...data, additionalCharges: {...data.additionalCharges, cards: newCards}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Title" />
                  <textarea rows={3} value={card.desc} onChange={e => { const newCards = [...data.additionalCharges.cards]; newCards[idx].desc = e.target.value; setData({...data, additionalCharges: {...data.additionalCharges, cards: newCards}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Description" />
                  <input type="text" value={card.tag} onChange={e => { const newCards = [...data.additionalCharges.cards]; newCards[idx].tag = e.target.value; setData({...data, additionalCharges: {...data.additionalCharges, cards: newCards}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Bottom Tag" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
