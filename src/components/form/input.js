'use client'

import PropTypes from 'prop-types';

export default function Input({ ...props }) {
    const { name, defaultValue, errors, placeholder } = props;

    return (
        <div>
            <label htmlFor={name} className="block text-sm/6 font-medium text-gray-900 capitalize">{ name }</label>
            <div className="mt-2">
                <input
                    type={props.type ?? 'text'}
                    name={name}
                    id={name}
                    defaultValue={defaultValue}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder={placeholder}
                />
                {errors && (
                    <p className="text-red-500">{errors}</p>
                )}
            </div>
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    errors: PropTypes.object,
    placeholder: PropTypes.string,
    type: PropTypes.string,
}; 