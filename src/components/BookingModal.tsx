'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Car, Calendar, MapPin, Phone, User, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: any;
}

export default function BookingModal({ isOpen, onClose, selectedItem }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: 'Chennai',
    dropLocation: selectedItem?.location || 'Rameshwaram',
    pickupDate: '2026-10-01',
    pickupTime: '07:00',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                <Car className="w-3.5 h-3.5" />
                <span>INSTANT RIDE BOOKING</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                {selectedItem?.name || selectedItem?.title || 'Book Your Outstation Ride'}
              </h3>
              <p className="text-xs text-slate-400">
                Enter your trip details to receive driver contact & fare confirmation on WhatsApp.
              </p>
            </div>

            {/* Selected item overview card */}
            {selectedItem && (
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl mb-6 flex justify-between items-center text-xs">
                <div>
                  <div className="text-slate-400">Selected Vehicle / Package:</div>
                  <div className="text-sm font-bold text-white">{selectedItem.name || selectedItem.title}</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-400">Rate:</div>
                  <div className="text-sm font-black text-amber-400">
                    ₹{selectedItem.perDayRate || selectedItem.startingPrice || selectedItem.totalFare || 2499}
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-blue-400" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-slate-950 border border-slate-800 text-white text-xs font-medium rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center space-x-1">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>WhatsApp Mobile No *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full bg-slate-950 border border-slate-800 text-white text-xs font-medium rounded-xl px-3.5 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Pickup City *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 text-white text-xs font-medium rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Destination City *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.dropLocation}
                    onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 text-white text-xs font-medium rounded-xl px-3.5 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>Pickup Date</span>
                  </label>
                  <input
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 text-white text-xs font-medium rounded-xl px-3 py-3 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pickup Time</span>
                  </label>
                  <input
                    type="time"
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 text-white text-xs font-medium rounded-xl px-3 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 transition-all mt-4"
              >
                CONFIRM & SEND BOOKING REQUEST
              </button>

              <div className="text-[10px] text-center text-slate-500 flex items-center justify-center space-x-1 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero advance payment needed. Pay after your trip begins.</span>
              </div>

            </form>
          </div>
        ) : (
          /* Step 2: Confirmation Screen */
          <div className="text-center py-6 space-y-6 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Booking Request Received!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you <strong className="text-amber-400">{formData.name}</strong>! Our trip coordinator will call you at <strong className="text-white">{formData.phone}</strong> within 10 minutes to share your driver details and car assignment.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-400">Route:</span>
                <span className="font-bold text-white">{formData.pickupLocation} $\rightarrow$ {formData.dropLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Date & Time:</span>
                <span className="font-bold text-white">{formData.pickupDate} at {formData.pickupTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Booking Status:</span>
                <span className="font-bold text-emerald-400">Punctual Dispatch Confirmed</span>
              </div>
            </div>

            <button
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow"
            >
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
