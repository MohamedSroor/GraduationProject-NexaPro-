import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";
import team from "../Icons/Home/creative-team.gif";

function home() {
  return (
    <div className="home">
      <div className="inside">
        <div className="navbar">
          <img src={require("../Icons/Logo1.png")} width={"50px"} />
          <ul>
            <li onClick={scrollToFunction}>Why us</li>
            <li>Our team</li>
            <li>About us</li>
          </ul>
          <div className="button1">
            <NavLink to="/Signup">
              <button>Get Started &#8594;</button>
            </NavLink>
          </div>
        </div>
        <content className="content">
          <section className="aboutUs">
            <img src={team} width={"700px"} height={"700px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "50px",
                fontSize: "25px",
              }}
            >
              <h1>Plan,</h1>
              <h1>Manage,</h1>
              <h1>Communicate with each others.</h1>
              <button
                style={{ padding: "15px", marginTop: "40px", width: "100px" }}
              >
                Know More
              </button>
            </div>
          </section>
        </content>
        <article1>
          <img
            src={require("../Icons/Home/messages.png")}
            style={{ display: "flex", position: "absolute" }}
          />
          <h1 style={{ fontSize: "50px" }}>Your Ultimate Team</h1>
          <h1 style={{ fontSize: "55px" }}>Management Solution</h1>
          <p style={{ marginTop: "40px" }}>
            Welcome to NexaPro - where team collaboration meets effortless
          </p>
          <p style={{ margin: "0" }}>
            productivity, And inspiration fuels success
          </p>
          <button style={{ margin: "1.5%" }}>Get Started &#8594;</button>
        </article1>
        <article2>
          <img
            src={require("../Icons/Home/Project.png")}
            style={{ width: "519px", height: "405px" }}
            id="scrollToElement"
          />
          <div className="title">
            <h1 style={{ fontSize: "40px" }}>Customized solutions for teams</h1>
            <p style={{ margin: "3px" }}>
              Empower your team, streamline workflows, scale your operations
              effortlessly
            </p>
            <p style={{ margin: "0px" }}>
              with our intuitive cloud-based solutions, and real-time
              communication.
            </p>
          </div>
        </article2>
        <article3>
          <div className="title">
            <h1 style={{ fontSize: "40px" }}>
              Customized solutions for companies
            </h1>
            <p style={{ margin: "3px" }}>
              Communicate with your employee, tracking your company’s financial
            </p>
            <p style={{ margin: "3px" }}>
              {" "}
              statement by analysis it, and you can improve company’s{" "}
            </p>
            <p style={{ margin: "0px" }}> performance by our ML model. </p>
          </div>
          <img
            src={require("../Icons/Home/Analysis.png")}
            style={{ width: "519px", height: "405px", paddingLeft: "5%" }}
          />
        </article3>
        <footer>
          <img
            src={require("../Icons/Home/groupFooter.png")}
            className="image"
          />
          <div className="topFooter">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginTop: "4%", marginLeft: "10%" }}>
                Nexa<span>Pro</span>
              </h3>
              <p style={{ marginBottom: "0px", marginLeft: "10%" }}>
                we're here to answer your qusetions,
              </p>
              <p
                style={{
                  marginBottom: "0px",
                  marginLeft: "10%",
                  marginTop: "3px",
                }}
              >
                provide support, and help you leverage the{" "}
              </p>
              <p
                style={{
                  marginBottom: "0px",
                  marginLeft: "10%",
                  marginTop: "3px",
                }}
              >
                power of NexaPro for finacial success.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10%",
              }}
            >
              <h3>Quick Menu</h3>
              <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
                <li style={{ paddingBottom: "10%" }}>Company</li>
                <li style={{ paddingBottom: "10%" }}>Platform</li>
                <li style={{ paddingBottom: "10%" }}>Product</li>
                <li style={{ paddingBottom: "10%" }}>Solutions</li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10%",
              }}
            >
              <h3>Licence</h3>
              <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
                <li style={{ paddingBottom: "5%" }}>Privacy policy</li>
                <li style={{ paddingBottom: "5%" }}>Copyright</li>
                <li style={{ paddingBottom: "5%" }}>Term and conditions</li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10%",
              }}
            >
              <h3>Company</h3>
              <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
                <li style={{ paddingBottom: "5%" }}>Privacy policy</li>
                <li style={{ paddingBottom: "5%" }}>Copyright</li>
                <li style={{ paddingBottom: "5%" }}>Term and conditions</li>
              </ul>
            </div>
          </div>
          <div className="bottomFooter">
            <p>Copyright &#169; 2023 NexaPro</p>
            <img src={require("../Icons/Logo1.png")} width={"50px"} />
            <div className="social">
              <NavLink to={"#"}>
                <img src={require("../Icons/Home/facebook.png")} />
              </NavLink>
              <NavLink to={"#"}>
                <img src={require("../Icons/Home/Instagram.png")} />
              </NavLink>
              <NavLink to={"#"}>
                <img src={require("../Icons/Home/LinkedIn.png")} />
              </NavLink>
              <NavLink to={"#"}>
                <img src={require("../Icons/Home/TwitterX.png")} />
              </NavLink>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function scrollToFunction() {
  var element = document.getElementById("scrollToElement");
  var scrollToTop = window.pageYOffset + element.getBoundingClientRect().top; // Get the top position of the element relative to the viewport
  var scrollStep = scrollToTop / 100; // Calculate how much to scroll on each step

  // Scroll function
  var scrollInterval = setInterval(function () {
    if (window.pageYOffset < scrollToTop) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 10); // Scroll every 10 milliseconds for smoother animation
}

export default home;
