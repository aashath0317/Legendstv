import React from 'react';

const BreakingNewsTicker = () => (
    <div className="bg-black border-b border-gray-800 h-10 flex items-center relative overflow-hidden z-50">
        <div className="bg-red-600 text-white text-xs font-black uppercase px-4 h-full flex items-center z-20 relative shrink-0 shadow-[4px_0_10px_rgba(0,0,0,0.5)] skew-x-[-10deg] -ml-2 pl-6">
            <span className="skew-x-[10deg]">Breaking News:</span>
        </div>
        <div className="flex items-center w-full overflow-hidden whitespace-nowrap">
            {/* FIXED: Typo 'animate-marqueeVZ' -> 'animate-marquee' */}
            <div className="animate-marquee flex items-center w-max">
                {/* We duplicate the content to ensure the loop is seamless */}
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center">
                        <span className="text-gray-300 text-xs font-bold uppercase tracking-wide px-4">
                            Watch Founder <span className="text-white">Gary Clark</span> on Bloomberg
                        </span>
                        <span className="text-red-600 mx-2 text-[10px]">●</span>
                        <span className="text-gray-300 text-xs font-bold uppercase tracking-wide px-4">
                            Invest in the <span className="text-white">Future of LegendsTV</span> today
                        </span>
                        <span className="text-red-600 mx-2 text-[10px]">●</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default BreakingNewsTicker;
