import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Layout from "../components/Layout";
import logomenu from '../assets/Adiuvare_Menu.svg';


import account_circle from '../assets/account_circle.svg';
import dark_mode from '../assets/dark_mode.svg';
import notifications from '../assets/notifications.svg';
import favorite from '../assets/favorite.svg';
import search from '../assets/search.svg';
import front_hand from '../assets/front_hand.svg';


import account_circle_white from '../assets/account_circle_white.svg';
import light_mode_white from '../assets/light_mode_white.svg';
import notifications_white from '../assets/notifications_white.svg';
import favorite_white from '../assets/favorite_white.svg';
import search_white from '../assets/search_white.svg';
import front_hand_white from '../assets/front_hand_white.svg';

export default function Home() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === 'light';

  const events = [
    { id: 1, title: 'Recogida de alimentos', date: 'Sábado 14 Diciembre 12:00', loc: 'C/ Callecita Numero 8 Las Palmas' },
    { id: 2, title: 'Paseo de perros', date: 'Domingo 15 Diciembre 13:00', loc: 'C/ Calle Street Numero 9 Las Palmas' },
    { id: 3, title: 'Charla Salud Mental', date: 'Lunes 16 Diciembre 14:00', loc: 'C/ Calle De Ejemplo Numero 10 Las Palmas' }
  ];

  return (
    <Layout>
      <div className="page-content">
      
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src={logomenu}
            alt="Logo Adiuvare"
            style={{ width: '100px', maxWidth: '100%', display: 'block', marginTop: '10px', filter: isLight ? 'none' : 'brightness(0) invert(1)' }}
          />
          <div style={{ display: 'flex', gap: '15px' }}>
            
            
            <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: '10px' }}>
              {isLight ? (
                <img src={dark_mode} alt="Activar modo oscuro" style={{ width: '24px', height: '24px', display: 'block' }} />
              ) : (
                <img src={light_mode_white} alt="Activar modo claro" style={{ width: '24px', height: '24px', display: 'block' }} />
              )}
            </button>

           
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '10px' }}>
              <img 
                src={isLight ? notifications : notifications_white} 
                alt="Notificaciones" 
                style={{ width: '24px', height: '24px', display: 'block' }} 
              />
            </div>
          </div>
        </div>

        
        <div style={{ backgroundColor: 'var(--input-bg)', padding: '12px 16px', borderRadius: '20px', marginBottom: '20px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src={isLight ? search : search_white} 
            alt="Buscar" 
            style={{ width: '18px', height: '18px', display: 'block' }} 
          />
          <span style={{ fontSize: '14px' }}>Buscar Asociaciones...</span>
        </div>

       
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Categorías</h3>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '5px' }}>
          <button className="category-pill">Animales</button>
          <button className="category-pill">Salud</button>
          <button className="category-pill">Comida</button>
        </div>

     
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Te puede interesar</h3>
        {events.map(event => (
          <div key={event.id} className="event-card" onClick={() => navigate(`/event/${event.id}`)} style={{ cursor: 'pointer' }}>
            <h4 style={{ marginBottom: '5px' }}>{event.title}</h4>
            <p style={{ fontSize: '12px' }}>{event.date}</p>
            <p style={{ fontSize: '12px', marginBottom: '10px' }}>{event.loc}</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right' }}>Apuntarme +</p>
          </div>
        ))}

       
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-around', padding: '20px 0', borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)', position: 'sticky', bottom: '0' }}>
          
          <div onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
            <img 
              src={isLight ? front_hand : front_hand_white} 
              alt="Inicio" 
              style={{ width: '24px', height: '24px', display: 'block' }} 
            />
          </div>

          <div style={{ cursor: 'pointer' }}>
            <img 
              src={isLight ? search : search_white} 
              alt="Buscar" 
              style={{ width: '24px', height: '24px', display: 'block' }} 
            />
          </div>

          <div style={{ cursor: 'pointer' }}>
            <img 
              src={isLight ? favorite : favorite_white} 
              alt="Favoritos" 
              style={{ width: '24px', height: '24px', display: 'block' }} 
            />
          </div>

          <div onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
            <img 
              src={isLight ? account_circle : account_circle_white} 
              alt="Mi perfil" 
              style={{ width: '24px', height: '24px', display: 'block' }} 
            />
          </div>

        </div>
      </div>
    </Layout>
  );
}