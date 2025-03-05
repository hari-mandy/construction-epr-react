import React, { useState } from 'react'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    if (response.ok) {
      setFormData(
        {
          name: '',
          username: '',
          email: '',
          password: '',
        }
    )
    } else {
      // Handle error
      console.error('Error submitting data:', response.status);
    }
    } catch (error) {
      console.error('Network error:', error);
    }
  }


  return (
    <div className='registration-form-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id='name' name='name' value={formData.name} onChange={handleChange}/>
          <label htmlFor="user-name">User Name</label>
          <input type="text" name='username' value={formData.username} onChange={handleChange}/>
          <label htmlFor="email">Email</label>
          <input type="email" name='email'value={formData.email} onChange={handleChange}/>
          <label htmlFor="password">Password</label>
          <input type="password" name='password'value={formData.password} onChange={handleChange}/>
          <input type='submit' value='save'/>
        </form>
    </div>
  )
}

export default RegistrationForm
