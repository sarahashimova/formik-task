import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import  "./Formik.css";

const addProductValidationSchema = Yup.object({
    name: Yup.string().required('This field is required!')
    .max(50, 'Name could be max 50 charachters'),
  
    email: Yup.string().required('This field is required!')
      .email('Please enter correct email address')
      .matches(/@code\.edu\.az$/, 'Accepts only emails which finish with @code.edu.az'),
    gender: Yup.string().required('This field is required!'),
  
    password: Yup.string()
      .min(8, 'Must be 8 charachters at least!')
      .required('This field is required!'),
  
    acceptPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passswords must match')
      .required('This field is required!'),
});

function Formikk() {

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          gender: '',
          password: '',
          acceptPassword: '',
        },
        validationSchema: addProductValidationSchema,
        onSubmit: (values) => {
          console.log(values);
          alert('Qeydiyyat uğurla tamamlandı');
        },
      });
    
    
    return (
    <div>
        <form onSubmit={formik.handleSubmit} className="form">
        <div style={{ marginBottom: '20px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
        <input
         className='inputstyle'
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.name}</p>
        )}
        
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>E-mail:</label>
        <input
          className='inputstyle'
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.email}</p>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Gender:</label>
        <div>
          <label>
            <input
              className='inputstyle'
              type="radio"
              name="gender"
              value="female"
              onChange={formik.handleChange}
              checked={formik.values.gender === 'female'}
            />
            Woman
          </label>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={formik.handleChange}
              checked={formik.values.gender === 'male'}
            />
           Man
          </label>
        </div>
        {formik.touched.gender && formik.errors.gender && (
          <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.gender}</p>
        )}
      </div>

        <div>
        <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="password">Password:</label>
        <input
         className='inputstyle'
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password &&
        (
          <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.password}</p>
          )}
          </div>
          <div>
    <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="acceptPassword">Submit Password:</label>
    <input
      className='inputstyle'
      type="password"
      id="acceptPassword"
      name="acceptPassword"
      onChange={formik.handleChange}
      value={formik.values.acceptPassword}
    />
    {formik.touched.acceptPassword && formik.errors.acceptPassword && (
      <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.acceptPassword}</p>
    )}
    </div>

    <div>
    <button style={{
        background: '#4caf50',
        color: 'white',
        border: 'none',
        marginTop:"20px",
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',

      }} className="regisbtn" type="submit">Register</button>
    </div>
</form>
    </div>
  )
}

export default Formikk