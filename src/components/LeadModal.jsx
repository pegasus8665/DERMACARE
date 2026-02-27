import { X } from 'lucide-react';
import LeadForm from './LeadForm';

const LeadModal = ({ isOpen, onClose }) => {

    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 0, background: 'transparent', boxShadow: 'none' }}>
                <button className="modal-close" onClick={onClose} style={{ top: '-40px', right: 0, color: 'white', background: 'rgba(0,0,0,0.5)' }}>
                    <X size={24} />
                </button>

                <LeadForm onSuccess={onClose} />
            </div>
        </div>
    );
};

export default LeadModal;
