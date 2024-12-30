import { z } from 'zod'

export const signUpSchema = z.object({
//   username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('ایمیل نادرست!'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const signInSchema = z.object({
  email: z.string().email('ایمیل نادرست!'),
  password: z.string().min(1, 'Password is required'),
})

