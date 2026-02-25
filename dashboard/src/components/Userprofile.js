import { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const [user, setUser] = useState({username:"",email:""});

  useEffect(() => {
    axios
      .get("https://zerodhaclone-01-ei19.onrender.com/profile", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 text-center shadow" style={{ width: "350px" }}>
         <div
          className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center mx-auto"
          style={{
            width: "120px",
            height: "120px",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
         {user.username
  ? user.username.charAt(0).toUpperCase()
  : "U"}
        </div>

        <h4 className="mt-3">{user.username}</h4>
        <p>{user.email}</p>

      </div>
    </div>
  );
}

export default UserProfile;