import { useState, useRef, useEffect } from "react";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";

function UserMenu() {
  const navigate=useNavigate();
  const [open, setOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const menuRef = useRef();

  // Outside click close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowLogout]);

  return (
    <div ref={menuRef} style={{ position: "relative" }}>
      {/* USERID */}

      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        User Id▼
      </div>

      {/* DROPDOWN */}

      {open && (
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "0",
            background: "white",
            border: "1px solid #ddd",
            padding: "10px",
            width: "150px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ padding: "10px" }} onClick={() => navigate("/profile")}>
            <i className="fa-solid fa-circle-user" ></i> Profile
          </div>

          <div style={{ padding: "10px" }}>
            <i className="fa-solid fa-clock-rotate-left"></i> History
          </div>

          <div style={{ padding: "10px" }}>
            <i className="fa-solid fa-gear"></i> Settings
          </div>

          <div
            style={{ padding: "10px", color: "red", cursor: "pointer" }}
            onClick={() => {
              setShowLogout(true);
              setOpen(false);
            }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </div>
        </div>
      )}

      {/* Logout Popup */}

      <Logout showLogout={showLogout} setShowLogout={setShowLogout} />
    </div>
  );
}

export default UserMenu;
