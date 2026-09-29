'use client';

import React, { useState, useEffect } from 'react';
import { Save, Loader2, Image as ImageIcon } from 'lucide-react';

export default function HomeVehiclesCMS() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [uploadingImageIndex, setUploadingImageIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/home-content');
      const data = await res.json();
      if (data && data.featureVehicles) {
        setVehicles(data.featureVehicles);
      }
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Failed to load data', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (index: number, field: string, value: any) => {
    const newVehicles = [...vehicles];
    newVehicles[index] = { ...newVehicles[index], [field]: value };
    setVehicles(newVehicles);
  };

  const handleImageUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImageIndex(index);
    const formDataObj = new FormData();
    formDataObj.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formDataObj,
      });
      const data = await res.json();
      if (res.ok) {
        handleChange(index, 'image', data.url);
      } else {
        alert('Upload failed: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploadingImageIndex(null);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage({ text: '', type: '' });
    
    try {
      const currentRes = await fetch('/api/home-content');
      const currentData = await currentRes.json();

      const newContent = {
        ...currentData,
        featureVehicles: vehicles
      };

      const res = await fetch('/api/home-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContent),
      });

      if (res.ok) {
        setMessage({ text: 'Vehicles saved successfully!', type: 'success' });
        setTimeout(() => setMessage({ text: '', type: '' }), 3000);
      } else {
        throw new Error('Failed to save');
      }
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Failed to save changes.', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-full"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Home Page - Featured Vehicles</h1>
          <p className="text-sm text-slate-500 mt-1">Manage the 6 featured vehicles in the fleet showcase.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {message.text && (
        <div className={`p-4 rounded-lg mb-6 text-sm font-medium ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vehicles.map((veh, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <span className="bg-slate-100 text-slate-600 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  {index + 1}
                </span>
                Vehicle {index + 1}
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  value={veh.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Image</label>
                {veh.image && (
                  <div className="relative w-full h-32 rounded-lg overflow-hidden border border-slate-200 mb-3 bg-slate-100 flex items-center justify-center p-2">
                    <img src={veh.image} alt={veh.name} className="object-contain w-full h-full" />
                  </div>
                )}
                <label className="cursor-pointer flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-slate-200 w-full">
                  {uploadingImageIndex === index ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
                  {uploadingImageIndex === index ? 'Uploading...' : 'Upload Image'}
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(index, e)} disabled={uploadingImageIndex === index} />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
