import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Layout from "../components/Layout";
import logo from '../assets/Adiuvare.svg';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="page-content" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div>

          <img
            src={logo}
            alt="Logo Adiuvare"
            style={{ width: '400px', maxWidth: '100%', display: 'block', marginBottom: 40}}
          />
        </div>


        <div style={{ width: '80%', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <Button onClick={() => navigate('/register')} fullWidth>Crear Cuenta</Button>
          <Button onClick={() => navigate('/login')} fullWidth>Iniciar Sesión</Button>
        </div>
      </div>
    </Layout>
  );
}