import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import LeadModal from './LeadModal';
import { logEvent } from '../utils/analytics';
import './FloatingActions.css';

const FloatingActions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasTriggeredExit, setHasTriggeredExit] = useState(false);

    useEffect(() => {
        // Exit intent logic
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasTriggeredExit) {
                setIsModalOpen(true);
                setHasTriggeredExit(true); // Ensure it only triggers once
            }
        };

        const handleOpenModal = () => setIsModalOpen(true);

        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('openLeadModal', handleOpenModal);

        // Auto-trigger after 30 seconds if exit intent not triggered
        const timer = setTimeout(() => {
            if (!hasTriggeredExit) {
                setIsModalOpen(true);
                setHasTriggeredExit(true);
            }
        }, 30000);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('openLeadModal', handleOpenModal);
            clearTimeout(timer);
        };
    }, [hasTriggeredExit]);

    return (
        <>
            <div className="floating-container">
                <a href="tel:+919876543210" className="floating-btn btn-call" aria-label="Call Us" data-track="call" onClick={() => logEvent('Contact', 'call_click', 'FloatingActions')}>
                    <Phone size={28} />
                </a>
                <a
                    href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20book%20a%20skin%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-btn btn-whatsapp"
                    aria-label="WhatsApp Us"
                    data-track="whatsapp"
                    onClick={() => logEvent('Contact', 'whatsapp_click', 'FloatingActions')}
                >
                    <MessageCircle size={32} />
                </a>
            </div>

            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default FloatingActions;
