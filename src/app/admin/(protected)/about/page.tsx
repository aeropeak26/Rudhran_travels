'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Save, Plus, Trash2 } from 'lucide-react';

export default function AdminAboutPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'hero' | 'general' | 'whoWeAre' | 'ourPurpose' | 'tailoredMobility' | 'whyChooseUs'>('hero');
  
  const [data, setData] = useState<any>({
    hero: { title: '', description: '', heroImage: '', points: ['', '', '', ''] },
    whoWeAre: {
      badge: '', title: '', description1: '', description2: '', image: '',
      floatingCard: { badge: '', description: '' },
      points: ['', '', ''],
      stats: [
        { icon: '', number: '', title: '', desc: '' },
        { icon: '', number: '', title: '', desc: '' },
        { icon: '', number: '', title: '', desc: '' },
        { icon: '', number: '', title: '', desc: '' }
      ]
    },
    ourPurpose: {
      badge: '', title: '', description: '', missionQuote: '',
      cards: [
        { title: '', badge: '', desc: '', footerLeft: '', footerRight: '' },
        { title: '', badge: '', desc: '', footerLeft: '', footerRight: '' },
        { title: '', badge: '', desc: '', footerLeft: '', footerRight: '' }
      ]
    },
    tailoredMobility: {
      badge: '', title: '', description: '',
      card1: { title: '', desc: '' },
      card2: { title: '', desc: '' },
      card3VIP: { title: '', desc: '', featureTitle: '', featureDesc: '' },
      card4VIP: { title: '', desc: '', featureTitle: '', featureDesc: '' },
      card5: { title: '', desc: '' },
      card6: { title: '', desc: '' },
      card7: { title: '', desc: '' },
      bottomCard: { title: '', desc: '' }
    },
    whyChooseUs: {
      badge: '', title: '', description: '',
      features: [
        { title: '', badge: '', desc: '' },
        { title: '', badge: '', desc: '' },
        { title: '', badge: '', desc: '' },
        { title: '', badge: '', desc: '' },
        { title: '', badge: '', desc: '' },
        { title: '', badge: '', desc: '' }
      ]
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/about-content');
      const json = await res.json();
      if (json && Object.keys(json).length > 0) {
        setData({
          hero: json.hero || data.hero,
          whoWeAre: json.whoWeAre || data.whoWeAre,
          ourPurpose: json.ourPurpose || data.ourPurpose,
          tailoredMobility: json.tailoredMobility || data.tailoredMobility,
          whyChooseUs: json.whyChooseUs || data.whyChooseUs
       ,
          backgroundImage: json?.backgroundImage || '' });
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
      const res = await fetch('/api/about-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        toast.success('About page content saved successfully!');
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
        } else if (section === 'whoWeAre') {
          setData({ ...data, whoWeAre: { ...data.whoWeAre, image: result.url } });
        }
        toast.success('Image uploaded!');
      } else {
        toast.error('Upload failed: ' + result.error);
      }
    } catch (err) {
      console.error(err);
      toast.error('Error uploading image');
    }
  };

  if (loading) return <div className="p-6 text-slate-500">Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">About Us Page CMS</h1>
          <p className="mt-2 text-sm text-slate-600">Update all sections of the About Us page.</p>
        </div>
        <button onClick={() => handleSave()} disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-lg font-medium transition-colors shadow-sm disabled:opacity-50">
          <Save className="w-5 h-5" />
          {saving ? 'Saving...' : 'Save All Changes'}
        </button>
      </div>

      <div className="flex space-x-8 border-b border-gray-200 mb-6 overflow-x-auto">
        {[
          { id: 'hero', label: 'Hero' },
          { id: 'general', label: 'General' },
          { id: 'whoWeAre', label: 'Who We Are' },
          { id: 'ourPurpose', label: 'Our Purpose' },
          { id: 'tailoredMobility', label: 'Tailored Mobility' },
          { id: 'whyChooseUs', label: 'Why Choose Us' }
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
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Hero Background Image</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'hero')} className="w-full border p-1.5 rounded text-black text-sm bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                {data.hero.heroImage && (
                  <div className="mt-2 flex flex-col items-start gap-2">
                    <img src={data.hero.heroImage} alt="" className="h-32 object-cover rounded-md border" />
                    <button type="button" onClick={() => setData({...data, hero: {...data.hero, heroImage: ''}})} className="text-xs text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full font-semibold">Remove Image</button>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Title</label>
                <input type="text" value={data.hero.title} onChange={e => setData({...data, hero: {...data.hero, title: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Description</label>
                <textarea rows={2} value={data.hero.description} onChange={e => setData({...data, hero: {...data.hero, description: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-2">4 Bullet Points</label>
                <div className="grid grid-cols-2 gap-4">
                  {data.hero.points.map((point: any, idx: number) => (
                    <input key={idx} type="text" value={point} onChange={e => { const newP = [...data.hero.points]; newP[idx] = e.target.value; setData({...data, hero: {...data.hero, points: newP}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder={`Point ${idx + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GENERAL TAB */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Stats Section</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.whoWeAre.stats.map((stat: any, idx: number) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-2">
                  <select value={stat.icon} onChange={e => { const newStats = [...data.whoWeAre.stats]; newStats[idx].icon = e.target.value; setData({...data, whoWeAre: {...data.whoWeAre, stats: newStats}}); }} className="w-full border p-2 rounded text-black text-sm">
                    <option value="Calendar">Calendar</option>
                    <option value="Smile">Smile</option>
                    <option value="Map">Map</option>
                    <option value="ArrowDown">Arrow Down</option>
                    <option value="Star">Star</option>
                  </select>
                  <input type="text" value={stat.number} onChange={e => { const newStats = [...data.whoWeAre.stats]; newStats[idx].number = e.target.value; setData({...data, whoWeAre: {...data.whoWeAre, stats: newStats}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="10+" />
                  <input type="text" value={stat.title} onChange={e => { const newStats = [...data.whoWeAre.stats]; newStats[idx].title = e.target.value; setData({...data, whoWeAre: {...data.whoWeAre, stats: newStats}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Years Experience" />
                  <textarea rows={2} value={stat.desc} onChange={e => { const newStats = [...data.whoWeAre.stats]; newStats[idx].desc = e.target.value; setData({...data, whoWeAre: {...data.whoWeAre, stats: newStats}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Description" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHO WE ARE TAB */}
        {activeTab === 'whoWeAre' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Who We Are Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Badge</label>
                  <input type="text" value={data.whoWeAre.badge} onChange={e => setData({...data, whoWeAre: {...data.whoWeAre, badge: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Title</label>
                  <input type="text" value={data.whoWeAre.title} onChange={e => setData({...data, whoWeAre: {...data.whoWeAre, title: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Description Paragraph 1</label>
                  <textarea rows={3} value={data.whoWeAre.description1} onChange={e => setData({...data, whoWeAre: {...data.whoWeAre, description1: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Description Paragraph 2</label>
                  <textarea rows={3} value={data.whoWeAre.description2} onChange={e => setData({...data, whoWeAre: {...data.whoWeAre, description2: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-2">3 Checkmark Points</label>
                  <div className="space-y-2">
                    {data.whoWeAre.points.map((point: any, idx: number) => (
                      <input key={idx} type="text" value={point} onChange={e => { const newP = [...data.whoWeAre.points]; newP[idx] = e.target.value; setData({...data, whoWeAre: {...data.whoWeAre, points: newP}}); }} className="w-full border p-2 rounded text-black text-sm" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Side Image Upload</label>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'whoWeAre')} className="w-full border p-1.5 rounded text-black text-sm bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                  {data.whoWeAre.image && <img src={data.whoWeAre.image} alt="" className="mt-2 h-40 object-cover rounded-md" />}
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-sm font-bold mb-2">Floating Card on Image</h3>
                  <div className="space-y-2">
                    <input type="text" value={data.whoWeAre.floatingCard.badge} onChange={e => setData({...data, whoWeAre: {...data.whoWeAre, floatingCard: {...data.whoWeAre.floatingCard, badge: e.target.value}}})} className="w-full border p-2 rounded text-black text-sm" placeholder="CERTIFIED AGENCY" />
                    <input type="text" value={data.whoWeAre.floatingCard.description} onChange={e => setData({...data, whoWeAre: {...data.whoWeAre, floatingCard: {...data.whoWeAre.floatingCard, description: e.target.value}}})} className="w-full border p-2 rounded text-black text-sm" placeholder="Government Registered..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* OUR PURPOSE TAB */}
        {activeTab === 'ourPurpose' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Our Purpose Header & Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Badge</label>
                <input type="text" value={data.ourPurpose.badge} onChange={e => setData({...data, ourPurpose: {...data.ourPurpose, badge: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Title</label>
                <input type="text" value={data.ourPurpose.title} onChange={e => setData({...data, ourPurpose: {...data.ourPurpose, title: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Description</label>
                <textarea rows={2} value={data.ourPurpose.description} onChange={e => setData({...data, ourPurpose: {...data.ourPurpose, description: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Mission Quote</label>
                <textarea rows={3} value={data.ourPurpose.missionQuote} onChange={e => setData({...data, ourPurpose: {...data.ourPurpose, missionQuote: e.target.value}})} className="w-full border p-2 rounded text-black text-sm italic font-serif" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mt-8 mb-4">Feature Cards (3)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.ourPurpose.cards.map((card: any, idx: number) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-3">
                  <h3 className="font-bold text-sm">Card {idx + 1}</h3>
                  <input type="text" value={card.title} onChange={e => { const newC = [...data.ourPurpose.cards]; newC[idx].title = e.target.value; setData({...data, ourPurpose: {...data.ourPurpose, cards: newC}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Title" />
                  <input type="text" value={card.badge} onChange={e => { const newC = [...data.ourPurpose.cards]; newC[idx].badge = e.target.value; setData({...data, ourPurpose: {...data.ourPurpose, cards: newC}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Badge" />
                  <textarea rows={3} value={card.desc} onChange={e => { const newC = [...data.ourPurpose.cards]; newC[idx].desc = e.target.value; setData({...data, ourPurpose: {...data.ourPurpose, cards: newC}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Description" />
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" value={card.footerLeft} onChange={e => { const newC = [...data.ourPurpose.cards]; newC[idx].footerLeft = e.target.value; setData({...data, ourPurpose: {...data.ourPurpose, cards: newC}}); }} className="w-full border p-2 rounded text-black text-xs" placeholder="Footer Left" />
                    <input type="text" value={card.footerRight} onChange={e => { const newC = [...data.ourPurpose.cards]; newC[idx].footerRight = e.target.value; setData({...data, ourPurpose: {...data.ourPurpose, cards: newC}}); }} className="w-full border p-2 rounded text-black text-xs" placeholder="Footer Right" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAILORED MOBILITY TAB */}
        {activeTab === 'tailoredMobility' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Tailored Mobility Header</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Badge</label>
                <input type="text" value={data.tailoredMobility.badge} onChange={e => setData({...data, tailoredMobility: {...data.tailoredMobility, badge: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Title</label>
                <input type="text" value={data.tailoredMobility.title} onChange={e => setData({...data, tailoredMobility: {...data.tailoredMobility, title: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Description</label>
                <textarea rows={2} value={data.tailoredMobility.description} onChange={e => setData({...data, tailoredMobility: {...data.tailoredMobility, description: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mt-8 mb-4">Bento Grid Cards (7) & Bottom Banner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['card1', 'card2', 'card5', 'card6', 'card7', 'bottomCard'].map((cardKey) => (
                <div key={cardKey} className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-2">
                  <h3 className="font-bold text-sm uppercase">{cardKey.replace('card', 'Card ')}</h3>
                  <input type="text" value={(data.tailoredMobility as any)[cardKey].title} onChange={e => setData({...data, tailoredMobility: {...data.tailoredMobility, [cardKey]: { ...(data.tailoredMobility as any)[cardKey], title: e.target.value }}})} className="w-full border p-2 rounded text-black text-sm" placeholder="Title" />
                  <textarea rows={2} value={(data.tailoredMobility as any)[cardKey].desc} onChange={e => setData({...data, tailoredMobility: {...data.tailoredMobility, [cardKey]: { ...(data.tailoredMobility as any)[cardKey], desc: e.target.value }}})} className="w-full border p-2 rounded text-black text-sm" placeholder="Description" />
                </div>
              ))}
              {['card3VIP', 'card4VIP'].map((cardKey) => (
                <div key={cardKey} className="bg-[#0b1120] text-white p-4 rounded-lg border border-slate-700 space-y-2 md:col-span-2">
                  <h3 className="font-bold text-sm uppercase text-cyan-400">{cardKey} (Dark Theme)</h3>
                  <input type="text" value={(data.tailoredMobility as any)[cardKey].title} onChange={e => setData({...data, tailoredMobility: {...data.tailoredMobility, [cardKey]: { ...(data.tailoredMobility as any)[cardKey], title: e.target.value }}})} className="w-full border p-2 rounded bg-white/10 text-white border-white/20 text-sm" placeholder="Title" />
                  <textarea rows={2} value={(data.tailoredMobility as any)[cardKey].desc} onChange={e => setData({...data, tailoredMobility: {...data.tailoredMobility, [cardKey]: { ...(data.tailoredMobility as any)[cardKey], desc: e.target.value }}})} className="w-full border p-2 rounded bg-white/10 text-white border-white/20 text-sm" placeholder="Description" />
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <input type="text" value={(data.tailoredMobility as any)[cardKey].featureTitle} onChange={e => setData({...data, tailoredMobility: {...data.tailoredMobility, [cardKey]: { ...(data.tailoredMobility as any)[cardKey], featureTitle: e.target.value }}})} className="w-full border p-2 rounded bg-white/10 text-cyan-400 font-bold border-white/20 text-sm" placeholder="Feature Title (e.g., Auto-Buffer +60m)" />
                    <input type="text" value={(data.tailoredMobility as any)[cardKey].featureDesc} onChange={e => setData({...data, tailoredMobility: {...data.tailoredMobility, [cardKey]: { ...(data.tailoredMobility as any)[cardKey], featureDesc: e.target.value }}})} className="w-full border p-2 rounded bg-white/10 text-white border-white/20 text-sm" placeholder="Feature Desc" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHY CHOOSE US TAB */}
        {activeTab === 'whyChooseUs' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Why Customers Choose Us Header</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Badge</label>
                <input type="text" value={data.whyChooseUs.badge} onChange={e => setData({...data, whyChooseUs: {...data.whyChooseUs, badge: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Title</label>
                <input type="text" value={data.whyChooseUs.title} onChange={e => setData({...data, whyChooseUs: {...data.whyChooseUs, title: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Description</label>
                <textarea rows={2} value={data.whyChooseUs.description} onChange={e => setData({...data, whyChooseUs: {...data.whyChooseUs, description: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mt-8 mb-4">Features (6 Cards)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.whyChooseUs.features.map((feature: any, idx: number) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-2">
                  <h3 className="font-bold text-sm">Feature {idx + 1}</h3>
                  <input type="text" value={feature.title} onChange={e => { const newF = [...data.whyChooseUs.features]; newF[idx].title = e.target.value; setData({...data, whyChooseUs: {...data.whyChooseUs, features: newF}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Title" />
                  <input type="text" value={feature.badge} onChange={e => { const newF = [...data.whyChooseUs.features]; newF[idx].badge = e.target.value; setData({...data, whyChooseUs: {...data.whyChooseUs, features: newF}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Badge (Uppercase)" />
                  <textarea rows={3} value={feature.desc} onChange={e => { const newF = [...data.whyChooseUs.features]; newF[idx].desc = e.target.value; setData({...data, whyChooseUs: {...data.whyChooseUs, features: newF}}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Description" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
