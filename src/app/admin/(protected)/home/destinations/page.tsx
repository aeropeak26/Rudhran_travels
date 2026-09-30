'use client';

import React, { useState, useEffect } from 'react';
import { Save, Loader2, Image as ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function HomeDestinationsCMS() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  
  const [destinations, setDestinations] = useState<any[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [uploadingImageIndex, setUploadingImageIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/home-content');
      const data = await res.json();
      if (data && data.popularDestinations) {
        setDestinations(data.popularDestinations);
      }
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Failed to load data', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (index: number, field: string, value: any) => {
    const newDests = [...destinations];
    newDests[index] = { ...newDests[index], [field]: value };
    setDestinations(newDests);
  };

  const handleFeatureChange = (destIndex: number, featureIndex: number, value: string) => {
    const newDests = [...destinations];
    const newFeatures = [...(newDests[destIndex].features || ['', '', '', ''])];
    newFeatures[featureIndex] = value;
    newDests[destIndex].features = newFeatures;
    setDestinations(newDests);
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
        toast.error('Upload failed: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      toast.error('Upload failed');
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
        popularDestinations: destinations
      };

      const res = await fetch('/api/home-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContent),
      });

      if (res.ok) {
        setMessage({ text: 'Destinations saved successfully!', type: 'success' });
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
          <h1 className="text-2xl font-bold text-slate-900">Home Page - Popular Destinations</h1>
          <p className="text-sm text-slate-500 mt-1">Manage the 6 fixed destination cards on the home page.</p>
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

      <div className="space-y-4">
        {destinations.map((dest, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <span className="font-semibold text-slate-800">{dest.title || 'Untitled Destination'}</span>
              </div>
              {expandedIndex === index ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>

            {expandedIndex === index && (
              <div className="p-6 border-t border-slate-200 space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">State / Region</label>
                    <input type="text" value={dest.state} onChange={(e) => handleChange(index, 'state', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Status Badge Text</label>
                    <input type="text" value={dest.status} onChange={(e) => handleChange(index, 'status', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Badge Color Class (Tailwind)</label>
                    <input type="text" value={dest.statusColor} onChange={(e) => handleChange(index, 'statusColor', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Location Text</label>
                    <input type="text" value={dest.location} onChange={(e) => handleChange(index, 'location', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                    <input type="text" value={dest.title} onChange={(e) => handleChange(index, 'title', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Price Text</label>
                    <input type="text" value={dest.price} onChange={(e) => handleChange(index, 'price', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Rating & Reviews (e.g. 4.9 and 240)</label>
                    <div className="flex gap-2">
                      <input type="number" step="0.1" value={dest.rating} onChange={(e) => handleChange(index, 'rating', parseFloat(e.target.value))} className="w-1/2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" />
                      <input type="number" value={dest.reviews} onChange={(e) => handleChange(index, 'reviews', parseInt(e.target.value))} className="w-1/2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Image</label>
                  {dest.image && (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border border-slate-200 mb-3 bg-slate-100">
                      <img src={dest.image} alt={dest.title} className="object-cover w-full h-full" />
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium transition-colors border border-slate-200 w-full sm:w-auto">
                      {uploadingImageIndex === index ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
                      {uploadingImageIndex === index ? 'Uploading...' : 'Upload Image'}
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(index, e)} disabled={uploadingImageIndex === index} />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">4 Feature Points</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[0, 1, 2, 3].map(fi => (
                      <input
                        key={fi}
                        type="text"
                        value={dest.features?.[fi] || ''}
                        onChange={(e) => handleFeatureChange(index, fi, e.target.value)}
                        placeholder={`Feature ${fi + 1}`}
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
