import React from 'react';

const About = () => (
  <div id="about" className="py-20 px-4 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-brand-navy mb-6">About Us</h2>
      <p className="text-lg text-slate-600 mb-10 leading-relaxed">
        Shnoor International LLC provides intelligent import-export coordination solutions designed to simplify global trade workflows through automation-ready logistics support and shipment visibility tools.
      </p>
      <div className="bg-brand-light p-8 rounded border border-slate-100 max-w-2xl mx-auto shadow-sm">
        <h3 className="font-bold text-brand-navy mb-3 text-lg">Our Mission</h3>
        <p className="text-slate-600 italic">
          "To empower modern businesses with seamless, transparent, and technology-driven global trade operations, bridging borders with smart logistics solutions."
        </p>
      </div>
    </div>
  </div>
);

export default About;
