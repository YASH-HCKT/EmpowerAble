import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MapSection.css';

const MapSection = () => {
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [aiSummary, setAiSummary] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('/api/locations');
                // Ensure markers are spread out by using more specific % coordinates
                const enhancedLocations = response.data.map(loc => ({
                    ...loc,
                    lat: loc.id === 1 ? 40 : loc.id === 2 ? 60 : 35,
                    lng: loc.id === 1 ? 35 : loc.id === 2 ? 65 : 75
                }));
                setLocations(enhancedLocations);
                if (enhancedLocations.length > 0) {
                    setSelectedLocation(enhancedLocations[0]);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching locations:', error);
                setLoading(false);
            }
        };
        fetchLocations();
    }, []);

    useEffect(() => {
        if (selectedLocation) {
            const fetchSummary = async () => {
                try {
                    const response = await axios.get(`/api/summary?id=${selectedLocation.id}`);
                    setAiSummary(response.data.summary);
                } catch (error) {
                    console.error('Error fetching summary:', error);
                }
            };
            fetchSummary();
        }
    }, [selectedLocation]);

    if (loading) return <div className="loading-screen flex items-center justify-center h-screen bg-white font-bold text-primary">INITIALIZING DATA...</div>;

    return (
        <div className="map-page">
            <header className="map-header">
                <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white">
                        <span className="material-symbols-outlined !text-2xl font-variation-fill">accessibility_new</span>
                    </div>
                    <h2 className="text-xl font-black tracking-tight text-primary">EmpowerAble</h2>
                </div>
                <nav className="flex items-center gap-8">
                    <Link to="/" className="text-sm font-bold text-slate-500">Home</Link>
                    <span className="text-sm font-black text-accent-gold">Map Explore</span>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-xl text-xs font-black shadow-lg shadow-red-600/20">EMERGENCY</button>
                </nav>
            </header>

            <div className="map-main">
                <aside className="map-sidebar">
                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Filters</h3>
                        <div className="space-y-3">
                            {['Wheelchair Access', 'Braille Signage', 'Elevators', 'Hearing Loop'].map((f, i) => (
                                <div key={i} className={`flex items-center gap-4 px-5 py-4 rounded-2xl border-2 ${i === 0 ? 'bg-primary text-white border-primary shadow-xl' : 'bg-slate-50 text-slate-500 border-transparent'}`}>
                                    <span className="material-symbols-outlined">{i === 0 ? 'accessible' : i === 1 ? 'blind' : i === 2 ? 'elevator' : 'hearing'}</span>
                                    <span className="text-sm font-bold">{f}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Score Legend</h3>
                        <div className="space-y-4 px-2">
                            <div className="flex items-center gap-3"><div className="size-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30"></div><span className="text-xs font-bold text-slate-500">90-100 Full Access</span></div>
                            <div className="flex items-center gap-3"><div className="size-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/30"></div><span className="text-xs font-bold text-slate-500">70-89 Partial Access</span></div>
                        </div>
                    </section>

                    <footer className="mt-auto">
                        <div className="bg-primary rounded-[2rem] p-6 text-white space-y-4">
                            <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Verified Hubs</p>
                            <div className="flex items-baseline justify-between"><span className="text-3xl font-black">124</span><span className="text-[10px] font-black bg-emerald-400/20 px-2 py-1 rounded-lg">+12%</span></div>
                        </div>
                    </footer>
                </aside>

                <section className="map-viewport">
                    <div className="map-bg"></div>

                    <div className="map-markers-layer">
                        {locations.map(loc => (
                            <div
                                key={loc.id}
                                className="map-marker hover:z-[400]"
                                style={{ top: `${loc.lat}%`, left: `${loc.lng}%` }}
                                onClick={() => setSelectedLocation(loc)}
                            >
                                <div className="marker-icon-box" style={{ backgroundColor: selectedLocation?.id === loc.id ? '#FFBF00' : '#114B31', color: selectedLocation?.id === loc.id ? '#114B31' : '#FFBF00' }}>
                                    <span className="material-symbols-outlined font-variation-fill">{loc.icon}</span>
                                </div>
                                <div className="marker-tip" style={{ backgroundColor: selectedLocation?.id === loc.id ? '#FFBF00' : '#114B31' }}></div>
                            </div>
                        ))}
                    </div>

                    <div className="map-widget-weather">
                        <div className="size-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold"><span className="material-symbols-outlined !text-2xl font-variation-fill animate-pulse">light_mode</span></div>
                        <div><p className="text-[9px] font-black uppercase opacity-40 leading-none mb-1">Status</p><p className="text-sm font-black text-slate-800 leading-none">Optimal Mobility</p></div>
                    </div>

                    <div className="map-controls">
                        <button className="map-control-btn"><span className="material-symbols-outlined font-variation-fill">my_location</span></button>
                        <div className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden"><button className="map-control-btn"><span className="material-symbols-outlined">add</span></button><button className="map-control-btn"><span className="material-symbols-outlined">remove</span></button></div>
                    </div>

                    {selectedLocation && (
                        <div className="map-info-panel-container">
                            <div className="map-info-panel">
                                <img src={selectedLocation.image} className="panel-image" alt={selectedLocation.title} />
                                <div className="panel-content">
                                    <div className="panel-header">
                                        <div><h1 className="panel-title">{selectedLocation.title}</h1><p className="text-sm font-bold text-slate-400 mt-1">{selectedLocation.address}</p></div>
                                        <div className="panel-score-badge">{selectedLocation.score} <span className="material-symbols-outlined font-variation-fill">verified</span></div>
                                    </div>
                                    <div className="mt-6 flex gap-3">
                                        {selectedLocation.features.slice(0, 3).map(f => <div key={f} className="size-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm"><span className="material-symbols-outlined font-variation-fill">{f}</span></div>)}
                                        <div className="size-11 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center font-black text-[10px]">+8</div>
                                    </div>
                                    <div className="panel-ai-box">
                                        <div className="flex items-center gap-2 mb-2"><span className="material-symbols-outlined !text-sm text-accent-gold font-variation-fill">auto_awesome</span><span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">AI Audit</span></div>
                                        <p className="text-sm font-bold text-slate-700 italic">"{aiSummary}"</p>
                                    </div>
                                    <div className="panel-footer">
                                        <div className="flex -space-x-3">{[1, 2, 3, 4].map(v => <div key={v} className="size-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-lg"><img src={`https://i.pravatar.cc/150?u=u${v}${selectedLocation.id}`} alt="u" /></div>)}</div>
                                        <button className="btn-directions">GET DIRECTIONS</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default MapSection;
