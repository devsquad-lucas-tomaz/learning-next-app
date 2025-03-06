'use client'

import Modal from '@/components/modal';

import { createUser } from '@/app/actions/signup'

export default function SignUp({ open, setOpen }) {

    const handleSubmit = async () => {
        await createUser();
    };

    return (
        <Modal open={open} setOpen={setOpen} onSubmit={handleSubmit}>
            <h2 className="mb-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Sign in to your account
            </h2>
            <form action="#" method="POST" className="space-y-6">
                <div>
                    <div className="col-span-2">
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        autoComplete="email"
                        aria-label="Email address"
                        className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className="-mt-px">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        autoComplete="current-password"
                        aria-label="Password"
                        className="block w-full rounded-b-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </form>
        </Modal>
    );
};