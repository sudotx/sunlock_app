import React from 'react'
import { useForm } from 'react-hook-form';


const FormContext = React.createContext<any>(null)

function Form({ children, onSubmit }: { children: React.ReactNode, onSubmit: any }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <FormContext.Provider value={{ register }}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                {children}
            </form>
        </FormContext.Provider>
    )
}

Form.Input = function FormInput({ name, ...rest }: { name: string, [key: string]: any }) {
    const { register } = useFormContext()
    return (
        <input {...register(name)} {...rest} className='p-2 border rounded-md' />
    )
}

const useFormContext = () => {
    if (!React.useContext(FormContext)) {
        throw new Error('useFormContext must be used within a FormContext')
    }
    return React.useContext(FormContext)
}

export default Form