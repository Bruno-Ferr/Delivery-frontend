import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";


export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

     const data = {
       username,
       password
     }

     await signIn(data);
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="e-mail" value={username} onChange={e => setUsername(e.target.value)} /> 
        <input type="password" name="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

