import { z } from 'zod';

export const FormSignInSchema = z.object({
  email: z.string().email('Email address is not valid!'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters!')
    .refine(
      (password) => {
        const uppercaseRegex = /[A-Z]/;
        const symbolRegex = /[^a-zA-Z0-9]/;
        return uppercaseRegex.test(password) && symbolRegex.test(password);
      },
      {
        message: 'Password must be at least 1 uppercase letters and 1 symbols!',
      }
    ),
});

export const FormCreateBookSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters!'),
  author: z
    .string()
    .refine((value) => value.trim() !== '', {
      message: 'Author must be required!',
    })
    .refine((author) => /^[A-Za-z\s]*$/.test(author), {
      message: 'Author name can only contain letters and spaces!',
    }),
  topic: z.string().refine((value) => value.trim() !== '', {
    message: 'Topic must be required!',
  }),
});

export type FormSignInType = z.infer<typeof FormSignInSchema>;
export type FormCreateBookType = z.infer<typeof FormCreateBookSchema>;
export type FormEditBookType = FormCreateBookType;
