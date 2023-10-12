import React from 'react';
import SignInForm from '~/components/Form/SignInForm';

function SignInPage() {
  return (
    <section>
      <h1 className="m-0 text-5xl font-bold text-primary text-center">Bookstore</h1>
      <div className="mt-6">
        <SignInForm />
      </div>
    </section>
  );
}

export default SignInPage;
