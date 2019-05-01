import React, { useState } from 'react';

export default function useForm<T>(
    callback: () => void,
): {
    handleSubmit: (event: React.FormEvent<HTMLButtonElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    values: T;
} {
    const [values, setValues] = useState({} as T);

    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        if (event) {
            event.preventDefault();
        }
        callback();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setValues(preValues => ({ ...preValues, [event.target.name]: event.target.value } as T));
    };

    return {
        handleChange,
        handleSubmit,
        values,
    };
}
