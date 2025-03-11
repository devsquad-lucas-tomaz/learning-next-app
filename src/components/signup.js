'use client'

import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Modal from '@/components/modal';
import Input from '@/components/form/input';
import { createUser } from '@/app/_actions/signup'
import { useActionState, useEffect, useTransition, useState } from 'react';

export default function SignUp({ open, setOpen }) {
    const defaultValues = { form: {}, errors: {}, success: false };
    const [formState, formAction] = useActionState(createUser, {});
    const [state, setState] = useState(formState)

    useEffect(() => {
        if (state.success) {
            setTimeout(() => setOpen(false), 2000);
        }
    }, [state.success]);

    useEffect(() => {
        if (open) {
            setState(defaultValues);
        }
    }, [open]);

    useEffect(() => {
        setState(formState);
    }, [formState]);

    return (
        <Modal open={open} setOpen={setOpen} onSubmit={formAction}>
            <h2 className="mb-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Sign in to your account
            </h2>
            {!state.success && (<form action={formAction} className="space-y-6">
                <Input name="name" defaultValue={state.form?.name} errors={state.errors?.name} placeholder="Your name" />
                <Input name="email" type="email" defaultValue={state.form?.email} errors={state.errors?.email} placeholder="you@mail.com" />
                <Input name="phone" defaultValue={state.form?.phone} errors={state.errors?.phone} placeholder="55 5555-5555" />

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    >
                        Cancel
                    </button>
                </div>
            </form>)}
            {state.success && (
                <div className="rounded-md bg-green-50 p-4">
                    <div className="flex">
                        <div className="shrink-0">
                        <CheckCircleIcon aria-hidden="true" className="size-5 text-green-400" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-green-800">Successfully registered!</p>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};