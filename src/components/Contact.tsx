import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useHighLevel } from '../hooks/useHighLevel';
import { validateForm, ValidationErrors, FormData } from '../utils/formValidation';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    acres: '',
    service: '',
    frequency: '',
    message: ''
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const { createContact, submissionState, resetState } = useHighLevel();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear validation error for this field when user starts typing
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors({
        ...validationErrors,
        [name]: undefined
      });
    }

    // Clear success message if showing
    if (showSuccess) {
      setShowSuccess(false);
    }

    // Clear submission error if showing
    if (submissionState.error) {
      resetState();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset previous states
    setValidationErrors({});
    setShowSuccess(false);
    resetState();

    // Validate form
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Submit to HighLevel
    const success = await createContact(formData);

    if (success) {
      // Clear form and show success message
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        acres: '',
        service: '',
        frequency: '',
        message: ''
      });
      setShowSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(555) 123-4567',
      subtitle: 'Call for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@sslandmgmt.com',
      subtitle: 'Send us your project details'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Midwest & South',
      subtitle: '12+ states and expanding'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: '24 Hours',
      subtitle: 'Quick turnaround on quotes'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B40] mb-8">
            If you're a busy manager, you don't have time to chase down 17 emails just to get a call back.
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            You've got a job that needs to be done. You need a solution, and you need it now. We get it. We've been there. We want to make this as easy as possible for you. Instead of bouncing around from one dead end to another, give us the details of your project and we'll get back to you with a direct answer and a clear plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-[#1D2B40] mb-8">Get In Touch</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-[#EAEAEA] p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
                  <div className="w-12 h-12 bg-[#F07520] rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1D2B40] mb-1">{info.title}</h4>
                  <p className="text-lg font-semibold text-[#1D2B40] mb-1">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1D2B40] rounded-xl p-8">
              <h4 className="text-2xl font-bold text-white mb-4">Why Choose S&S?</h4>
              <ul className="space-y-3">
                {[
                  'Custom equipment for unique challenges',
                  'Proven track record with major clients',
                  'Comprehensive insurance and bonding',
                  'Environmental compliance expertise',
                  'Flexible scheduling around your operations'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F07520] rounded-full"></div>
                    <span className="text-[#EAEAEA]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-[#F07520]/20">
            <h3 className="text-2xl font-bold text-[#1D2B40] mb-2">Get Your FREE Land Management Audit</h3>
            <p className="text-gray-600 mb-6">Complete this form and we'll show you exactly how much you could be saving (typical savings: 20-40%)</p>
            
            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-semibold">Thank you for your submission!</p>
                  <p className="text-green-700 text-sm">We'll get back to you within 24 hours with your FREE land management audit.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submissionState.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-semibold">Submission Failed</p>
                  <p className="text-red-700 text-sm">{submissionState.error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1D2B40] mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F07520] focus:border-transparent transition-all duration-200 ${
                      validationErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    disabled={submissionState.isLoading}
                    required
                  />
                  {validationErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1D2B40] mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F07520] focus:border-transparent transition-all duration-200"
                    disabled={submissionState.isLoading}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1D2B40] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F07520] focus:border-transparent transition-all duration-200 ${
                      validationErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    disabled={submissionState.isLoading}
                    required
                  />
                  {validationErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1D2B40] mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F07520] focus:border-transparent transition-all duration-200 ${
                      validationErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    disabled={submissionState.isLoading}
                  />
                  {validationErrors.phone && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1D2B40] mb-2">Acres/Scope</label>
                  <input
                    type="text"
                    name="acres"
                    value={formData.acres}
                    onChange={handleInputChange}
                    placeholder="e.g., 500 acres, 10 buildings"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F07520] focus:border-transparent transition-all duration-200"
                    disabled={submissionState.isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1D2B40] mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F07520] focus:border-transparent transition-all duration-200"
                    disabled={submissionState.isLoading}
                  >
                    <option value="">Select a service</option>
                    <option value="commercial">Commercial Mowing</option>
                    <option value="solar">Solar Farm Maintenance</option>
                    <option value="hydro">Hydro Seeding</option>
                    <option value="specialty">Specialty Services</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1D2B40] mb-2">Frequency Needed</label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F07520] focus:border-transparent transition-all duration-200"
                  disabled={submissionState.isLoading}
                >
                  <option value="">Select frequency</option>
                  <option value="one-time">One-time project</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="seasonal">Seasonal</option>
                  <option value="as-needed">As needed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1D2B40] mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your land management needs, timeline, and any specific requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F07520] focus:border-transparent transition-all duration-200 resize-none"
                  disabled={submissionState.isLoading}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submissionState.isLoading}
                className={`w-full px-8 py-5 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg flex items-center justify-center group ${
                  submissionState.isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#F07520] text-white hover:bg-[#E06610] transform hover:scale-105'
                }`}
              >
                {submissionState.isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get My FREE Audit Now
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;