import React from 'react';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import Button from '../ui/Button';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

const Hero = () => {
    return (
        <div className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden min-h-screen flex items-center">
            <div className="absolute inset-0 bg-black z-0">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                <div className="space-y-8 pt-4 text-center lg:text-left">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-anton uppercase leading-[1] tracking-tight">
                        Join Sports Icons In <br />
                        Building The <br />
                        First Ever <span className="text-red-600">Legend-Fan</span> <br />
                        Owned Media Company
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                        As the first-ever legend and fan-owned media platform, we’re building the future of sports media. Supported by 50+ legend investors, diverse content, and advanced distribution, our mission is well underway. For a limited period, we’re inviting investors to participate in our exclusive ownership structure.
                    </p>
                    <p className="font-bold text-lg" >Join us as a shareholder and help shape the future of how fans connect with professional athletes.</p>

                    <div className="pt-8">
                        <Button animated={true} className="w-full md:w-auto text-lg py-5 px-12 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                            Join Us To Make History And Invest Now
                        </Button>
                    </div>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 underline decoration-gray-600 hover:text-red-500 hover:decoration-red-500 transition-all cursor-pointer pt-4">
                        <span>Sec Filings</span>
                        <span>Offering Circular</span>
                        <span>Investor Education</span>
                    </div>
                </div>

                <div className="flex flex-col w-full shadow-2xl mt-8 lg:mt-0">
                    {/* Video Player Block */}
                    <div className="w-full aspect-video bg-black border border-gray-800 border-b-0 relative z-10 group">
                        <MediaPlayer
                            src="https://mydrive.akeelaasath.workers.dev/0:/gary_sources/1.mp4"
                            viewType="video"
                            streamType="on-demand"
                            logLevel="warn"
                            playsInline
                            autoPlay
                            muted
                            loop
                        >
                            <MediaProvider />
                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                        </MediaPlayer>
                    </div>

                    {/* Stats Grid under video */}
                    <div className="grid grid-cols-2 bg-black border border-red-900/40 border-t-0">
                        <div className="p-8 border-r border-b border-red-900/40 text-center">
                            <div className="text-xs text-gray-400 font-bold uppercase mb-2 tracking-widest">Capital Raised</div>
                            <div className="text-4xl lg:text-5xl font-anton text-white">$6.4M</div>
                        </div>
                        <div className="p-8 border-b border-red-900/40 text-center">
                            <div className="text-xs text-gray-400 font-bold uppercase mb-2 tracking-widest">Total Legends</div>
                            <div className="text-4xl lg:text-5xl font-anton text-white">50+</div>
                        </div>
                        <div className="col-span-2 grid grid-cols-3 divide-x divide-red-900/40">
                            <div className="p-6 text-center">
                                <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Investors</div>
                                <div className="text-2xl font-anton text-white">2,200+</div>
                            </div>
                            <div className="p-6 text-center">
                                <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Min. Invest</div>
                                <div className="text-2xl font-anton text-white">$1,000</div>
                            </div>
                            <div className="p-6 text-center">
                                <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Share Price</div>
                                <div className="text-2xl font-anton text-white">$5.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
