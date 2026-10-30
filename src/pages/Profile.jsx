import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import avatar from '../assets/generic_avatar.svg';

export default function Profile() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="page-content">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <button className="header-back" onClick={() => navigate('/home')} style={{ marginBottom: 0 }}>←</button>
        <h3 style={{ flex: 1, textAlign: 'center', marginRight: '24px' }}>Mi Perfil</h3>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>

        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', margin: '0 auto 10px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
          <img
            src={avatar}
            alt="Avatar de perfil"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <p style={{ fontWeight: 'bold', color: 'var(--text-color)' }}>Judith</p>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>judith@gmail.com</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-color)' }}>
        <p style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>Mis inscripciones</p>
        <p style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>Favoritos</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
          <span>Modo Oscuro</span>
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
        </div>
        <Link
          to="/help"
          style={{
            color: 'var(--primary)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '10px',
            display: 'block'
          }}
        >
          Ayuda y Contacto
        </Link>
      </div>

      <div style={{ width: '50%', margin: '30px auto 0 auto', marginTop: '50px' }}>
        <Button variant="danger" fullWidth onClick={() => navigate('/')}>
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}