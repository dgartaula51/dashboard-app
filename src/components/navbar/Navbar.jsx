import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { useContext } from "react";
import { DarkModeContext } from "../../../src/context/darkModeContext";

function NavBar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ModeCommentIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/321552/pexels-photo-321552.jpeg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
