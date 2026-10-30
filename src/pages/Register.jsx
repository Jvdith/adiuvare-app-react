import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Layout from "../components/Layout";

export default function Register() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success) {
    return (
      <Layout>
        <div className="page-content" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
            Crear una cuenta<br />
          </h2>
          <div style={{ border: '2px solid var(--yellow)', borderRadius: '12px', padding: '20px', width: '100%', textAlign: 'center', marginBottom: '30px', backgroundColor: 'var(--yellow)' }}>
            <p style={{ color: '#1a1a1a', fontWeight: 'bold' }}>Cuenta registrada con éxito</p>
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

  return (
    <Layout>
      <div className="page-content">
        <button className="header-back" onClick={() => navigate('/')}>←</button>

        <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '50px' }}>
          <h2>Crear cuenta</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
            <span>Asociación</span> | <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Voluntario</span>
          </div>
        </div>

        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Input label="Nombre Completo" required placeholder="Ej: Judith Santana" />
          <Input label="Correo electrónico" type="email" required placeholder="example@gmail.com" />
          <Input label="Contraseña" type="password" required placeholder="Mínimo 8 caracteres..." />

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', margin: '15px 0', fontSize: '12px' }}>
            <input type="checkbox" required style={{ accentColor: 'var(--primary)' }} />
            <label>Acepto los términos y políticas de privacidad</label>
          </div>

          
          <div style={{ width: '80%', margin: '0 auto' }}>
            <Button type="submit" fullWidth>Registrarme</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}