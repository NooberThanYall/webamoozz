"use client";
import { signUpSchema } from "../../schemas/FormSchema";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {z} from 'zod';

type Errors = {
  confirm?: string;
  general?: string;
  zod?: string;
};

type State = {
  success: boolean;
  errors: Errors;
  message: string;
};

const initialState: State = {
  success: false,
  errors: {},
  message: "",
};

export const SignUpForm = () => {
  const [state, setState] = useState<State>(initialState);
  const router = useRouter()

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    if (values.password !== values.confirmPassword) {
      setState({ ...state, errors: { confirm: "پسورد ها یکی نیستند!" } });
    }

    try {
      const validated = signUpSchema.parse(values);

      const response = await fetch(
        "/api/account/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validated),
        }
      );
      const res = await response.json();

      if (!res.success) {
        setState({ ...state, errors: res.errors });
      } else {
        setState({ success: true, message: res.message, errors: {} });
        router.replace('/account/login')
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setState({ ...state, errors: { zod: error.message } });
      } else {
        setState({ ...state, errors: { general: 'هه هه هه هه ' } });
      }
    }
  }

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white __className_43c461">
          ثبت نام
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              نام
            </label>
            <input
              type="text"
              name="name"
              required
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-600"
              placeholder="نام شما"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ایمیل
            </label>
            <input
              type="email"
              name="email"
              required
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ایمیل شما"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              پسورد
            </label>
            <input
              type="password"
              name="password"
              required
              id="password"
              placeholder="حداقل 8 کاراکتر"
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              تکرار پسورد
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              placeholder="••••••••"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            {/* <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div> */}
          </div>
          <button
            type="submit"
            className="w-full text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            ثبت نام{" "}
          </button>
          {state.errors.confirm && (
            <p className="text-red-500">{state.errors.confirm}</p>
          )}

          {state.errors.general && (
            <p className="text-red-500">{state.errors.general}</p>
          )}
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            از قبل اکانت داری؟{" "}
            <Link
              href="/account/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              ورود
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
