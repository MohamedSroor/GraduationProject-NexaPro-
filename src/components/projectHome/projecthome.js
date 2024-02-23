import React, { useState } from "react";
import "../style.css";
import { TodoWrapper } from "../ToDoList/TodoWrapper";
import SideBar from "../SideBar/SideBar";
import SliderComponent from "./Slider";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function Projecthome() {
  const [selectedButton, setSelectedButton] = useState(1);

  return (
    <div>
      <SideBar
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <div className="project-home">
        <h1 style={{ opacity: "0.7", marginBottom: "2%" }}>Projects</h1>
        <div className="first-section">
          <div className="container-home">
            <div className="card-home">
              <div className="imgBx">
                <h4>3</h4>
                <h1>In Progress</h1>
              </div>
            </div>
            <div className="card-home">
              <div className="imgBx">
                <h4>2</h4>
                <h1>New Assigned</h1>
              </div>
            </div>
            <div className="card-home">
              <div className="imgBx">
                <h4>5</h4>
                <h1>Project Completed</h1>
              </div>
            </div>
            <div className="card-home">
              <div className="imgBx">
                <h4>1</h4>
                <h1>Overdue</h1>
              </div>
            </div>
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div>
        <h1 style={{ opacity: "0.7", marginBottom: "2%" }}>Tasks</h1>
        <SliderComponent />
        <div className="container-home2">
          <div className="big-card-home">
            <h1 style={{ marginBottom: "10%" }}>Schedule</h1>
            <div className="schedule-card">
              <h5>Group Meeting</h5>
              <div className="imgBx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>11:00 AM</p>
              </div>
            </div>
            <hr />
            <div className="schedule-card">
              <h5>Group Meeting</h5>
              <div className="imgBx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>11:00 AM</p>
              </div>
            </div>
            <hr />
            <div className="schedule-card">
              <h5>Group Meeting</h5>
              <div className="imgBx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>11:00 AM</p>
              </div>
            </div>
            <hr />
            <div className="schedule-card">
              <h5>Group Meeting</h5>
              <div className="imgBx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>11:00 AM</p>
              </div>
            </div>
            <hr />
            <div className="schedule-card">
              <h5>Group Meeting</h5>
              <div className="imgBx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>11:00 AM</p>
              </div>
            </div>
          </div>
          <TodoWrapper />
        </div>
      </div>
    </div>
  );
}

export default Projecthome;
