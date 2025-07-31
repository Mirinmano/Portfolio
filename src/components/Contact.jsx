import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    details: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date().toLocaleString();

    emailjs.send(
      'service_41q4uti',      
      'template_thi7rhp',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        timeline: formData.timeline,
        message: formData.details,
        time: now
      },
      'XWDP0BamHCMVz_kEo'
    ).then(() => {
      return emailjs.send(
        'service_41q4uti',
        'template_l9z96ep',
        {
          name: formData.name,
          title: formData.service,
          email: formData.email,
        },
        'XWDP0BamHCMVz_kEo'
      );
    }).then(() => {
      setIsSent(true);
      setError('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        timeline: '',
        details: ''
      });
    }).catch(err => {
      console.error(err);
      setError('Failed to send. Please try again.');
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
        <p className="text-xl text-gray-600">Cultivating Connections: Reach Out And Connect With Me</p>
      </div>

      <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto">
        <div className="card-body">
          {isSent && (
            <div className="alert alert-success shadow-lg mb-4">
              <span>Thank you for your message! I will get back to you soon.</span>
            </div>
          )}
          {error && (
            <div className="alert alert-error shadow-lg mb-4">
              <span>{error}</span>
            </div>
          )}

          {/* Table-based form layout */}
          <form onSubmit={handleSubmit}>
            <table className="w-full table-fixed">
              <tbody>
                <tr>
                  <td className="p-2 align-top">
                    <label className="label"><span className="label-text">Name</span></label>
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td className="p-2 align-top">
                    <label className="label"><span className="label-text">Email</span></label>
                  </td>
                  <td className="p-2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td className="p-2 align-top">
                    <label className="label"><span className="label-text">Phone Number</span></label>
                  </td>
                  <td className="p-2">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="p-2 align-top">
                    <label className="label"><span className="label-text">Service of Interest</span></label>
                  </td>
                  <td className="p-2">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="ml">Machine Learning</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td className="p-2 align-top">
                    <label className="label"><span className="label-text">Timeline</span></label>
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="When do you need this completed?"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="p-2 align-top">
                    <label className="label"><span className="label-text">Project Details</span></label>
                  </td>
                  <td className="p-2">
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      className="textarea textarea-bordered w-full h-32"
                      required
                    ></textarea>
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td className="p-2 pt-4">
                    <button type="submit" className="btn btn-primary w-full">Send Message</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
