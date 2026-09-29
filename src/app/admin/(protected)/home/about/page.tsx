'use client';

import React, { useState, useEffect } from 'react';
import { Save, Loader2, Image as ImageIcon } from 'lucide-react';

export default function HomeAboutCMS() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  
  const [formData, setFormData] = useState({
    image: '',
    experienceYears: '',
    subheading: '',
    title: '',
    subtitle: '',
    features: ['', '', '', ''],
  });

  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/home-content');
      const data = await res.json();
      if (data && data.about) {
        // Ensure features is always an array of 4
        const f = data.about.features || [];
        const features = [f[0] || '', f[1] || '', f[2] || '', f[3] || ''];
        setFormData({ ...data.about, features });
      }
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Failed to load data', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    handleChange('features', newFeatures);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const formDataObj = new FormData();
    formDataObj.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formDataObj,
      });
      const data = await res.json();
      if (res.ok) {
        handleChange('image', data.url);
      } else {
        alert('Upload failed: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploadingImage(false);
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
        about: formData
      };

      const res = await fetch('/api/home-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContent),
      });

      if (res.ok) {
        setMessage({ text: 'About section saved successfully!', type: 'success' });
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
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Home Page - About Section</h1>
          <p className="text-sm text-slate-500 mt-1">Manage the about content on the home page.</p>
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

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Subheading</label>
            <input
              type="text"
              value={formData.subheading}
              onChange={(e) => handleChange('subheading', e.target.value)}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Years Experience Badge (e.g. 10+)</label>
            <input
              type="text"
              value={formData.experienceYears}
              onChange={(e) => handleChange('experienceYears', e.target.value)}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Main Title</label>
          <textarea
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            rows={2}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            placeholder="Use \n for new lines"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Subtitle / Paragraph</label>
          <textarea
            value={formData.subtitle}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            rows={5}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Main Image</label>
          
          {formData.image && (
            <div className="relative w-full h-48 rounded-lg overflow-hidden border border-slate-200 mb-3 bg-slate-100">
              <img src={formData.image} alt="About Image" className="object-cover w-full h-full" />
            </div>
          )}

          <div className="flex items-center gap-4">
            <label className="cursor-pointer flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium transition-colors border border-slate-200 w-full sm:w-auto">
              {uploadingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
              {uploadingImage ? 'Uploading...' : 'Upload New Image'}
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} disabled={uploadingImage} />
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Feature Points (Fixed 4 slots)</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[0, 1, 2, 3].map(i => (
              <div key={i}>
                <input
                  type="text"
                  value={formData.features[i]}
                  onChange={(e) => handleFeatureChange(i, e.target.value)}
                  placeholder={`Feature ${i + 1}`}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
