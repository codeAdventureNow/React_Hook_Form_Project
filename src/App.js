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

  console.log(watch());

  return (
    <div className='wrapper'>
      <h1>Sign In</h1>
      <form
        className='form'
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register('email', {
            required: 'This is required.',
            pattern: /\S+@\S+\.\S+/,
            message: 'Entered value does not match email format',
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
