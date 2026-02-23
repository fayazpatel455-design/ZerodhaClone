import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
   const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "top-center",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-center"
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {data} = await axios.post("https://zerodhaclone-01-ei19.onrender.com/signup",{ ...inputValue}, {
        withCredentials: true,
      });
       const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("https://dashboard-00.netlify.app/apps");
          // window.location.href = "https://dashboard-00.netlify.app/apps";
        }, 1000);
      } else {
        handleError(message);
      }
      // console.log(data.data);
    } catch (err) {
      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      } 
    }
    setInputValue({ email: "", username: "", password: "" });
  };

  return (
    <div className="container">
      <h1 className="text-center p-5">Signup</h1>
      <div className="col-4 offset-4">
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <label htmlFor="email">Enter Email:</label>
          <br />
          <input
            type="text"
            placeholder="Enter @email.com"
            className="form-control"
            id="email"
            name="email"
            value={inputValue.email}
            onChange={handleChange}
            required
          ></input>
          <div className="invalid-feedback">Please enter @email.com.</div>
          <br />
          <label htmlFor="name">Enter Username:</label>
          <br />
          <input
            type="text"
            placeholder="Enter username"
            className="form-control"
            id="name"
            name="username"
            value={inputValue.username}
            onChange={handleChange}
            required
          ></input>
          <div className="invalid-feedback">Please enter username.</div>
          <br />
          <label htmlFor="pass">Enter Password:</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="form-control"
            id="pass"
            value={inputValue.password}
            onChange={handleChange}
            required
          ></input>
          <div className="invalid-feedback">Please enter password.</div>
          <br></br>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
            <br />
            <p>
              Already have any account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer  toastStyle={{ marginTop: "70px" }} />
    </div>
  );
}

export default Signup;
