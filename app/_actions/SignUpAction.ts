"use server"
import { signUpSchema } from "../schemas/FormSchema";



export type InitialState = {
    success: boolean,
    errors: object,
    message: string
  }

export async function signUpAction (state: InitialState,  formData: FormData) {
    const values = Object.fromEntries(formData.entries());

    

    try {
        const validated = signUpSchema.parse(values);

        const response = await fetch('http://127.0.0.1:3000/api/account/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(validated)
        });
        const res = await response.json();
        
        if(!res.success) return {...state, errors : {...res.errors}, success: false}

        return {...state, message: res.message, success: true}
    } catch (err) {
        return {...state, errors: {err}, success: false}

    }

    
}