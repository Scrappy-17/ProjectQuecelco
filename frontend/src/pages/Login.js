import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../css/login.css'
import { Link } from 'react-router-dom'

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required')
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: values => {
      // Connect to your backend here
    },
  });

  return (
    <div className='box-login'>
      <div className='input-box-login'>
        <form onSubmit={formik.handleSubmit}>
          <div className='input-email'>
            <label htmlFor='email'> Email </label>
            <input id='email' type="email" placeholder='Enter Email' {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
          <div className='input-password'>
            <label htmlFor='password'> Password </label>
            <input id='password' type="password" placeholder='Enter Password' {...formik.getFieldProps('password')}/>
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/Signup">Register</Link></p>
      </div>
    </div>
  )
}

export default Login;