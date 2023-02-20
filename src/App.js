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

  function onSubmit() {
    // console.log(data);
    if (!errors.email.message && !errors.password.message) {
      console.log('Success');
    }
  }

  console.log(watch());

  return (
    <div className='wrapper'>
      <h1>Sign In</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
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
        <p>{errors.email?.message}</p>
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
        <p>{errors.password?.message}</p>
        <div className='button'>
          <input className='' type='submit' />
        </div>
      </form>
    </div>
  );
}

export default App;
