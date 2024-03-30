import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request){
    try{
        const data = await req.json();
        
        if (!data || !('email' in data) || !('password' in data)) {
            console.log("pass or email is missing")
         return NextResponse.json({message: "email or password is missing"})
        } 
        const { email, password } = data;
        const hashedPassword = await hash(password, 10);
        console.log(email,  hashedPassword);
    }catch (error){
        return NextResponse.json({message: "An error occurred",})
    } 

    return NextResponse.json({message: "Succesfully logged in"})
}