"use client"
import React, { useState } from 'react';
import { createUSer } from '../actions/createUser';
import { useSession } from 'next-auth/react';

export default function CreateTodo() {
    const [form, setForm] = useState({ title: '', description: '' });
    const[loading, setLoading] = useState(false);
    const[success,setSuccess] = useState("")
    const[error,seterror] = useState("")
    const session = useSession();
    const userID = session.data?.user?.id
    const handleChange = (event:any) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value, 
        }));
       
    };

    const handleSubmit = async (event: React.FormEvent) =>{
        setLoading(true)
        event.preventDefault();
        try{
        const response = await createUSer(form,userID)
        
        if(response.success){
            setSuccess(response.data || "Todo created successfully!")
        }else{
            seterror(response.error || 'An error occurred.')
        }
        setLoading(false)
        console.log("response = ", response)
        }catch(error){
            alert("failed bro")
        }
        
    }
    
    
    return (<div>
        <form onSubmit={handleSubmit}  >
            <label></label>
            <input required className=' border-4' name="title" value={form.title} onChange={handleChange} />
            \\
            <input required className=' border-4' name="description" value={form.description} onChange={handleChange} />
            <button type='submit'>{loading ? "Loading" : "Submit"}</button>
        </form>
        <div>
            {success && <div>{success}</div>}
        </div>
    </div>
    );
    
}
