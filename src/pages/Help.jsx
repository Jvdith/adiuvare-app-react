import { useNavigate } from 'react-router-dom';
import Layout from "../components/Layout";

export default function Help() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="page-content">
        <button className="header-back" onClick={() => navigate(-1)}>←</button>

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2>Ayuda y Contacto</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '5px' }}>
            ¿En qué podemos ayudarte?
          </p>
        </div>

        <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Preguntas Frecuentes</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
          <details style={{ backgroundColor: 'var(--input-bg)', padding: '15px', borderRadius: '12px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text-color)' }}>
              ¿Cómo me apunto a un evento?
            </summary>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '10px', lineHeight: '1.5' }}>
              Ve a la pantalla de Inicio, busca el evento que te interese y pulsa en "Apuntarme +". Rellena tus datos y confirma la asistencia.
            </p>
          </details>

          <details style={{ backgroundColor: 'var(--input-bg)', padding: '15px', borderRadius: '12px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text-color)' }}>
              ¿Puedo cancelar mi inscripción?
            </summary>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '10px', lineHeight: '1.5' }}>
              Sí. Desde tu perfil, en el apartado "Mis inscripciones", puedes gestionar y cancelar tu plaza si finalmente no puedes asistir.
            </p>
          </details>

          <details style={{ backgroundColor: 'var(--input-bg)', padding: '15px', borderRadius: '12px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text-color)' }}>
              ¿Cómo funciona el Modo Oscuro?
            </summary>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '10px', lineHeight: '1.5' }}>
              Puedes activarlo desde el icono de la luna en el Inicio, o desde el interruptor en tu pantalla de Perfil. La app recordará tu preferencia.
            </p>
          </details>
        </div>

        
        <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Contacto</h3>
        <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '15px', marginBottom: '30px' }}>
          <p style={{ fontSize: '14px', marginBottom: '8px' }}>soporte@adiuvare.com</p>
          <p style={{ fontSize: '14px' }}>+34 600 000 000</p>
        </div>

      </div>
    </Layout>
  );
}