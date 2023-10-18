"use client";

// import classes from './index.module.scss'

export default function SignInPage() {
  return (
    <div
    // className={classes.container}
    >
      <div
      // className={classes.card}
      >
        <section
        // className={classes.right}
        >
          <div
          // className={classes.title}
          >
            <h1>Lorem ips</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipiscing</h2>
          </div>
          <div>
            <div
            // className={classes.logo}
            >
              Logo here
            </div>
          </div>
        </section>
        <section
        // className={classes.inner}
        >
          <div
          //  className={classes.header}
          >
            <h1>Log In</h1>
          </div>

          <div
          //  className={classes.form}
          >
            <form>
              <div
              //  className={classes.textfield}
              >
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block text-sm font-medium text-gray-700"
                />
              </div>
              <div
              //    className={classes.textfield}
              >
                <label>Password:</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block text-sm font-medium text-gray-700"
                />
                <p>Forgot password?</p>
              </div>
              <div
              //   className={classes.submitfield}
              >
                <button type="submit">Log In</button>
                <p>
                  Lorem ipsum dolor sit? <span>Sign Up</span>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
