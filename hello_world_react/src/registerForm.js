
import React from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import './App.css';

const RegisterForm = () => {
  const { register, handleSubmit,watch, formState: { errors } } = useForm();

  // O método watch monitora o valor do campo "password"
  const senha = watch("password", "");
  
  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert(`Form submitted:\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Nome do Utilizador:</label>
          <input
            type="text"
            id="username"
            name="username"
            {...register("username", {
              required: "O Nome do Utilizador é obrigatório.",
              maxLength: {
                value: 50,
                message: "O campo precisa ter no máximo 50 caracteres."
              }
            })}
          />
          <ErrorMessage errors={errors} name="username"  render={({ message }) => <span className="error-message">{message}</span>} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: "Email é obrigatório.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Digite um email válido."
              }
            })}
          />
          <ErrorMessage errors={errors} name="email"  render={({ message }) => <span className="error-message">{message}</span>} />
        </div>
        <div>
          <label htmlFor="password">Palavra-Passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "Palavra-passe é obrigatória.",
              minLength: {
                value: 8,
                message: "A palavra-passe deve ter pelo menos 8 caracteres."
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                message: "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
              }
            })}
          />
          <ErrorMessage errors={errors} name="password"  render={({ message }) => <span className="error-message">{message}</span>}/>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar Palavra-Passe:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "A confirmação da palavra-passe é obrigatória.",
              validate: (value) =>
                value === senha || "As palavras-passes não correspondem."
            })}
          />
          <ErrorMessage errors={errors} name="confirmPassword" render={({ message }) => (<span className="error-message">{message}</span> )}/>
        </div>
        <div>
          <label htmlFor="databirth">Data de Nascimento:</label>
          <input
            type="date"
            id="databirth"
            name="databirth"
            {...register("databirth", {
              required: "Data de nascimento é obrigatória."
            })}
          />
          <ErrorMessage errors={errors} name="databirth"  render={({ message }) => <span className="error-message">{message}</span>} />
        </div>
        <button type="submit" className='mybutton'>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;

/*
import React, { useState } from 'react';
import  { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import './App.css';

const RegisterForm = () => {
  const { register, errors  } = useForm();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    databirth: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Form submitted:', formData)
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            ref={ register({
              required: "O campo precisa ter no máximo 20 caracteres.",
              maxLength: 20
            })}
          />
          <ErrorMessage errors = { errors } name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: "red" }}>
          *Email* is mandatory </span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bithday">Date of Birth:</label>
          <input
            type="data"
            id="databirth"
            name="databirth"
            value={formData.databirth}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
*/