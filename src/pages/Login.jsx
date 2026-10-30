import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Layout from "../components/Layout";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle'); 

  const handleLogin = (e) => {
    e.preventDefault();
   
    if (!email || !password) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <Layout>
        <div className="page-content" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ border: '2px solid var(--border-color)', borderRadius: '12px', padding: '30px', width: '80%', textAlign: 'center', marginBottom: '50px' }}>
            <p style={{ color: 'var(--green)', fontWeight: 'bold' }}>Has iniciado sesión</p>
          </div>
          <div style={{ width: '80%', margin: '0 auto' }}>
            <Button onClick={() => navigate('/home')} variant="success" fullWidth>
              Ir al Inicio
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  if (status === 'error') {
    return (
      <Layout>
        <div className="page-content" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
            ¡Hola de nuevo!<br />Inicia sesión para continuar
          </h2>
          <div style={{ border: '2px solid var(--red)', borderRadius: '12px', padding: '20px', width: '100%', textAlign: 'center', marginBottom: '30px' }}>
            <p style={{ color: 'var(--red)', fontWeight: 'bold' }}>Error: se ha perdido la conexión</p>
          </div>
          <Button onClick={() => setStatus('idle')} variant="primary" fullWidth>
            Reintentar
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="page-content">
        <button className="header-back" onClick={() => navigate('/')}>←</button>

        <h2 style={{ textAlign: 'center', marginBottom: '30px', marginTop: '50px', fontSize: '20px' }}>
          ¡Hola de nuevo!<br />Inicia sesión para continuar
        </h2>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="example@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Contraseña"
            type="password"
            placeholder="Mínimo 8 caracteres..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div style={{ width: '80%', margin: '20px auto 0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Button type="submit" fullWidth>Iniciar Sesión</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}