import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './permit.css'

interface User {
  name: string;
  birthday: string;
  imageUrl: string;
}

const users: User[] = [
  {
    name: 'Esma Keseroğlu',
    birthday: '18 Kas',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyFsM0LnuyBRZMAYvng35vQ5-3DyfpSDgCw&s'
  },
  {
    name: 'Hasan Şahin',
    birthday: '9 Ara',
    imageUrl: 'https://media.istockphoto.com/id/1200677760/tr/foto%C4%9Fraf/kollar%C4%B1n%C4%B1-%C3%A7apraz-yak%C4%B1%C5%9F%C4%B1kl%C4%B1-g%C3%BCl%C3%BCmseyen-gen%C3%A7-adam-portresi.jpg?s=612x612&w=0&k=20&c=incIgsW-_4RQbbsb2353unL9I4K2fUObc4qULsZrtuc=',
  },
  {
    name: 'Zeynep Kaya',
    birthday: '27 Ara',
    imageUrl: 'https://www.ikbahcesi.com/wp-content/uploads/2023/01/calisan-kadin-ulkede-i%C5%9F-yerinde.jpg',
  },
];
function BirtdayCard() {
  return (
    <>
      <div className="card birthday-card shadow">
        <div className="card-header">
        <i className="fa-solid fa-cake-candles"></i>   Yaklaşan Doğum Günleri
        </div>
        <ul className="list-group list-group-flush">
          {users.map((user, index) => (
            <li className="list-group-item" key={index}>
              <img src={user.imageUrl} alt={user.name} />
              <a href="#">{user.name}</a>
              <span>{user.birthday}</span>
            </li>
          ))}
        </ul>
      </div>


    </>
  )
}

export default BirtdayCard