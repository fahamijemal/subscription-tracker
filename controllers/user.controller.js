import User from "../models/user.model.js";


//The getUsers function retrieves all users from the database.
export const getUsers= async(req,res,next) =>{
    try{
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users
        });
    }catch(error){
        next(error);
    }
}

//The getUser function retrieves a user by their ID from the database.
export const getUser= async(req,res,next) =>{
    try{
        const user= await User.findById(req.params.id).select("-password");
        if(!user){
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: user
        })


    }catch(error){
        next(error);
    }
}