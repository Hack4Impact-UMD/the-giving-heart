"use client";

import classes from './index.module.scss'

const ForgotPasswordPage = () => {

    return (
        <div className={classes.container}>
            <div className={classes.signupcard}>
                <div className={classes.inner}>
                    <div className={classes.header}>
                        <h1>Forgot password?</h1>
                        <h2>Please enter the email associated with your account to reset your password.</h2>
                    </div>

                    <div className={classes.form}>
                        <form>
                            <div className={classes.textfield}>
                                <label>Email:</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="block text-sm font-medium text-gray-700"
                                />
                            </div>

                            <div className={classes.submitfield}>
                                <button type="submit">Reset Password</button>
                                <p>back to <span>Sign In</span></p>
                            </div>
                        </form>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;