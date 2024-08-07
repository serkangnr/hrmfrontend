import React from 'react'
import './permit.css'

interface UserCardProps {
    name: string;
    imageUrl: string;
    birthDate: string;
    startDate: string;
    position: string;
    cardLink1: string;
    cardLink2: string;
  }
function UserCard(props: UserCardProps) {
    const { name, imageUrl,birthDate, startDate, position, cardLink1, cardLink2 } = props;
    return (
        <div className="card user-card shadow" >
          <img src={imageUrl} className="card-img-top" alt={`${name}'s picture`} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"></p>
          </div>
          <ul className="list-group list-group-flush">
          <li className="list-group-item">Dogum Tarihi: {birthDate}</li>
            <li className="list-group-item">İşe Başlama: {startDate}</li>
            <li className="list-group-item">Görev: {position}</li>
          </ul>
          <div className="card-body">
            <a href={cardLink1} className="card-link">
              Card link
            </a>
            <a href={cardLink2} className="card-link">
              Another link
            </a>
          </div>
        </div>
      );
    }
    

export default UserCard;