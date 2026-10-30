import './Input.css';

export default function Input({ label, type = 'text', placeholder, value, onChange, required, error }) {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label} {required && <span style={{color: 'var(--red)'}}>*</span>}</label>}
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        required={required}
        className={`input-field ${error ? 'input-error' : ''}`}
      />
      {error && <span className="error-message" aria-live="polite">{error}</span>}
    </div>
  );
}