import { X } from 'lucide-react';
import LeadForm from './LeadForm';

const LeadModal = ({ isOpen, onClose }) => {

    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <h2 className="modal-title">Find Your Clinic</h2>
                    <p className="modal-desc">Leave your details below and we will connect you with top specialists.</p>
                </div>

                <LeadForm onSuccess={onClose} />
            </div>
        </div>
    );
};

export default LeadModal;
