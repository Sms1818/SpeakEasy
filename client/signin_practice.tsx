import { yupResolver } from "@hookform/resolvers/yup";
import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

interface FormValues{
    username:string,
    name:string
}

export const signin_practice = () => {
    const schema=yup.object().shape({
        username:yup.string().required("Username is required").matches(/^[a-zA-Z0-9_.@$]+$/,"Invalid Username"),
        name:yup.string().required("Name is required")
    });

const onSubmit:SubmitHandler<FormValues>=(data,event)=>{
    event?.preventDefault();
    const {username, name}=data;
    console.log(username,name);

}

    const {register, handleSubmit, formState:{errors}}=useForm<FormValues>({resolver:yupResolver(schema)});
  return (
    <div className='sign-in'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" {...register("username")} />
                {errors.username && (<p style={{color:"red"}}>{errors.username.message}</p>) }
            </div>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" {...register("name")} />
                {errors.name && (<p style={{color:"red"}}>{errors.name.message}</p>) }
            </div>
            <button type="submit">SignIn</button>

        </form>
      
    </div>
  )
}


