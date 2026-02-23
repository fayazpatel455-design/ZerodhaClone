import { useRef, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Logout = ({ showLogout, setShowLogout }) => {
  const boxRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowLogout]);

  if (!showLogout) return null;

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (req, res) => {
    let { data } = await axios.post(
      "https://zerodhaclone-01-ei19.onrender.com/logout",
      inputValue,
      {
        withCredentials: true,
      },
    );
  };
  const {success,message}=data;
  if(success){
    handleSuccess(message);
    setTimeout(()=>{
      Navigate("")
    },1000);
  }

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        background: "rgba(0,0,0,0.4)",
        zIndex: "1000",
      }}
    >
      <div ref={boxRef} className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Logout</h3>
        <form onSubmit={handleSubmit}>
          <label>Email</label>

          <input className="form-control mb-3" placeholder="Enter email" />

          <label>Password</label>

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter password"
          />

          <button className="btn btn-danger w-100">Logout</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Logout;
