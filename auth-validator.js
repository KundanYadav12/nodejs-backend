const {z} = require("zod");

const signupSchema = z.object({
    username:z
    .string({require_error: "Name is required"})
    .trim()
    .min(3,{message: "Name must be at lest of 3 chars."})
    .max(255,{message: "Name must not be more than 255 characters"}),

    email:z
    .string({require_error: "email is required"})
    .trim()
    .email({message:"Invalid emal address"})
    .min(3,{message: "email must be at lest of 3 chars."})
    .max(255,{message: "email must not be more than 255 characters"}),

    phone:z
    .string({require_error: "Name is required"})
    .trim()
    .min(3,{message: "Name must be at lest of 3 chars."})
    .max(255,{message: "Name must not be more than 255 characters"}),

    password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
})

module.exports = signupSchema;