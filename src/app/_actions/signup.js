'use server'

import { z } from 'zod';
import User from '@/model/User';
import connect from '@/services/database';

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
});

export async function createUser(prevState, formData) {
    const form = Object.fromEntries(formData)
    const validatedFormData = schema.safeParse(form)

    if (!validatedFormData.success) {
        const errors = validatedFormData.error.flatten().fieldErrors;
        
        return {
            form,
            success: false,
            errors: {
                name: errors?.name,
                email: errors?.email,
                phone: errors?.phone,
            },
        };
    }

    await connect();
    const person = new User({ ...validatedFormData.data });
    await person.save();

    return {
        success: true,
    };
}

export async function resetFormState() {
    'use server'
    return {
        success: false,
        form: {},
        errors: {}
    }
}