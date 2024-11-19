import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import classes from './FormPage.module.scss';

const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
        .email('Email must be valid')
        .matches(regExp,'Email must be contain @ and .com')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    password2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required'),
});

const FormPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submit = (data) => {
        console.log(data, 'data');
    };

    return (
        <div className={classes.formPage}>
            <h2 className={classes.title}>Register with</h2>
            <form onSubmit={handleSubmit(submit)} className={classes.form}>
                <label className={classes.label} htmlFor="name">
                    Name
                </label>
                <input
                    aria-invalid={errors.name ? 'true' : 'false'}
                    className={classes.input}
                    placeholder="Your full name"
                    type="text"
                    {...register('name')}
                />
                {errors.name && <p className={classes.error}>{errors.name.message}</p>}

                <label className={classes.label} htmlFor="email">
                    Email
                </label>
                <input
                    aria-invalid={errors.email ? 'true' : 'false'}
                    className={classes.input}
                    placeholder="Your email address"
                    type="email"
                    {...register('email')}
                />
                {errors.email && <p className={classes.error}>{errors.email.message}</p>}

                <label className={classes.label} htmlFor="password">
                    Password
                </label>
                <input
                    aria-invalid={errors.password ? 'true' : 'false'}
                    className={classes.input}
                    placeholder="Your password"
                    type="password"
                    {...register('password')}
                />
                {errors.password && <p className={classes.error}>{errors.password.message}</p>}

                <label className={classes.label} htmlFor="password2">
                    Confirm Password
                </label>
                <input
                    aria-invalid={errors.password2 ? 'true' : 'false'}
                    className={classes.input}
                    placeholder="Confirm your password"
                    type="password"
                    {...register('password2')}
                />
                {errors.password2 && (
                    <p className={classes.error}>{errors.password2.message}</p>
                )}

                <button type="submit" className={classes.btn}>
                    Continue
                </button>
            </form>
        </div>
    );
};

export default FormPage;