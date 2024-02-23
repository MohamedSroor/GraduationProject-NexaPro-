import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function SideBar({ selectedButton, setSelectedButton }) {
  // Function to toggle the selection state of the button when clicked
  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div>
      {/* {Start of NavBar} */}
      
        <div className="navbar1">
          <div className="leftnav1">
            {/* <img
            width="24"
            height="24"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMTAxODIwO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMzAiIGlkPSJMYXllcl8zMCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjcsMjdINWExLDEsMCwwLDEtLjg5LTEuNDUsMTguMTQsMTguMTQsMCwwLDAsMS44OS04VjE0YTEwLDEwLDAsMCwxLDIwLDB2My41M2ExOC4xNCwxOC4xNCwwLDAsMCwxLjg5LDhBMSwxLDAsMCwxLDI3LDI3Wk02LjU1LDI1aDE4LjlBMjAuMTQsMjAuMTQsMCwwLDEsMjQsMTcuNTNWMTRBOCw4LDAsMCwwLDgsMTR2My41M0EyMC4xNCwyMC4xNCwwLDAsMSw2LjU1LDI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2LDMxYTUsNSwwLDAsMS01LTUsMSwxLDAsMCwxLDIsMCwzLDMsMCwwLDAsLjg4LDIuMTIsMy4wOCwzLjA4LDAsMCwwLDQuMjQsMCwxLDEsMCwwLDEsMS40MiwxLjQyQTUsNSwwLDAsMSwxNiwzMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNiw2YTEsMSwwLDAsMS0xLTFWMmExLDEsMCwwLDEsMiwwVjVBMSwxLDAsMCwxLDE2LDZaIi8+PC9nPjwvc3ZnPg=="
            alt="notification"
          /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
          </div>
          {/* if notification is activated , show this img */}
          {/* <div className="leftnav1-active" style={{display:"flex", flexDirection:"row", gap: "80%" }}> 
                <img width="24" height="24" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMTAxODIwO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMzEiIGlkPSJMYXllcl8zMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjcsMjdINWExLDEsMCwwLDEtLjg5LTEuNDUsMTguMTQsMTguMTQsMCwwLDAsMS44OS04VjE0YTEwLDEwLDAsMCwxLDIwLDB2My41M2ExOC4xNCwxOC4xNCwwLDAsMCwxLjg5LDhBMSwxLDAsMCwxLDI3LDI3Wk02LjU1LDI1aDE4LjlBMjAuMTQsMjAuMTQsMCwwLDEsMjQsMTcuNTNWMTRBOCw4LDAsMCwwLDgsMTR2My41M0EyMC4xNCwyMC4xNCwwLDAsMSw2LjU1LDI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2LDMxYTUsNSwwLDAsMS01LTUsMSwxLDAsMCwxLDIsMCwzLDMsMCwwLDAsLjg4LDIuMTIsMy4wOCwzLjA4LDAsMCwwLDQuMjQsMCwxLDEsMCwwLDEsMS40MiwxLjQyQTUsNSwwLDAsMSwxNiwzMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNiw2YTEsMSwwLDAsMS0xLTFWMmExLDEsMCwwLDEsMiwwVjVBMSwxLDAsMCwxLDE2LDZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjYsNWEyLDIsMCwxLDEsMi0yQTIsMiwwLDAsMSwyNiw1Wm0wLTJoMFptMCwwaDBabTAsMGgwWm0wLDBoMFptMCwwaDBabTAsMGgwWm0wLDBoMFptMCwwaDBaIi8+PC9nPjwvc3ZnPg=="/>
            </div> */}
          <div className="rightnav1">
            <div className="lang">
              <img src={require("../Icons/EditProfile/USA.png")} />
              <span>En</span>
            </div>
            <Link to={"/edit"}>
            <div>
              <img
                src={require("../Icons/EditProfile/UserMohamed.png")}
                width="30"
                height="30"
              />
            </div>
            </Link>
          </div>
        </div>
      
      {/* {End of NavBar} */}

      {/* {Start of SideBar} */}

      <div className="SideBar">
        <div className="logo">
          <img src={require("../Icons/Logo.png")} width={"50px"} />
          <span>Nexapro</span>
        </div>
        <ul>
          <li style={{ paddingTop: "0px", fontWeight: "bold" }}>PROJECT</li>

          <Link to="/home" onClick={() => handleClick(1)}>
            <div
              className={`button ${
                selectedButton === 1 ? "mm-selected" : "mm-not-selected"
              }`}
            >
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
                Home
              </li>
            </div>
          </Link>

          <Link to="/team" onClick={() => handleClick(2)}>
            <div
              className={`button ${
                selectedButton === 2 ? "mm-selected" : "mm-not-selected"
              }`}
            >
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-people"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                </svg>
                Team
              </li>
            </div>
          </Link>

          <li style={{ fontWeight: "bold" }}>AUTH</li>

          <Link to="/analytics" onClick={() => handleClick(3)}>
            <div
              className={`button ${
                selectedButton === 3 ? "mm-selected" : "mm-not-selected"
              }`}
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-clipboard2-data"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                  <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1" />
                </svg>
                Analytics
              </li>
            </div>
          </Link>
          <li style={{ fontWeight: "bold" }}>OTHERS</li>

          <Link to="/chat" onClick={() => handleClick(4)}>
            <div
              className={`button ${
                selectedButton === 4 ? "mm-selected" : "mm-not-selected"
              }`}
            >
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-chat-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                  <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" />
                </svg>
                Chats
              </li>
            </div>
          </Link>
          <Link to="/notes" onClick={() => handleClick(5)}>
            <div
              className={`button ${
                selectedButton === 5 ? "mm-selected" : "mm-not-selected"
              }`}
            >
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-journals"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2" />
                  <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0" />
                </svg>
                Notes
              </li>
            </div>
          </Link>
          <Link to="/" onClick={() => handleClick(6)}>
            <div
              className={`button ${
                selectedButton === 6 ? "mm-selected" : "mm-not-selected"
              }`}
            >
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
                Signout
              </li>
            </div>
          </Link>
        </ul>
      </div>

      {/* {End of sideBar} */}
    </div>
  );
}

export default SideBar;
