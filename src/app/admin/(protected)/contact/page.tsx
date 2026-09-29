'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Save } from 'lucide-react';

export default function AdminContactPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [data, setData] = useState({
    callCenter: { phone1: '', phone2: '' },
    location: { address: '' },
    email: { email1: '', email2: '' },
    backgroundImage: ''
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    try {
      setSaving(true);
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const json = await res.json();
      if (json.url) {
        setData(prev => ({ ...prev, backgroundImage: json.url }));
        toast.success('Image uploaded successfully');
      }
    } catch (err) {
      toast.error('Image upload failed');
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact-content');
      const json = await res.json();
      if (json && Object.keys(json).length > 0) {
        setData({
          callCenter: json.callCenter || { phone1: '', phone2: '' },
          location: json.location || { address: '' },
          email: json.email || { email1: '', email2: '' },
          backgroundImage: json.backgroundImage || ''
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/contact-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        toast.success('Contact page content saved successfully!');
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

  if (loading) return <div className="p-6 text-slate-500">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Contact Page CMS</h1>
        <p className="mt-2 text-sm text-slate-600">Update the contact details and the Google Maps embed shown on the Contact Us page.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-slate-800">Sidebar Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-4 border border-slate-100 p-4 rounded-lg bg-slate-50">
              <h3 className="font-bold text-slate-700">Call Center</h3>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Phone 1</label>
                <input type="text" value={data.callCenter.phone1} onChange={e => setData({...data, callCenter: {...data.callCenter, phone1: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" placeholder="+91 98400 12345" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Phone 2</label>
                <input type="text" value={data.callCenter.phone2} onChange={e => setData({...data, callCenter: {...data.callCenter, phone2: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="space-y-4 border border-slate-100 p-4 rounded-lg bg-slate-50">
              <h3 className="font-bold text-slate-700">Email Address</h3>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Email 1</label>
                <input type="email" value={data.email.email1} onChange={e => setData({...data, email: {...data.email, email1: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" placeholder="booking@rudhrantravels.com" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Email 2</label>
                <input type="email" value={data.email.email2} onChange={e => setData({...data, email: {...data.email, email2: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" placeholder="support@rudhrantravels.com" />
              </div>
            </div>

            <div className="space-y-4 border border-slate-100 p-4 rounded-lg bg-slate-50 md:col-span-2">
              <h3 className="font-bold text-slate-700">Our Location</h3>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Physical Address</label>
                <textarea rows={2} value={data.location.address} onChange={e => setData({...data, location: {...data.location, address: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" placeholder="216, E Veli St, Kamarajar Salai, Madurai Main, Madurai, Tamil Nadu 625001" />
              </div>
            </div>
            
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-slate-800">Page Background Image</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Upload New Background</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full border p-1.5 rounded text-black text-sm bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
            {data.backgroundImage && (
              <div className="mt-4 p-4 border border-slate-200 rounded-lg bg-slate-50 relative">
                <img src={data.backgroundImage} alt="Background Preview" className="w-full h-32 object-cover rounded shadow-sm mb-3" />
                <button type="button" onClick={() => setData(prev => ({ ...prev, backgroundImage: '' }))} className="px-3 py-1.5 bg-red-100 text-red-600 rounded text-xs font-bold hover:bg-red-200 transition-colors">
                  Remove Background Image
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm disabled:opacity-50">
            <Save className="w-5 h-5" />
            {saving ? 'Saving...' : 'Save Contact Details'}
          </button>
        </div>
      </form>
    </div>
  );
}
