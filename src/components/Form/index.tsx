import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import Container from './styles';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const phoneNumber = '+5581995773197'; // Replace with your WhatsApp number

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // Validate form fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Por favor, preencha todos os campos.', {
        style: {
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      });
      return;
    }

    const formattedMessage = `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`;

    const emailData = {
      from_name: name,
      to_email: email,
      message: formattedMessage,
    };

    try {
      toast.success(
        'Dados enviados com sucesso! Uma cópia foi enviada para o seu e-mail.'
      );
      window.location.href = `https://wa.me/${phoneNumber}?${formattedMessage}`; // Redirect to WhatsApp
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Erro ao enviar os dados. Tente novamente mais tarde.');
    }
  }

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <textarea
          placeholder="Mensagem"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
