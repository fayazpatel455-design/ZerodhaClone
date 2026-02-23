import { useRef, useEffect } from "react";

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
  }, []);

  if (!showLogout) return null;

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

        <label>Email</label>

        <input className="form-control mb-3" placeholder="Enter email" />

        <label>Password</label>

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter password"
        />

        <button className="btn btn-danger w-100">Logout</button>
      </div>
    </div>
  );
};

export default Logout;
