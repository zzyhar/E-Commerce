import "./SignUpPage.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="p-relative mt-60px">
        <img className="p-absolute" src="/assets/LoginPage/Login.png" alt="" />
      </div>

      <div className="default-container dsfx fx-j-e">
        {/* form */}

        <div className="dsfx fx-d-c w-f-c right-side-singup">
          <div className="mb-48px">
            <h1 className="heading-36px">Create an account</h1>
            <p className="title-16px mt-24px">Enter your details below</p>
          </div>
          <form className="dsfx fx-d-c f-gap-40px" action="">
            <div className="input-field">
              <label className="title-16px col-tx2 op-40">Full Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="input-field">
              <label className="title-16px col-tx2 op-40">
                Email or Phone Number
              </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="input-field">
              <label className="title-16px col-tx2 op-40">Password</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="input-field">
              <label className="title-16px col-tx2 op-40">
                Confirm Password
              </label>
              <input type="text" name="name" id="name" required />
            </div>
          </form>
          <button className="form-submit title-medium-16px mt-40px bg-col-btn2 col-tx bor-col-trp br-rad-4px">
            Create Account
          </button>
          <div className="dsfx f-gap-16px fx-ai-c mt-32px">
            <p className="title-16px col-tx2 op-70">Already have account?</p>
            <Link className="login title-16px col-tx2 op-70" to="/login">
              Log In
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SignUpPage;
