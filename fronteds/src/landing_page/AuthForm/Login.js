import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
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
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } =await axios.post("https://zerodhaclone-01-ei19.onrender.com/login", inputValue, {
        withCredentials: true,
      });
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
        //   navigate("http://localhost:3001");
        window.location.href = "https://dashboard-00.netlify.app/apps";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
    //   console.log(err);
    handleError(err);
    }

    setInputValue({ email: "",  password: "" });
  };

  return (
    <div className="container">
      <h1 className="text-center p-5">Login</h1>
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
              Login
            </button>
            {/* {handleSubmit?<Dashboard/>:<Login/>} */}
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Login;