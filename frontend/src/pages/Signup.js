import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../css/signup.css'
import { Link } from 'react-router-dom'

const validationSchema = Yup.object({
  firstname: Yup.string().required('First Name is required'),
  lastname: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  contact: Yup.string().required('Contact is required'),
  password: Yup.string().required('Password is required')
});

function Signup() {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      contact: '',
      password: ''
    },
    validationSchema,
    onSubmit: values => {
      // Connect to your backend here
    },
  });

  return (
    <div className='box-register'>
      <div className='input-box-register'>
        <form onSubmit={formik.handleSubmit}>
          <div className='input-firstname'>
            <label htmlFor='firstname'> First Name </label>
            <input id='firstname' type="text" placeholder='Enter First Name' {...formik.getFieldProps('firstname')}/>
            {formik.touched.firstname && formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}
          </div>
          <div className='input-lastname'>
            <label htmlFor='lastname'> Last Name </label>
            <input id='lastname' type="text" placeholder='Enter Last Name' {...formik.getFieldProps('lastname')}/>
            {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
          </div>
          <div className='input-email'>
            <label htmlFor='email'> Email </label>
            <input id='email' type="email" placeholder='Enter Email' {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
          <div className='input-contact'>
            <label htmlFor='contact'> Contact </label>
            <input id='contact' type="text" placeholder='Enter Contact' {...formik.getFieldProps('contact')}/>
            {formik.touched.contact && formik.errors.contact ? <div>{formik.errors.contact}</div> : null}
          </div>
          <div className='input-password'>
            <label htmlFor='password'> Password </label>
            <input id='password' type="password" placeholder='Enter Password' {...formik.getFieldProps('password')}/>
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
          </div>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  )
}

export default Signup;