import userModel from "../Schema/user";
import { connectdb } from "../connection";

export const GetUserData = async (Passedemail) => {

    await connectdb();
    const user = await userModel.findOne({ email: Passedemail })
    return user;

};

export const CreateUserData = async ( Passedname,Passedemail, Passedpass) => {

    await connectdb();
    const user = await userModel.create({
        name:Passedname,
        email: Passedemail,
        password:Passedpass,
    })
    return user;

}
