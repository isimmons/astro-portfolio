import { z, ZodSchema } from "zod";

const contactFormSchema = z.object({
  name: z
    .string({
      required_error: "Please provide a valid name of at least 2 characters.",
    })
    .min(2, { message: "A name must be at least 2 characters long." })
    .max(255, { message: "Please keep your name less than 256 characters." }),
  email: z
    .string({ required_error: "Please provide a valid email." })
    .email({ message: "Please enter a valid email (i.e. user@somedomain.com" }),
});

export default contactFormSchema;
