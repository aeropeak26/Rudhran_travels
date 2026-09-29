'use client';

import React, { useState, useEffect } from 'react';
import { Save, Loader2 } from 'lucide-react';

export default function HomeWhyUsCMS() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    bullets: ['', '', '', ''],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/home-content');
      const data = await res.json();
      if (data && data.whyTravelWithUs) {
        const b = data.whyTravelWithUs.bullets || [];
        const bullets = [b[0] || '', b[1] || '', b[2] || '', b[3] || ''];
        setFormData({ ...data.whyTravelWithUs, bullets });
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

  const handleBulletChange = (index: number, value: string) => {
    const newBullets = [...formData.bullets];
    newBullets[index] = value;
    handleChange('bullets', newBullets);
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage({ text: '', type: '' });
    
    try {
      const currentRes = await fetch('/api/home-content');
      const currentData = await currentRes.json();

      const newContent = {
        ...currentData,
        whyTravelWithUs: formData
      };

      const res = await fetch('/api/home-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContent),
      });

      if (res.ok) {
        setMessage({ text: 'Why Travel With Us saved successfully!', type: 'success' });
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
          <h1 className="text-2xl font-bold text-slate-900">Home Page - Why Travel With Us</h1>
          <p className="text-sm text-slate-500 mt-1">Manage the text content for the Why Choose Us section.</p>
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
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Subtitle</label>
          <textarea
            value={formData.subtitle}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            rows={2}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">4 Bullet Points</label>
          <div className="space-y-4">
            {[0, 1, 2, 3].map(i => (
              <input
                key={i}
                type="text"
                value={formData.bullets[i]}
                onChange={(e) => handleBulletChange(i, e.target.value)}
                placeholder={`Bullet ${i + 1}`}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
