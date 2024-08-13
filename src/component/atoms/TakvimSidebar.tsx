import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Takvim stil dosyası
import { Modal, Button } from 'react-bootstrap';
import './TakvimSidebar.css'; // Stil dosyanızı buraya import edin

const TakvimSidebar: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleDateChange = (newDate: Date) => {
        setDate(newDate);
    };

    return (
        <>
            <Button className="transparent-button " onClick={handleShow}>
            <i className="fa-solid fa-calendar-days"></i>&nbsp;&nbsp; Takvim
            </Button>

            <Modal show={showModal} onHide={handleClose} className="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Takvim</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Calendar
                        value={date}
                        
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Kapat
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TakvimSidebar;
