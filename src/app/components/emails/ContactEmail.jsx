
import { Html, Head, Preview, Section, Text } from '@react-email/components';

export default function ContactEmail({ name, email, message }) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de contacto</Preview>
      <Section style={{ background: '#f4f8fb', padding: '32px', borderRadius: '12px', fontFamily: 'Arial, sans-serif', color: '#222' }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#316aa8', marginBottom: 12 }}>Nuevo mensaje de contacto</Text>
        <Text><strong>Nombre:</strong> {name}</Text>
        <Text><strong>Email:</strong> {email}</Text>
        <Text><strong>Mensaje:</strong></Text>
        <Text style={{ background: '#fff', padding: '12px', borderRadius: '8px', color: '#333' }}>{message}</Text>
      </Section>
    </Html>
  );
}
