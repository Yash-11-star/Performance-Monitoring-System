import React, { useState } from 'react';
import { auth } from '../firebase';

const SignUp = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Assign a role to the user (admin or employee)
      await db.collection('users').doc(user.uid).set({
        role: 'employee', // Change to 'admin' if needed
      });

      alert('Sign Up successful!');
      history.push('/login');
    } catch (error) {
      console.error(error);
      alert('Sign Up failed. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;