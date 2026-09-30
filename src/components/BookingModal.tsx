'use client';

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { X, CheckCircle2, Car, Calendar, MapPin, Phone, User, ShieldCheck, Mail, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: any;
}

export default function BookingModal({ isOpen, onClose, selectedItem }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: 'Chennai',
    dropLocation: selectedItem?.location || 'Rameshwaram',
    pickupDate: '2026-10-01',
    pickupTime: '07:00',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Submit to API (saves to DB and sends email)
      const serviceType = selectedItem?.type || 'Outstation Ride';
      const serviceName = selectedItem?.name || selectedItem?.title || 'General Booking';
      
      const payload = {
        ...formData,
        serviceType,
        serviceName,
        sourceUrl: typeof window !== 'undefined' ? window.location.href : ''
      };

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) throw new Error('Failed to submit request');

      // Removed WhatsApp redirect as per request
      
      toast.success('Booking request initiated! Our team will contact you shortly.');

      // 4. Move to success step
      setStep(2);
    } catch (error) {
      console.error(error);
      toast.error('There was an issue submitting your request. Please try contacting us directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-900 overflow-y-auto max-h-[90vh] scrollbar-hide">
        
        {/* Close Button */}
        <button
          onClick={() => {
            setFormData({
              name: '',
              phone: '',
              email: '',
              pickupLocation: 'Chennai',
              dropLocation: selectedItem?.location || 'Rameshwaram',
              pickupDate: '2026-10-01',
              pickupTime: '07:00',
              message: '',
            });
            setStep(1);
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <Car className="w-3.5 h-3.5" />
                <span>INSTANT RIDE BOOKING</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                {selectedItem?.name || selectedItem?.title || 'Book Your Outstation Ride'}
              </h3>
              <p className="text-xs text-slate-500">
                Enter your trip details to receive driver contact & fare confirmation on WhatsApp.
              </p>
            </div>

            {/* Selected item overview card */}
            {selectedItem && (
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl mb-6 flex justify-between items-center text-xs shadow-sm">
                <div>
                  <div className="text-slate-500">Selected Vehicle / Package:</div>
                  <div className="text-sm font-bold text-slate-900">{selectedItem.name || selectedItem.title}</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-500">Rate:</div>
                  <div className="text-sm font-black text-blue-600">
                    ₹{selectedItem.perDayRate || selectedItem.startingPrice || selectedItem.totalFare || 2499}
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-blue-500" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <span>WhatsApp Mobile No *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 8760380485"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ramesh@example.com"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    <span>Pickup City *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>Destination City *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.dropLocation}
                    onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>Pickup Date</span>
                  </label>
                  <input
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium rounded-xl px-3 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>Pickup Time</span>
                  </label>
                  <input
                    type="time"
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium rounded-xl px-3 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                  <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
                  <span>Special Request / Message</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any specific instructions..."
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 transition-all mt-4 disabled:opacity-50"
              >
                {loading ? 'PROCESSING...' : 'CONFIRM & SEND BOOKING REQUEST'}
              </button>

              <div className="text-[10px] text-center text-slate-500 flex items-center justify-center space-x-1 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero advance payment needed. Pay after your trip begins.</span>
              </div>

            </form>
          </div>
        ) : (
          /* Step 2: Confirmation Screen */
          <div className="text-center py-6 space-y-6 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 border-2 border-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900">Booking Request Received!</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Thank you <strong className="text-blue-600">{formData.name}</strong>! We've received your booking request and our team will contact you shortly at <strong className="text-slate-700">{formData.phone}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto shadow-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Route:</span>
                <span className="font-bold text-slate-900">{formData.pickupLocation} &rarr; {formData.dropLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Time:</span>
                <span className="font-bold text-slate-900">{formData.pickupDate} at {formData.pickupTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Booking Status:</span>
                <span className="font-bold text-emerald-600">Pending Confirmation</span>
              </div>
            </div>

            <button
              onClick={() => {
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  pickupLocation: 'Chennai',
                  dropLocation: selectedItem?.location || 'Rameshwaram',
                  pickupDate: '2026-10-01',
                  pickupTime: '07:00',
                  message: '',
                });
                setStep(1);
                onClose();
              }}
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
            >
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
