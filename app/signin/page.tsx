"use client"

import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    async function handleSub() {
        if (!email || !pass) {
            return
        }
        const result = await signIn("credentials", {
            email: email,
            password: pass,
            redirect: false,

        })
        if (result?.error) {
            setError(result.error)
        } else {
            router.push("/")
        }

    }
    return (
        <div>
            <input onChange={(e) => {
                setEmail(e.target.value)
            }} placeholder="Email" className="bg-slate-200" />
            <input onChange={(e) => {

                setPass(e.target.value)
            }} placeholder="Password" type="password" className="bg-slate-200" />
            <button onClick={handleSub}>submit</button>
            {error && (<div>
                {error}
            </div>)}
        </div>
    );
};

