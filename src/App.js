import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data) {
    register(data.email(''));
  }

  console.log(watch());

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
          <p className='message'>{errors.email?.message}</p>
          <label>
            <p>Password: </p>
            <input
              {...register('password', {
                required: 'This is required.',
                minLength: {
                  value: 4,
                  message: 'Password must be 5 characters or more.',
                },
              })}
              placeholder='Password'
            />
          </label>
          <p className='message'>{errors.password?.message}</p>
        </div>
        <div className='button'>
          <button type='submit'>Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default App;
