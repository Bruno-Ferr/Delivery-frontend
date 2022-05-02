import { FormEvent, useState } from "react";


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

     const data = {
       email,
       password
     }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

