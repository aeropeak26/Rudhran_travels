'use client';

import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Phone, User, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';

export default function RequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/bookings')
      .then(res => res.json())
      .then(data => {
        setRequests(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching requests', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Booking Requests</h1>
          <p className="text-slate-500 text-sm mt-1">Monitor and manage all incoming ride and package bookings.</p>
        </div>
        <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-lg font-bold text-sm border border-orange-100">
          Total: {requests.length}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : requests.length === 0 ? (
        <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center">
          <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-slate-900">No requests yet</h3>
          <p className="text-slate-500">When customers book a ride, they will appear here.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {requests.map((req, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                    {req.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{req.name}</h3>
                    <p className="text-xs text-slate-500">Submitted on {new Date(req.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a href={`https://wa.me/${req.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1 border border-emerald-200">
                    <Phone className="w-3 h-3" /> WhatsApp
                  </a>
                  <a href={`mailto:${req.email}`} className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1 border border-blue-200">
                    <Mail className="w-3 h-3" /> Email
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Trip Details</h4>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-slate-700">{req.pickupLocation}</div>
                        <div className="text-xs text-slate-500">Pickup City</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-slate-700">{req.dropLocation}</div>
                        <div className="text-xs text-slate-500">Destination City</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-slate-700">{req.pickupDate} at {req.pickupTime}</div>
                        <div className="text-xs text-slate-500">Scheduled For</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Contact & Message</h4>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-slate-700">{req.phone}</div>
                        <div className="text-xs text-slate-500">Phone Number</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-slate-700">{req.email}</div>
                        <div className="text-xs text-slate-500">Email Address</div>
                      </div>
                    </div>

                    {req.message && (
                      <div className="flex items-start gap-3 mt-4 pt-4 border-t border-slate-100">
                        <MessageSquare className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm text-slate-700 italic">"{req.message}"</div>
                          <div className="text-xs text-slate-500 mt-1">Special Request</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
