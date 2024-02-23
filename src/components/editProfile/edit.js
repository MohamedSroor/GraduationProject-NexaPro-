import React from "react";
import "../style.css";
import home from "../home/home";
import SideBar from "../SideBar/SideBar";

function Edit() {
  return (
    <div>
      <SideBar />
      <div className="main">
        <div className="edit">
          <div className="leftEdit">
            <form>
              <h3 style={{ fontWeight: "400" }}>Edit Profile</h3>
              <group>
                <group1
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <inGroup11
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "3%",
                    }}
                  >
                    <label>
                      Company{" "}
                      <span style={{ color: "gray", fontSize: "9px" }}>
                        *Disabled
                      </span>
                    </label>
                    <input
                      value={"Faculty Of Computer Science Helwan Uni."}
                      disabled
                      style={{ width: "350px" }}
                    ></input>
                  </inGroup11>
                  <inGroup12
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "3%",
                    }}
                  >
                    <label>Email</label>
                    <input
                      defaultValue={"mohamed41258@gmail.com"}
                      style={{ width: "350px" }}
                    ></input>
                  </inGroup12>
                  <inGroup13
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <label>About me</label>
                    <input
                      defaultValue={"The purpose of our lives is to be happy"}
                      style={{ width: "350px" }}
                    ></input>
                  </inGroup13>
                </group1>
                <group2
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "5%",
                  }}
                >
                  <inGroup21
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      paddingLeft: "10%",
                      padding: "3%",
                      marginLeft: "12%",
                      marginBottom: "5%",
                    }}
                  >
                    <label>UserName</label>
                    <input
                      style={{ padding: "7%", width: "100%" }}
                      defaultValue={"Mohammed Sroor"}
                    ></input>
                  </inGroup21>
                  <inGroup22
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "12%",
                      marginBottom: "10%",
                    }}
                  >
                    <label>
                      Department
                      <span style={{ color: "gray", fontSize: "9px" }}>
                        *Disabled
                      </span>
                    </label>
                    <input
                      value={"Front-End"}
                      disabled
                      style={{ width: "100%" }}
                    ></input>
                  </inGroup22>
                  <inGroup23
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "12%",
                    }}
                  >
                    <label>ProfilePic</label>
                    <input type="file" id="myPic" name="filename"></input>
                  </inGroup23>
                </group2>
              </group>
              <br />
              <input
                type="submit"
                className="button"
              ></input>
            </form>
          </div>
          <div className="rightEdit">
            <img src={require("../Icons/EditProfile/UserMohamedBig.png")} />
            <h2
              style={{
                fontWeight: "200",
                letterSpacing: "2px",
                marginBottom: "4px",
              }}
            >
              Mohammed Sroor
            </h2>
            <h5 style={{ fontWeight: "100", margin: "0", color: "gray" }}>
              Front-End Developer
            </h5>
            <p style={{ fontSize: "17px" }}>
              "The purpose of our lives is to be happy"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
