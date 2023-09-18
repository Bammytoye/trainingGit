import { useFormik } from 'formik'
import React from 'react'


const Formik = () => {
    const formik = useFormik ({
        initialValues: {
            firstName: '',
            lastName: '',
            email:'',
            password:''
        },

        onSubmit:(values)=> {
            console.log(values);
        },
        validate:(values)=>{
            let errors = {}
            if (!values.firstName){
                errors.firstName ='Required'
            }
            if (!values.lastName) {
                errors.lastName = 'Required';
            }
            if (!values.email) {
                errors.email = 'Required';
            }
            if (!values.password) {
                errors.password = 'Required';
            }
            return errors
        }
        })

// console.log(formik);

    return (
        

        <div>
            <form onSubmit={formik.handleSubmit} className='flex items-center justify-center flex-col my-10 '>
                
                <input type="text" placeholder='firstName' onChange={formik.handleChange} name='firstName'                
                className='rounded-md p-3 border-red-200 border my-2 w-80'/>
                <span>{formik.errors.firstName}</span>

                <input type="text" placeholder='lastName' onChange={formik.handleChange} name='lastName'
                className='rounded-md p-3 border-red-200 border my-2 w-80' />
                <span>{formik.errors.lastName}</span>

                <input type="text" placeholder='email' onChange={formik.handleChange} name='email'                 
                className='rounded-md p-3 border-red-200 border my-2 w-80'/>
                <span>{formik.errors.email}</span>

                <input type="text" placeholder='password' onChange={formik.handleChange} name='password'                  
                className='rounded-md p-3 border-red-200 border my-2 w-80'/>
                <span>{formik.errors.password}</span>

                <button type='submit' className='px-20 p-3 rounded-md bg-green-900 text-white my-5 w-80'>Sign 
                Up</button>
            </form>
        </div>
    )
}

export default Formik