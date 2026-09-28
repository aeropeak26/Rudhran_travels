'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Image as ImageIcon } from 'lucide-react';

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  isActive: boolean;
}

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5,
    isActive: true,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/testimonials');
      const data = await res.json();
      setTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleOpenModal = (testimonial?: Testimonial) => {
    if (testimonial) {
      setEditingId(testimonial._id);
      setFormData({
        name: testimonial.name,
        role: testimonial.role,
        content: testimonial.content,
        rating: testimonial.rating,
        isActive: testimonial.isActive,
      });
      setExistingImageUrl(testimonial.image);
    } else {
      setEditingId(null);
      setFormData({ name: '', role: '', content: '', rating: 5, isActive: true });
      setExistingImageUrl('');
    }
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleImageUpload = async (): Promise<string> => {
    if (!imageFile) return existingImageUrl;
    
    const formData = new FormData();
    formData.append('file', imageFile);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) throw new Error('Image upload failed');
    
    const data = await res.json();
    return data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const imageUrl = await handleImageUpload();
      
      const payload = {
        ...formData,
        image: imageUrl,
      };

      const url = editingId ? `/api/testimonials/${editingId}` : '/api/testimonials';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        handleCloseModal();
        fetchTestimonials();
      } else {
        alert('Failed to save testimonial');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during save.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const res = await fetch(`/api/testimonials/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchTestimonials();
      }
    } catch (error) {
      console.error(error);
      alert('Failed to delete');
    }
  };

  return (
    <div className="p-6">
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage the customer reviews shown on the homepage.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            onClick={() => handleOpenModal()}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none sm:w-auto transition-colors"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            Add Testimonial
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Customer</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Rating</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {loading ? (
                    <tr>
                      <td colSpan={4} className="py-10 text-center text-sm text-gray-500">Loading...</td>
                    </tr>
                  ) : testimonials.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-10 text-center text-sm text-gray-500">No testimonials found. Add one!</td>
                    </tr>
                  ) : (
                    testimonials.map((t) => (
                      <tr key={t._id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img className="h-10 w-10 rounded-full object-cover" src={t.image} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">{t.name}</div>
                              <div className="text-gray-500">{t.role}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {t.rating} Stars
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${t.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {t.isActive ? 'Active' : 'Hidden'}
                          </span>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button onClick={() => handleOpenModal(t)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button onClick={() => handleDelete(t._id)} className="text-red-600 hover:text-red-900">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={handleCloseModal}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button type="button" onClick={handleCloseModal} className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    {editingId ? 'Edit Testimonial' : 'Add New Testimonial'}
                  </h3>
                  <div className="mt-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                        <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm border p-2 text-black" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Role / Location</label>
                        <input type="text" required value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm border p-2 text-black" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Review Content</label>
                        <textarea required rows={4} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm border p-2 text-black" />
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
                          <input type="number" min="1" max="5" required value={formData.rating} onChange={e => setFormData({...formData, rating: Number(e.target.value)})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm border p-2 text-black" />
                        </div>
                        <div className="flex-1 flex items-center mt-6">
                          <input type="checkbox" id="isActive" checked={formData.isActive} onChange={e => setFormData({...formData, isActive: e.target.checked})} className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
                          <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">Active (Visible)</label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Customer Image</label>
                        <div className="mt-1 flex items-center">
                          <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 border border-gray-300">
                            {imageFile ? (
                              <img src={URL.createObjectURL(imageFile)} alt="" className="h-full w-full object-cover" />
                            ) : existingImageUrl ? (
                              <img src={existingImageUrl} alt="" className="h-full w-full object-cover" />
                            ) : (
                              <ImageIcon className="h-full w-full text-gray-300 p-2" />
                            )}
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                setImageFile(e.target.files[0]);
                              }
                            }}
                            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                            required={!existingImageUrl && !imageFile}
                          />
                        </div>
                      </div>

                      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button type="submit" disabled={isSubmitting} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-70">
                          {isSubmitting ? 'Saving...' : 'Save Testimonial'}
                        </button>
                        <button type="button" onClick={handleCloseModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm">
                          Cancel
                        </button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
