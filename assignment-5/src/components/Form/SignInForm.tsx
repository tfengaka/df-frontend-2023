'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthContext } from '~/context/AuthContext';
import { FormSignInSchema, FormSignInType } from '~/validations/schema';
import Button from '../Button';
import FormInput from './FormInput';

function SignInForm() {
  const router = useRouter();
  const { signIn } = useAuthContext();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormSignInType>({
    resolver: zodResolver(FormSignInSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormSignInType> = async (form) => {
    try {
      const user = await signIn(form);
      localStorage.setItem('user', JSON.stringify(user));
      router.replace('/');
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-center',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center w-full">
        <FormInput
          control={control}
          name="email"
          title="Email"
          required
          errors={errors.email?.message}
          placeholder="Enter your email"
        />
        <FormInput
          control={control}
          type="password"
          name="password"
          title="Password"
          placeholder="Enter your password"
          required
          errors={errors.password?.message}
        />
        <Button type="submit" className="bg-primary text-white w-full px-4 py-3 mt-4">
          Login
        </Button>
      </div>
    </form>
  );
}

export default SignInForm;
