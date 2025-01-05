'use client'
import { logInSchema } from '@/app/schemas/FormSchema';
import React, { ReactEventHandler, useState } from 'react'

const SignInForm = () => {

  const [error, setError] = useState('');

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries())
    
    try {
      
      
      const validated = logInSchema.parse(values);

      const req = await fetch('/api/account/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(validated)
      });

      const res = await req.json()
      
      if(!res.success) {
        setError(res.message)
      } else {
        


      }
      

    } catch (err) {
      setError(err.message)
    } finally{
    }


  }


  return (
    <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white __className_43c461">
            ورود
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ایمیل شما" />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">پسورد</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                </div>
            </div>
            <button type="submit" className={`w-full text-white bg-green-400 hover:bg-green-600  outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${loading ? 'bg-green-100': null}`}
            disabled={loading}
            >ورود</button>
            {error && (
            <p className="text-red-500">{error}</p>
          )}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
             اکانت نداری؟ <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">ثبت نام</a>
            </p>
        </form>
    </div>
</div>
  )
}

export default SignInForm