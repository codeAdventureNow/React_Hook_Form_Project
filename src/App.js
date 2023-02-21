import './App.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        email: '',
        password: '',
      });
      setSuccessMessage('Sign In Successful!');
    }
  }, [formState, reset]);

  function onSubmit(data) {
    console.log(data);
    console.log(watch());
  }

  // console.log(watch());

  return (
    <div className='wrapper'>
      <h1>React Hook Form</h1>

      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='inputs'>
          <label>
            <p>Email: </p>
            <input
              {...register('email', {
                required: 'This is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Please enter a valid email.',
                },
              })}
              placeholder='Email'
            />
          </label>
          <p className='errorMessage'>{errors.email?.message}</p>
          <label>
            <p>Password: </p>
            <input
              {...register('password', {
                required: 'This is required.',
                minLength: {
                  value: 5,
                  message: 'Password must be 5 characters or more.',
                },
              })}
              placeholder='Password'
            />
          </label>
          <p className='errorMessage'>{errors.password?.message}</p>
        </div>
        <div className='button'>
          <button type='submit'>Sign In</button>
        </div>
      </form>
      <div className='message'>
        <p>{successMessage}</p>
      </div>
    </div>
  );
}

export default App;
