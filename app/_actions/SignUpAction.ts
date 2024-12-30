'use server'
export async function signUpAction (prevState, formData: FormData) {
    const values = Object.fromEntries(formData);

    console.log(values)
    
}