'use client'

import Modal from '@/components/modal';
import { createUser } from '@/app/_actions/signup'
import { useActionState } from 'react';


export default function SignUp({ open, setOpen }) {
    const [state, formAction] = useActionState(createUser, {});

    return (
        <Modal open={open} setOpen={setOpen} onSubmit={formAction}>
            <h2 className="mb-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Sign in to your account
            </h2>
            <form action={formAction} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Name</label>
                    <div className="mt-2">
                        <input type="text" name="name" id="name"
                            defaultValue={state.form?.name}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Your name" />
                            {state.errors?.name && (
                                <p className="text-red-500">{state.errors.name}</p>
                            )}
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                    <div className="mt-2">
                        <input type="email" name="email" id="email"
                            defaultValue={state.form?.email}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="you@example.com" />
                            {state.errors?.email && (
                                <p className="text-red-500">{state.errors.email}</p>
                            )}
                    </div>
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">Phone</label>
                    <div className="mt-2">
                        <input type="text" name="phone" id="phone"
                            defaultValue={state.form?.phone}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="55 5555-5555" />
                            {state.errors?.phone && (
                                <p className="text-red-500">{state.errors.phone}</p>
                            )}
                    </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        data-autofocus
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Modal>
    );
};