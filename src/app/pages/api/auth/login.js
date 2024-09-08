import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

let users = []; // Aquí puedes conectar a una base de datos en producción

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ username: user.username }, 'secret', { expiresIn: '1h' });

    return res.status(200).json({ token });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Método ${req.method} no permitido`);
}