import React from 'react';

const Trust = () => (
  <div id="trust" className="py-20 px-4 bg-brand-light">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-navy">Why Choose Shnoor</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center">
        <div>
          <div className="w-12 h-12 bg-white border border-slate-200 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-sm">1</div>
          <h4 className="font-semibold text-slate-800 text-sm">Reliable logistics</h4>
        </div>
        <div>
          <div className="w-12 h-12 bg-white border border-slate-200 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-sm">2</div>
          <h4 className="font-semibold text-slate-800 text-sm">Transparent tracking</h4>
        </div>
        <div>
          <div className="w-12 h-12 bg-white border border-slate-200 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-sm">3</div>
          <h4 className="font-semibold text-slate-800 text-sm">Global trade experience</h4>
        </div>
        <div>
          <div className="w-12 h-12 bg-white border border-slate-200 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-sm">4</div>
          <h4 className="font-semibold text-slate-800 text-sm">Technology-driven</h4>
        </div>
      </div>

      <div className="bg-brand-navy text-white rounded p-8 sm:p-10 flex flex-col md:flex-row justify-around items-center text-center shadow-md">
        <div className="mb-6 md:mb-0">
          <div className="text-4xl font-bold mb-1">40+</div>
          <div className="text-blue-300 text-sm uppercase tracking-wide">Countries Served</div>
        </div>
        <div className="hidden md:block w-px h-16 bg-slate-700"></div>
        <div className="mb-6 md:mb-0">
          <div className="text-4xl font-bold mb-1">10k+</div>
          <div className="text-blue-300 text-sm uppercase tracking-wide">Shipments Managed</div>
        </div>
        <div className="hidden md:block w-px h-16 bg-slate-700"></div>
        <div>
          <div className="text-4xl font-bold mb-1">150+</div>
          <div className="text-blue-300 text-sm uppercase tracking-wide">Global Partners</div>
        </div>
      </div>
    </div>
  </div>
);

export default Trust;
