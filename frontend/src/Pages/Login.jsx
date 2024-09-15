import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import "../App.css";
import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Invalid = () => toast.error("Invalid Credentials");
  const Required = () => toast.error("Both Fields are Required");
  const Success = () => toast.success("Login Successful");

  const handleLogin = () => {
    // Dummy login check
    if (email === "test@user.com" && password === "password") {
      Success(); // Trigger success toast before navigating
      setTimeout(() => {
        navigate("/home");
      }, 1000); // Wait for a short time before navigating
    }
    else if(email === "" || password === ""){
      Required();
    }
    else {
      Invalid();
    }
  };

  return (
    <div className={style.parent}>
      <div className={style.login_container}>
        <div className={`${style.main_content}`}>

          <h2 className={style.login_fonts}>Login</h2>
          <p className="terms_text">
            By signing in you are agreeing our{" "}
            <span className="terms_Condition">Term and Privacy Policy</span>
          </p>

          <div className="loginregister">
            <span className="login_text hovertext">Login</span>
            <span className="register_text hovertext">Register</span>
          </div>

          <div className={`${style.email_container}`}>
            <MdOutlineEmail className="icon_color" />
            <input
              className="inputstyles"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={`${style.pass_container}`}>
            <GoLock className="icon_color " />
            <input
              className="inputstyles"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaRegEyeSlash className="icon_color eye" />
          </div>
          <div className={style.rememberForget}>
            <div
              className="rememberPassword"
            >
              <input
                type="checkbox"
                name="remember"
                id=""
                style={{ color: "#A6A6A6" }}
              />
              <p>Remember Password</p>
            </div>
            <p className="rememberPassword" style={{color: "#0386d0", fontWeight: "bold"}}>Forget Password</p>
          </div>
          <button onClick={handleLogin} className={style.btn}>Login</button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="rememberPassword" style={{marginBottom: "15px"}}>or connect with</div>
          <div className={style.socialHandles} style={{marginBottom: "3rem"}}>
            <FaFacebook style={{color: "#3B5998"}}/>
            <FaLinkedin style={{color: "#3B5998"}}/>
            <FaSquareInstagram style={{color: "#CB2027"}}/>
            <FaPinterest style={{color: "#007AB9"}}/>
          </div>

          <div className="fingerprint">
            <FaFingerprint style={{color: '#0386D0'}}/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;

