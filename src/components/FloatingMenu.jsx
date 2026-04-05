import React, { useState } from 'react';
import { Plus, X, Calendar, Pill, AlertCircle, MessageSquare, User } from 'lucide-react';
import './FloatingMenu.css';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container animate-fade-in" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title font-heading">{title}</h3>
                    <button className="modal-close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

const FloatingMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const openModal = (modalName) => {
        setActiveModal(modalName);
        closeMenu();
    };

    const closeModal = () => setActiveModal(null);

    const menuItems = [
        { id: 'appointment', label: 'Make Appointment', icon: <Calendar size={20} />, color: '#365EFF' },
        { id: 'medicines', label: 'Add Medicines', icon: <Pill size={20} />, color: '#10B981' },
        { id: 'sos', label: 'Emergency Alert', icon: <AlertCircle size={20} />, color: '#EF4444' },
        { id: 'support', label: 'AI Support', icon: <MessageSquare size={20} />, color: '#8B5CF6' },
        { id: 'profile', label: 'Patient Profile', icon: <User size={20} />, color: '#F59E0B' },
    ];

    return (
        <>
            <div className={`floating-menu-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="menu-items">
                    {menuItems.map((item, index) => (
                        <div 
                            key={item.id} 
                            className="menu-item-container"
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            <span className="menu-item-label">{item.label}</span>
                            <button 
                                className="menu-item-btn shadow-xl"
                                style={{ backgroundColor: item.color }}
                                onClick={() => openModal(item.id)}
                            >
                                {item.icon}
                            </button>
                        </div>
                    ))}
                </div>

                <button 
                    className={`main-fam-btn shadow-2xl ${isMenuOpen ? 'rotated' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <Plus size={28} />
                </button>
            </div>

            {/* Modals */}
            <Modal 
                isOpen={activeModal === 'appointment'} 
                onClose={closeModal} 
                title="Make an Appointment"
            >
                <div className="space-y-4">
                    <p className="text-secondary pb-4">Schedule a session with your specialist.</p>
                    <div className="form-group">
                        <label className="block text-sm mb-2 text-dim">Specialization</label>
                        <select className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary">
                            <option>Neurology</option>
                            <option>Physiotherapy</option>
                            <option>General Checkup</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="block text-sm mb-2 text-dim">Preferred Date</label>
                        <input type="date" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary" />
                    </div>
                    <button className="btn btn-primary w-full mt-4" onClick={closeModal}>Schedule Appointment</button>
                </div>
            </Modal>

            <Modal 
                isOpen={activeModal === 'medicines'} 
                onClose={closeModal} 
                title="Add New Medicine"
            >
                <div className="space-y-4">
                    <p className="text-secondary pb-4">Keep track of your daily prescriptions.</p>
                    <div className="form-group">
                        <label className="block text-sm mb-2 text-dim">Medicine Name</label>
                        <input type="text" placeholder="Enter medicine name" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group">
                            <label className="block text-sm mb-2 text-dim">Dosage</label>
                            <input type="text" placeholder="e.g. 10mg" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary" />
                        </div>
                        <div className="form-group">
                            <label className="block text-sm mb-2 text-dim">Frequency</label>
                            <select className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary">
                                <option>Once daily</option>
                                <option>Twice daily</option>
                                <option>Three times daily</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-primary w-full mt-4" onClick={closeModal}>Save Medicine</button>
                </div>
            </Modal>

            <Modal 
                isOpen={activeModal === 'sos'} 
                onClose={closeModal} 
                title="Emergency SOS"
            >
                <div className="text-center py-6 space-y-6">
                    <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto text-red-500 animate-pulse">
                        <AlertCircle size={40} />
                    </div>
                    <p className="text-lg">Need immediate assistance?</p>
                    <p className="text-secondary text-sm px-4">This will send an emergency alert to your primary contacts and emergency responders.</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl w-full translate-transition" onClick={closeModal}>
                        TRIGGER ALERT NOW
                    </button>
                    <button className="text-dim text-sm" onClick={closeModal}>Cancel</button>
                </div>
            </Modal>

            <Modal 
                isOpen={activeModal === 'support'} 
                onClose={closeModal} 
                title="AI Support Chat"
            >
                <div className="flex flex-col h-[400px]">
                    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                        <div className="bg-white/5 p-3 rounded-lg rounded-tl-none inline-block max-w-[80%] text-sm">
                            Hello! I'm your AI assistant. How can I help you today?
                        </div>
                        <div className="bg-primary/20 p-3 rounded-lg rounded-tr-none ml-auto text-sm max-w-[80%]">
                            I'm looking for my prescription from yesterday.
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <input type="text" placeholder="Type a message..." className="flex-1 bg-black/40 border border-white/10 rounded-lg p-3 text-white text-sm" />
                        <button className="bg-primary p-3 rounded-lg"><Plus size={18} /></button>
                    </div>
                </div>
            </Modal>

            <Modal 
                isOpen={activeModal === 'profile'} 
                onClose={closeModal} 
                title="Patient Profile"
            >
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-xl font-bold">JD</div>
                        <div>
                            <h4 className="text-lg font-bold">John Doe</h4>
                            <p className="text-dim text-sm">ID: EA-902341</p>
                        </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 space-y-3">
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <span className="text-dim text-sm">Age</span>
                            <span>34 Years</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <span className="text-dim text-sm">Blood Type</span>
                            <span className="text-red-400">O+ Positive</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-dim text-sm">Emergency Contact</span>
                            <span>+1 234 567 8900</span>
                        </div>
                    </div>
                    <button className="btn btn-secondary w-full" onClick={closeModal}>Edit Detailed Profile</button>
                </div>
            </Modal>
        </>
    );
};

export default FloatingMenu;
