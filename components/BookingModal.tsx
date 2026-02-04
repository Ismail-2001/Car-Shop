import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, Clock, Car, User, Mail, Phone, Loader2, ChevronDown } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  vehicle: string;
}

const INITIAL_DATA: FormData = {
  service: '',
  date: '',
  time: '',
  name: '',
  email: '',
  phone: '',
  vehicle: ''
};

const SERVICES = [
  "The Signature Wash",
  "Paint Correction",
  "Ceramic Coating",
  "Interior Detail",
  "Full Restoration"
];

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(INITIAL_DATA);
      setErrors({});
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed z-[70] w-full max-w-2xl bg-neutral-900 border border-white/10 shadow-2xl rounded-sm overflow-hidden"
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/5 bg-black/40">
              <h2 className="text-2xl font-serif text-white">
                {isSuccess ? 'Confirmation' : 'Request Appointment'}
              </h2>
              <button 
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-gold-500" />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4">Request Received</h3>
                  <p className="text-neutral-400 mb-8 max-w-md mx-auto">
                    Thank you, {formData.name}. We have received your request for a {formData.service}. 
                    Our concierge team will contact you shortly at {formData.phone} to confirm your appointment details.
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold block">Service</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full bg-black/50 border ${errors.service ? 'border-red-500' : 'border-white/10'} rounded-sm px-4 py-3 text-white focus:border-gold-500 outline-none appearance-none transition-colors`}
                      >
                        <option value="">Select a Service</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" size={16} />
                    </div>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold block">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={`w-full bg-black/50 border ${errors.date ? 'border-red-500' : 'border-white/10'} rounded-sm pl-12 pr-4 py-3 text-white focus:border-gold-500 outline-none transition-colors [color-scheme:dark]`}
                        />
                      </div>
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold block">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`w-full bg-black/50 border ${errors.time ? 'border-red-500' : 'border-white/10'} rounded-sm pl-12 pr-4 py-3 text-white focus:border-gold-500 outline-none transition-colors [color-scheme:dark]`}
                        />
                      </div>
                      {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold block">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-black/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-sm pl-12 pr-4 py-3 text-white focus:border-gold-500 outline-none transition-colors placeholder:text-neutral-700`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold block">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-sm pl-12 pr-4 py-3 text-white focus:border-gold-500 outline-none transition-colors placeholder:text-neutral-700`}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold block">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          className={`w-full bg-black/50 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-sm pl-12 pr-4 py-3 text-white focus:border-gold-500 outline-none transition-colors placeholder:text-neutral-700`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold block">Vehicle Make & Model</label>
                    <div className="relative">
                      <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                      <input
                        type="text"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="e.g. Porsche 911 GT3"
                        className="w-full bg-black/50 border border-white/10 rounded-sm pl-12 pr-4 py-3 text-white focus:border-gold-500 outline-none transition-colors placeholder:text-neutral-700"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-600 text-black font-bold uppercase tracking-widest py-4 hover:bg-gold-500 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Processing...
                        </>
                      ) : (
                        'Confirm Booking'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;