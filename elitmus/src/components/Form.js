import React,{useEffect} from 'react'
import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => {console.log(data);window.open("http://localhost:3000/Live");
    console.log(errors);}

    // video link : https://www.youtube.com/watch?v=FY8sXCsjvf8&t=30s
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Enter Your Details</h2>
                {/* <span>register and enjoy the service</span> */}

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username",{ required : true })} placeholder='Enter Your Name' />
                    <input type="email" {...register("email",{ required : true })} placeholder='Enter Your Email' />
                    <input type="number" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Enter Your Mobile Number' />
                    <input type="text" {...register("code",{ required : true })} placeholder='Enter invitation Code' />
                    {errors.username?.type === "required" && "User Name Required" }
                    {errors.email?.type === "required" && "Email Required"}
                    {errors.code?.type === "required" && "Invitation code required"}
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign up</button>
                </form>

            </div>
            
        </div>
    </section>
  )
}