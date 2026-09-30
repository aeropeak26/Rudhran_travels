'use client';

import React, { useState, useEffect } from 'react';
import { Save, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function VehicleDetailsAdminPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/vehicles-content')
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/vehicles-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) toast.success('Saved successfully!');
      else toast.error('Failed to save');
    } catch (err) {
      console.error(err);
      toast.error('Error saving data');
    }
    setSaving(false);
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

  if (loading) return <div className="p-6 text-slate-500 font-bold">Loading Details Editor...</div>;
  if (!data || !data.vehicles) return <div className="p-6 text-red-500">Failed to load data</div>;

  const vIdx = data.vehicles.findIndex((v: any) => v.id === id);
  if (vIdx === -1) return <div className="p-6 text-red-500">Vehicle not found</div>;
  
  const vehicle = data.vehicles[vIdx];

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50">
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center justify-between px-8 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/admin/vehicles')} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-800">Edit Details: {vehicle.name}</h1>
            <p className="text-xs text-slate-500">Manage deep content for /vehicles/{id}</p>
          </div>
        </div>
        <button 
          onClick={handleSave} 
          disabled={saving}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {saving ? 'Saving...' : 'Save All Changes'}
        </button>
      </header>

      {/* Editor Content */}
      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Top Badges & Intro */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">Hero Section & Badges</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Top Badge 1 (e.g. Ghat Road Certified)</label>
                <input type="text" value={vehicle.topBadges?.[0] || ''} onChange={e => { const v = [...data.vehicles]; if(!v[vIdx].topBadges) v[vIdx].topBadges=['','']; v[vIdx].topBadges[0] = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Top Badge 2 (e.g. GPS Monitored)</label>
                <input type="text" value={vehicle.topBadges?.[1] || ''} onChange={e => { const v = [...data.vehicles]; if(!v[vIdx].topBadges) v[vIdx].topBadges=['','']; v[vIdx].topBadges[1] = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" />
              </div>
              <div className="lg:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-2">Long Description (Below Title)</label>
                <textarea rows={4} value={vehicle.longDesc || ''} onChange={e => { const v = [...data.vehicles]; v[vIdx].longDesc = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-3 rounded text-black text-sm" />
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">Vehicle Gallery & Thumbnails</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[0, 1, 2, 3].map((gIdx) => (
                <div key={gIdx} className="bg-slate-50 p-4 rounded-xl border">
                  <label className="block text-xs font-bold text-slate-500 mb-3">Image {gIdx + 1}</label>
                  {vehicle.gallery?.[gIdx] ? (
                    <img src={vehicle.gallery[gIdx]} className="h-32 w-full object-cover rounded-lg mb-3 shadow-sm border border-slate-200" />
                  ) : (
                    <div className="h-32 w-full bg-slate-200 rounded-lg mb-3 flex items-center justify-center text-slate-400">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                  )}
                  <input type="file" accept="image/*" onChange={(e) => handleGalleryUpload(e, vIdx, gIdx)} className="w-full text-xs text-slate-600 mb-3" />
                  <label className="block text-[10px] font-bold text-slate-500 mb-1">Thumbnail Label</label>
                  <input type="text" value={vehicle.galleryLabels?.[gIdx] || ''} onChange={e => { const v = [...data.vehicles]; if(!v[vIdx].galleryLabels) v[vIdx].galleryLabels=['','','','']; v[vIdx].galleryLabels[gIdx] = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-1.5 rounded text-black text-xs" placeholder="e.g. Exterior" />
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Best Suited */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">Highlights & Tags</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Highlights (3 Bullets below Gallery)</label>
                <div className="space-y-3">
                  {[0, 1, 2].map((hIdx) => (
                    <input key={hIdx} type="text" value={vehicle.highlights?.[hIdx] || ''} onChange={e => { const v = [...data.vehicles]; if (!v[vIdx].highlights) v[vIdx].highlights = ['', '', '']; v[vIdx].highlights[hIdx] = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2.5 rounded text-black text-sm" placeholder={`Highlight ${hIdx + 1}`} />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Best Suited For (Comma Separated)</label>
                <textarea rows={4} value={vehicle.bestSuitedFor?.join(', ') || ''} onChange={e => { const v = [...data.vehicles]; v[vIdx].bestSuitedFor = e.target.value.split(',').map(s => s.trim()); setData({...data, vehicles: v}); }} className="w-full border p-3 rounded text-black text-sm" placeholder="City Transfers, Solo Business Trips, Hill Station Escapes..." />
                <p className="text-xs text-slate-500 mt-2">These appear as the tags below the Overview section.</p>
              </div>
            </div>
          </div>

          {/* Vehicle Overview Blocks */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">Vehicle Overview & Touring Experience (3 Blocks)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((oIdx) => {
                const block = vehicle.overview?.[oIdx] || { title: '', desc: '', tag: '' };
                return (
                  <div key={oIdx} className="bg-slate-50 p-5 rounded-xl border space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Block {oIdx + 1} Title</label>
                      <input type="text" value={block.title} onChange={e => { const v = [...data.vehicles]; if (!v[vIdx].overview) v[vIdx].overview = [{title:'',desc:'',tag:''}, {title:'',desc:'',tag:''}, {title:'',desc:'',tag:''}]; v[vIdx].overview[oIdx].title = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm font-bold" placeholder="e.g. Effortless Ghat Performance" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Description</label>
                      <textarea rows={4} value={block.desc} onChange={e => { const v = [...data.vehicles]; if (!v[vIdx].overview) v[vIdx].overview = [{title:'',desc:'',tag:''}, {title:'',desc:'',tag:''}, {title:'',desc:'',tag:''}]; v[vIdx].overview[oIdx].desc = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-black text-sm" placeholder="Detailed description..." />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Bottom Tag</label>
                      <input type="text" value={block.tag} onChange={e => { const v = [...data.vehicles]; if (!v[vIdx].overview) v[vIdx].overview = [{title:'',desc:'',tag:''}, {title:'',desc:'',tag:''}, {title:'',desc:'',tag:''}]; v[vIdx].overview[oIdx].tag = e.target.value; setData({...data, vehicles: v}); }} className="w-full border p-2 rounded text-blue-600 font-medium text-xs bg-white" placeholder="e.g. Tested on Munnar, Kodaikanal" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
