'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { LayoutDashboard, MessageSquare, Car, Image as ImageIcon, Map, FileText, LogOut } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
  { name: 'Vehicles', href: '/admin/vehicles', icon: Car },
  { name: 'Tour Packages', href: '/admin/tours', icon: Map },
  { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
  { name: 'Pages', href: '/admin/pages', icon: FileText },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-slate-900 border-r border-slate-800 w-64 text-white">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-slate-800 bg-slate-950">
        <span className="text-xl font-bold font-serif text-white tracking-wide">Admin <span className="text-orange-500">Panel</span></span>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-3 py-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 shrink-0 ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-slate-800 p-4">
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="group flex w-full items-center px-3 py-2.5 text-sm font-medium rounded-md text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5 shrink-0 text-slate-400 group-hover:text-white" aria-hidden="true" />
          Logout
        </button>
      </div>
    </div>
  );
}
