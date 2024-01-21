import {GetUserData} from '@DataBase/Users/getUsers'
import { NextResponse } from 'next/server';
import { CreateUserData } from '@DataBase/Users/getUsers';

export async function POST(req) {
    const data = await req.json();
    const Userdata = await GetUserData(data.email)
    if(!Userdata)
    {
        await CreateUserData(data.name, data.email, data.pass)
        console.log("created user: ",Userdata);
        return new NextResponse("success");
        
    }
    console.log("user already in database");

    return new NextResponse("failure");
}

