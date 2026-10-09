'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { LayoutDashboard, MessageSquare, Car, Image as ImageIcon, Map, FileText, LogOut, Phone, Home, ChevronDown, ChevronRight, Bell } from 'lucide-react';

const navigation = [
  { name: 'Booking Requests', href: '/admin/requests', icon: Bell },
  { name: 'General', href: '/admin/general', icon: LayoutDashboard },
  { 
    name: 'Home Page', 
    icon: Home, 
    subItems: [
      { name: 'Hero', href: '/admin/home/hero' },
      { name: 'About', href: '/admin/home/about' },
      { name: 'Popular Destinations', href: '/admin/home/destinations' },
      { name: 'Featured Vehicles', href: '/admin/home/vehicles' },
      { name: 'General (Toyota)', href: '/admin/home/toyota' },
      { name: 'Why Travel With Us', href: '/admin/home/why-us' },
      { name: 'Ride Experiences', href: '/admin/home/experiences' },
    ]
  },
  { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
  { name: 'Tour Packages', href: '/admin/tour-packages', icon: Map },
  { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
  { name: 'Our Fleet', href: '/admin/vehicles', icon: Car },
  { name: 'About Us', href: '/admin/about', icon: FileText },
  { name: 'Rental Tariff', href: '/admin/tariff', icon: FileText },
  { name: 'Contact Info', href: '/admin/contact', icon: Phone },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [homeOpen, setHomeOpen] = useState(pathname.startsWith('/admin/home'));

  return (
    <div className="flex h-full flex-col bg-white border-r border-slate-200 w-64 text-slate-800">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-slate-200 bg-slate-50 justify-center">
        <Link href="/admin/general" className="flex items-center">
          <img src="/images/logo.png" alt="Rudhran Travels" className="h-10 w-auto" />
        </Link>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-3 py-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const hasSub = !!item.subItems;
            const isSubActive = hasSub && pathname.startsWith('/admin/home');

            if (hasSub) {
              return (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={() => setHomeOpen(!homeOpen)}
                    className={`w-full group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      isSubActive || homeOpen
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-orange-600'
                    }`}
                  >
                    <div className="flex items-center">
                      <item.icon
                        className={`mr-3 h-5 w-5 shrink-0 ${
                          isSubActive || homeOpen ? 'text-orange-600' : 'text-slate-400 group-hover:text-orange-500'
                        }`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                    {homeOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </button>
                  {homeOpen && (
                    <div className="pl-11 space-y-1 pb-1">
                      {item.subItems!.map((sub) => {
                        const isSubItemActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                              isSubItemActive
                                ? 'bg-orange-100 text-orange-700'
                                : 'text-slate-500 hover:bg-orange-50 hover:text-orange-600'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href!}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-orange-50 text-orange-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-orange-600'
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 shrink-0 ${
                    isActive ? 'text-orange-600' : 'text-slate-400 group-hover:text-orange-500'
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-slate-200 p-4">
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="group flex w-full items-center px-3 py-2.5 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5 shrink-0 text-slate-400 group-hover:text-red-500" aria-hidden="true" />
          Logout
        </button>
      </div>
    </div>
  );
}
