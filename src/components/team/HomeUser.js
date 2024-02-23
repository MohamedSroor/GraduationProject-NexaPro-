import * as React from "react";
import "./style.css";
import "./team";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";
import "../home/home";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(5px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

function HomeUser() {
  return (
    <div className="main">
      <div className="navbar2">
        <div className="navBack"></div>
        <ul className="rightNav">
          <li>
            <img
              src={require("../Icons/EditProfile/USA.png")}
              width={"20px"}
              style={{ display: "flex" }}
            />
            <span style={{ fontSize: "10px" }}> ENG</span>
          </li>
          <li>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            />
          </li>
          <li>
            <img src={require("../Icons/EditProfile/Notification.png")} />
          </li>
          <li>
            <Avatar
              alt="Mostafa"
              src={require("../Icons/Team/userMostafa.png")}
            />
          </li>
        </ul>
      </div>
      <div className="SideNav">
        <img
          src={require("../Icons/Logo1.png")}
          width={"50px"}
          style={{ marginBottom: "30%" }}
        />
        <ul>
          <li>
            <img src={require("../Icons/Team/Project.png")} /> Project
          </li>
          <li>
            <img src={require("../Icons/Team/Chat.png")} /> Chat
          </li>
          <li>
            <img src={require("../Icons/Team/Project.png")} /> Notes
          </li>
          <li>
            <img src={require("../Icons/Team/Signout.png")} />{" "}
            <NavLink to="/home">Sign Out</NavLink>
          </li>
        </ul>
      </div>
      <div className="in">
        <ul>
          <li className="activated"> Home </li>
          <li>
            <NavLink to="/team"> Team </NavLink>
          </li>
        </ul>
      </div>
      <div className="homeuser">
        <div className="tasks">
          <div className="today">
            <h4>Today tasks</h4>
            <div className="info">
              <p className="num">25</p>
              <p className="num">Tasks</p>
              <p className="xs">completed:10</p>
            </div>
          </div>
          <div className="overdue">
            <h4>overdue</h4>
            <div className="info">
              <p className="num">8</p>
              <p className="num">Tasks</p>
              <p className="xs">yasterday overdue:2</p>
            </div>
          </div>
          <div className="issue">
            <h4>issue</h4>
            <div className="info">
              <p className="num">32</p>
              <p className="num">open</p>
              <p className="xs">closed today:0</p>
            </div>
          </div>
        </div>
        <div className="organize">
          <div className="schedule">
            <h5>schedule</h5>
          </div>
          <div className="todolist">
            <h5>todolist</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUser;
