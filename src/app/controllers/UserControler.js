import passwordGenerator from 'password-generator';
import Queue from '../lib/Queue';

export default {
    async store(req, res) {
      const { name, email } = req.body;
  
      const user = {
        name,
        email,
        password: passwordGenerator(15, false), // Senha de 15 caracteres e false para a senha não se repetir
      };
  
      await Queue.add('RegistrationMail', { user });
  
      return res.json(user);
    }
  };