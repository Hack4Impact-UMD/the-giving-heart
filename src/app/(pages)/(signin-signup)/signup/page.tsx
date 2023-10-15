"use client";

import classes from './index.module.scss'

const SignUpPage = () => {

    return (
        <div className={classes.container}>
            <div className={classes.signupcard}>
                <div className={classes.inner}>
                    <div className={classes.header}>
                        <h1>Signup</h1>
                        <h2>Lorem ipsum dolor sit amet consectur adipiscing.</h2>
                    </div>
                    
                    <div className={classes.form}>
                        <form>
                            <div className={classes.textfield}>
                                <label>First Name:</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    className="block text-sm font-medium text-gray-700"
                                />
                            </div>
                            <div className={classes.textfield}>
                                <label>Last Name:</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="block text-sm font-medium text-gray-700"
                                />
                            </div>
                            <div className={classes.textfield}>
                                <label>Email:</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="block text-sm font-medium text-gray-700"
                                />
                            </div>
                            <div className={classes.textfield}>
                                <label>Password:</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="block text-sm font-medium text-gray-700"
                                />
                            </div>
                            <div>
                                <label htmlFor="newsletter">
                                    <div className={classes.checkboxfield}>
                                        <input
                                            type="checkbox"
                                            id="newsletter"
                                            name="newsletter"
                                        />

                                        <span>
                                            I would like to sign up for The Giving Heart's optional email newsletter.
                                        </span>
                                    </div>
                                </label>
                            </div>
                            <div className={classes.submitfield}>
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;