import "./BillingDetailt.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const BillingDetailt: React.FC = () => {
  return (
    <>
      <Header />
      <div className="default-container">
        {/* Path */}
        <div className="dsfx f-gap-12px mb-80px mt-80px">
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            Account
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            My Account
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            Product
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            View Cart
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <p className="title-14px col-tx2">CheckOut</p>
        </div>
        {/* Left Side */}
        <div>
          <h1 className="heading-medium-36px mb-48px">Billing Details</h1>
          <form action="" className="dsfx f-gap-32px fx-d-c">
            {/* First Name */}
            <div className="dsfx fx-d-c">
              <label className="title-16px col-tx2 op-40">First Name*</label>
              <input
                className="bg-col-s check-out-input"
                type="text"
                required
              />
            </div>
            {/* Company Name */}
            <div className="dsfx fx-d-c">
              <label className="title-16px col-tx2 op-40">Company Name</label>
              <input className="bg-col-s check-out-input" type="text" />
            </div>
            {/* Street Adress  */}
            <div className="dsfx fx-d-c">
              <label className="title-16px col-tx2 op-40">
                Street Address*
              </label>
              <input
                className="bg-col-s check-out-input"
                type="text"
                required
              />
            </div>
            {/* Apartment */}
            <div className="dsfx fx-d-c">
              <label className="title-16px col-tx2 op-40">
                Apartament, floor, etc.
              </label>
              <input
                className="bg-col-s check-out-input"
                type="text"
                required
              />
            </div>
            {/* Town / City  */}
            <div className="dsfx fx-d-c">
              <label className="title-16px col-tx2 op-40">Town/City*</label>
              <input
                className="bg-col-s check-out-input"
                type="text"
                required
              />
            </div>
            {/* Phone Number  */}
            <div className="dsfx fx-d-c">
              <label className="title-16px col-tx2 op-40">Phone Number</label>
              <input className="bg-col-s check-out-input" type="text" />
            </div>
            {/* Email  */}
            <div className="dsfx fx-d-c">
              <label className="title-16px col-tx2 op-40">Email</label>
              <input className="bg-col-s check-out-input" type="text" />
            </div>
            {/* Check Box */}
            <div className="dsfx f-gap-16px">
              <input className="bg-col-btn2 col-p" type="checkbox" />
              <label className="title-16px col-tx2">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>
        {/* Right Side */}
        <div></div>
      </div>
    </>
  );
};

export default BillingDetailt;
