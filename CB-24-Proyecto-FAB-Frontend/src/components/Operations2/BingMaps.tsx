
import { ReactBingmaps } from 'react-bingmaps';
import './BingMap.css';

interface MapModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
    const bingMapsKey = 'AmZo5quMA3Db1BEuG1GK46SkOLteI3tuTeuVmV4gqQMUiSvCKS3miflFylhEOTiR';


    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <ReactBingmaps
                    bingmapKey={bingMapsKey}
                    center={[13.0827, 80.2707]}
                    zoom={10}
                    className="map"
                />
            </div>
        </div>
    );
};

export default MapModal;
