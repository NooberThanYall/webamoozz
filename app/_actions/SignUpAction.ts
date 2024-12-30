'use server'
export async function signUpAction (  formData: FormData) {
    const values = Object.fromEntries(formData);

    console.log(values)
    
}