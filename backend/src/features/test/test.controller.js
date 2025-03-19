import asyncHandler from 'express-async-handler';

export const getTest = asyncHandler(async(req, res) => {
    console.log("Hello World");
    return res.json({message: "Hello World"})
})