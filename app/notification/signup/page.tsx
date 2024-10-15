"use client";
import { useState, useEffect } from 'react';
import { signupNotification } from '../route';

const NotificationSignup = () => {
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [message, setMessage] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Vérifier les préférences de thème de l'utilisateur
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkTheme(prefersDark);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('numero', numero);

    const result = await signupNotification(formData);

    if (result.status) {
      setMessage('Inscription réussie !');
    } else {
      setMessage(result.errorMessage || 'Erreur lors de l\'inscription.');
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: isDarkTheme ? '#121212' : '#f1f1f1',
      color: isDarkTheme ? '#ffffff' : '#333333'
    }}>
      <h2 style={{ textAlign: 'center' }}>Inscription aux notifications</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '14px' }}>
            Email :
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginTop: '5px',
                backgroundColor: isDarkTheme ? '#424242' : '#ffffff',
                color: isDarkTheme ? '#ffffff' : '#000000',
              }}
              placeholder="Entrer votre email"
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '14px' }}>
            Numéro:
            <input
              type="tel" // Utiliser le type 'tel' pour le numéro de téléphone
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginTop: '5px',
                backgroundColor: isDarkTheme ? '#424242' : '#ffffff',
                color: isDarkTheme ? '#ffffff' : '#000000',
              }}
              placeholder="Entrer votre numéro"
              required
            />
          </label>
        </div>
        <button type="submit" style={{
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}>S'inscrire</button>
      </form>
      {message && <p style={{ marginTop: '15px', fontSize: '14px' }}>{message}</p>}
    </div>
  );
};

export default NotificationSignup;

