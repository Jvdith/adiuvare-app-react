import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Layout from "../components/Layout";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="page-content" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: '60px', color: 'var(--primary)' }}>404</h1>
        <h2 style={{ marginBottom: '20px' }}>Error: Página no encontrada</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>La ruta no existe.</p>
        <Button onClick={() => navigate('/home')} fullWidth>Volver al Inicio</Button>
      </div>
    </Layout>
  );
}