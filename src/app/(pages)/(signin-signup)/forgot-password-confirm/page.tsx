"use client";

import classes from './index.module.scss'

const ForgotPasswordConfirmationPage = () => {

    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <div className={classes.inner}>
                    <div className={classes.header}>
                        <h1>We've sent you an email at:</h1>
                        <h2>johnsmithemail123@gmail.com</h2>
                    </div>

                    <div className={classes.content}>
                        <p>Please follow the directions in that email to reset your password.</p>
                        <p className={classes.subtext}>back to <span>Sign In</span></p>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordConfirmationPage;