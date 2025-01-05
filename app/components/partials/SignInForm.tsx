"use client";
import { logInSchema } from "@/app/schemas/FormSchema";
import React, { useState } from "react";
import { encrypt } from "@/lib/auth/jwt";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    try {
      // Validate inputs
      const validated = logInSchema.parse(values);

      // Send login request
      const req = await fetch("/api/account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validated),
      });

      if (!req.ok) {
        throw new Error("Login failed. Please try again.");
      }

      const res = await req.json();

      // Handle unsuccessful login
      if (!res.success) {
        setError(res.message);
        return;
      }

      // Encrypt user data and set the session cookie
      const token = await encrypt(res.user);
      document.cookie = `session=${token}; path=/; Secure; SameSite=Strict;`;

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
          ورود
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ایمیل
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ایمیل شما"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              پسورد
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-green-400 hover:bg-green-600 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            ورود
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            اکانت نداری؟{" "}
            <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
              ثبت نام
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
