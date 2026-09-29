'use client';

import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

export default function AdminContactPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [data, setData] = useState({
    callCenter: { phone1: '', phone2: '' },
    location: { address: '' },
    email: { email1: '', email2: '' },
    mapEmbedUrl: ''
  });

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
          mapEmbedUrl: json.mapEmbedUrl || ''
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
        alert('Contact page content saved successfully!');
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
                <textarea rows={2} value={data.location.address} onChange={e => setData({...data, location: {...data.location, address: e.target.value}})} className="w-full border p-2 rounded text-black text-sm" placeholder="No. 42, GST Road, Guindy, Chennai, Tamil Nadu 600032" />
              </div>
            </div>
            
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-slate-800">Google Maps Integration</h2>
          <div>
            <label className="block text-sm text-slate-700 mb-2">Google Maps Embed iframe URL (src only)</label>
            <p className="text-xs text-slate-500 mb-3">Go to Google Maps &gt; Share &gt; Embed a map &gt; Copy HTML &gt; Extract the URL inside the src="..." attribute and paste it here.</p>
            <input type="text" value={data.mapEmbedUrl} onChange={e => setData({...data, mapEmbedUrl: e.target.value})} className="w-full border p-2 rounded text-black text-sm" placeholder="https://www.google.com/maps/embed?pb=..." />
          </div>
          {data.mapEmbedUrl && (
            <div className="mt-4 border border-slate-200 rounded-xl overflow-hidden h-64 bg-slate-100">
              <iframe src={data.mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          )}
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
