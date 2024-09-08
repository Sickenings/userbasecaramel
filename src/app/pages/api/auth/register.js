import bcrypt from 'bcryptjs';

let users = []; // Aquí puedes conectar a una base de datos en producción

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.status(400).json({ message: 'Usuario ya existe' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Guardar el nuevo usuario
    users.push({ username, password: hashedPassword });
    return res.status(201).json({ message: 'Usuario registrado' });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Método ${req.method} no permitido`);
}