import React, { useRef, useEffect } from 'react';
import video from "../videos/vid2.mp4"
import "../css/modal.css"


const Modal = ({ isOpen, onClose }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.muted = true; // Video sesi kapalı
            videoRef.current.play().catch(error => {
                console.error("Video oynatma hatası:", error);
            });
        }
    }, [isOpen]);

    if (!isOpen) return null; // Eğer modal açık değilse, render etme

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <video
                    ref={videoRef}
                    width="100%"
                    height="auto"
                    loop
                >
                    <source src={video} type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                </video>
            </div>
        </div>
    );
};

export default Modal;