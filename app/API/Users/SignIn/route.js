import { GetUserData } from '@DataBase/Users/getUsers';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const data = await req.json();
    const userData = await GetUserData(data.email, data.pass);

    if (userData) {
        // User found based on email
        if (userData.password === data.pass) {
            // Passwords match, successful login
            return new NextResponse("success",{name:userData.name});
        } else {
            // Password is incorrect
            return new NextResponse("incorrectPassword");
        }
    } else {
        // User not found based on email
        return new NextResponse("accountNotFound");
    }
}