import React, { useState } from 'react';
import { CommentManagerResponseDto } from '../../../store/feature/commentSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './UserStoryCard.css'; // Stil dosyasını ekleyin

interface UserStoryCardProps {
    comment: CommentManagerResponseDto;
}

function UserStoryCard({ comment }: UserStoryCardProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="col">
                <div className="card shadow justify-content-center align-items-center" onClick={handleShow}>
                    <img style={{ width: '200px', height: '200px' }} src={comment.managerAvatar} className="card-img-top" />
                    <div className="card-body">
                        <h3>{comment.managerName}&nbsp;&nbsp;&nbsp;{comment.managerSurname}</h3>
                        <p className="card-text">Manager</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-body-secondary">{comment.companyName}</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} size="lg" scrollable>

                <Modal.Body>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ width: '100px', height: '100px',borderRadius:'50px' }} src={comment.companyLogo} alt={`${comment.companyName} logo`} />
                        <h1 className="company-name" style={{ marginLeft: '20px' }}>{comment.companyName}</h1>
                    </div>
                    <hr />
                    <h3>{comment.managerName}&nbsp;&nbsp;&nbsp;{comment.managerSurname}</h3>
                    <hr />
                    <p className="comment-text">{comment.comment}</p>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserStoryCard;
