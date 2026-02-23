import { useState } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    // console.log(index);
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Zerodha logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={linkStyle} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                <h5 className="mt-4">Dashboard</h5>
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={linkStyle}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                <h5>Orders</h5>
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={linkStyle}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                <h5>Holdings</h5>
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={linkStyle}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                <h5>Positions</h5>
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={linkStyle}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                <h5>Funds</h5>
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={linkStyle}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                <h5>Apps</h5>
              </p>
            </Link>
          </li>
        </ul>
        <hr></hr>
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
      
          <div>
            <UserMenu/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
