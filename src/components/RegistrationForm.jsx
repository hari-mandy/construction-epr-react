import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    profile_img: '',
    name: '',
    email: '',
    dateofbirth: '',
    permanent_address: '',
    postal_code: '',
    username: '',
    password: '',
    present_address: '',
    city: '',
    country: '',
  });
  const [usernameerror, setUserNameError] =useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevFormData) => ({
        ...prevFormData,
        profile_img: imageUrl,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Replace plain password with the hashed one
      const hashedPassword = await bcrypt.hash(formData.password, 10);
      const updatedFormData = { ...formData, password: hashedPassword };

      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        setFormData(
          {
            profile_img: '',
            name: '',
            email: '',
            dateofbirth: '',
            permanent_address: '',
            postal_code: '',
            username: '',
            password: '',
            present_address: '',
            city: '',
            country: '',
          }
      )
      } else {
        console.error('Error submitting data:', response.status);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const checkUserName = (e) => {
    const tagetvalue = e.target.value;
    const validateUser = async(tagetvalue) => {
      try {
        const response = await fetch(`http://localhost:3001/check-username?username=${tagetvalue}`);
        const data = await response.json();
        data.isUnique ? setUserNameError('') : setUserNameError(" *User Name is already taken*");
      } catch (error) {
        console.log('Error checking username');
      }
    }
    validateUser(tagetvalue);
  }

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit}>
        <div className="registration-form-container">
          <div className="form-column">
            <div className="field-profile">
              {formData.profile_img && (
                <img src={formData.profile_img} alt="Profile Preview" width="100%" height="100%" />
              )}
              <input type="file" name="profile_img" accept="image/*" onChange={handleImageChange} />
            </div>
          </div>
          <div className="form-column">
            <div className="name-field">
              <label htmlFor="name">First Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="email-field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="dob-field">
              <label htmlFor="dateofbirth">Date of Birth</label>
              <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
            </div>
            <div className="permanent-address-field">
              <label htmlFor="permanent_address">Permanent Address</label>
              <input type="text" name="permanent_address" value={formData.permanent_address} onChange={handleChange} />
            </div>
            <div className="postal-code-field">
              <label htmlFor="postal_code">Postal Code</label>
              <input type="text" name="postal_code" value={formData.postal_code} onChange={handleChange} />
            </div>
          </div>
          <div className="form-column">
            <div className="user-name-field">
              <label htmlFor="username">User Name</label><span className='error-mes'>{usernameerror}</span>
              <input type="text" name="username" value={formData.username} onChange={handleChange} onBlur={checkUserName}/>
            </div>
            <div className="password-field">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="present-address-field">
              <label htmlFor="present_address">Present Address</label>
              <input type="text" name="present_address" value={formData.present_address} onChange={handleChange} />
            </div>
            <div className="city-field">
              <label htmlFor="city">City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </div>
            <div className="country">
              <label htmlFor="country">Country</label>
              <input type="text" name="country" value={formData.country} onChange={handleChange} />
            </div>
            <div className="submit-btn-container">
              <input type="submit" value="Save" className="primary-btn" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
