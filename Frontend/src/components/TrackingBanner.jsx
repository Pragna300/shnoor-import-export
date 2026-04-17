import React, { useState } from 'react';

const TrackingBanner = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingNumber) setShowResult(true);
  };

  return (
    <div id="tracking" className="py-20 px-4 bg-blue-600 text-white relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4">Track Your Shipment Instantly</h2>
        <p className="mb-8 text-blue-100">Enter your tracking number below to get live updates on your cargo.</p>
        
        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto gap-3">
          <input 
            type="text" 
            placeholder="e.g. SHN-123456" 
            className="flex-1 px-4 py-3 rounded text-slate-800 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            required
          />
          <button type="submit" className="px-8 py-3 bg-brand-navy hover:bg-slate-800 rounded font-bold transition-colors shadow-sm">
            Track Now
          </button>
        </form>

        {showResult && (
          <div className="mt-8 bg-white text-left p-6 rounded shadow-lg max-w-xl mx-auto text-slate-800 border border-slate-100">
             <div className="flex justify-between items-center mb-4 border-b pb-3">
                <span className="font-bold text-brand-navy">Shipment #{trackingNumber}</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">In Transit</span>
             </div>
             <div className="space-y-4">
                <div className="flex flex-col relative tracking-result">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 mr-4 relative z-10"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Departed Port of Origin</p>
                      <p className="text-xs text-slate-500">Shanghai, China - Oct 12, 08:00 AM</p>
                    </div>
                  </div>
                  <div className="absolute left-[5px] top-3 bottom-8 w-0.5 bg-slate-200"></div>
                  
                  <div className="flex items-start mb-4 ml-[26px]">
                    <p className="text-xs text-slate-500 italic bg-slate-50 px-2 py-1 rounded border border-slate-100">Ocean transit via Vessel: Sea Explorer V</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-3 h-3 border-2 border-blue-500 bg-white rounded-full mt-1.5 mr-4 relative z-10"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Estimated Arrival</p>
                      <p className="text-xs text-slate-500">Rotterdam, Netherlands - Oct 28</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackingBanner;
