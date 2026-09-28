import React from 'react';

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Quick Stat Cards */}
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 border border-slate-100">
          <dt className="truncate text-sm font-medium text-gray-500">Total Testimonials</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">0</dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 border border-slate-100">
          <dt className="truncate text-sm font-medium text-gray-500">Active Tour Packages</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">0</dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 border border-slate-100">
          <dt className="truncate text-sm font-medium text-gray-500">Available Vehicles</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">0</dd>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow border border-slate-100">
        <h2 className="text-lg font-medium text-gray-900">Welcome to your Content Management System</h2>
        <p className="mt-2 text-sm text-gray-500">
          Use the sidebar navigation to manage your website's content. All changes made here will be reflected instantly on the live website.
          Please note that before adding images, your Cloudinary credentials must be configured in your environment variables.
        </p>
      </div>
    </div>
  );
}
