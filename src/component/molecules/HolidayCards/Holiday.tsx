import React, { useState, useEffect } from 'react';
import './permit.css';

interface Holiday {
  date: string;
  localName: string;
}

function Holiday() {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // API'den tatil günlerini çekme
    const fetchHolidays = async () => {
      try {
        const response2024 = await fetch('https://date.nager.at/Api/v2/PublicHolidays/2024/TR');
        const data2024 = await response2024.json();

        const response2025 = await fetch('https://date.nager.at/Api/v2/PublicHolidays/2025/TR');
        const data2025 = await response2025.json();

        // Bugünün tarihini al
        const today = new Date();
        const todayString = today.toISOString().split('T')[0]; // YYYY-MM-DD formatında

        // 2024 ve 2025 yıllarındaki tatil günlerini birleştir
        const allHolidays = [...data2024, ...data2025];

        // Bugünden sonraki tatil günlerini filtrele
        const upcomingHolidays = allHolidays.filter((holiday: Holiday) => holiday.date > todayString);
        setHolidays(upcomingHolidays);
      } catch (error) {
        setError('Tatil günleri alınırken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="card holiday-card shadow ">
      <div className="card-header">
        <i className='bx bxs-plane-alt bx-flashing'></i> Resmi Tatiller
      </div>
      <ul className="list-group list-group-flush">
        {holidays.map((holiday, index) => (
          <li className="list-group-item" key={index}>
            <a href="#">{holiday.localName}</a>
            <span>{holiday.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Holiday;
