import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { LineChart } from "@mui/x-charts/LineChart";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import Button from "@mui/material/Button";
import SendtaskPopup from "./SendtaskPopup";
import "../style.css";

function Analytics() {
  const [selectedButton, setSelectedButton] = useState(3);

  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [earnings, setEarnings] = useState(0);

  const addIncome = (amount) => {
    setIncome(income + amount);
  };

  const addExpenses = (amount) => {
    setExpenses(expenses + amount);
  };

  useEffect(() => {
    setIncome(705000);
    setExpenses(471000);
  });

  useEffect(() => {
    setEarnings(income - expenses);
  }, [income, expenses]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "jobtitle",
      headerName: "Job Title",
      width: 160,
    },
    {
      field: "progress",
      headerName: "Progress",
      width: 150,
      renderCell: (params) => (
        <LinearProgress
          variant="determinate"
          value={params.row.progress || 0}
          style={{ width: "100%" }}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#0070ff",
              padding: "8px",
              fontSize: "12px",
            }}
            onClick={openForm}
          >
            Send Task
          </Button>
          <SendtaskPopup
            isOpen={isFormOpen}
            onClose={closeForm}
            onSendtask={handleSendTask}
          />
        </>
      ),
    },
    {
      field: "Tasks",
      headerName: "Tasks",
      width: 100,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#0070ff",
              padding: "8px",
              fontSize: "12px",
            }}
            onClick={openForm}
          >
            See Task
          </Button>
          <SendtaskPopup
            isOpen={isFormOpen}
            onClose={closeForm}
            onSendtask={handleSendTask}
          />
        </>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Sroor",
      firstName: "Mohamed",
      jobtitle: "Team Leader",
      progress: 20,
    },
    {
      id: 2,
      lastName: "Ahmed",
      firstName: "Helal",
      jobtitle: "Project Manager",
      progress: 40,
    },
    {
      id: 3,
      lastName: "Ahmed",
      firstName: "Mostafa",
      jobtitle: "Full-Stack Developer",
      progress: 50,
    },
    {
      id: 4,
      lastName: "Medhat",
      firstName: "Sheimaa",
      jobtitle: "Back-End Developer",
      progress: 60,
    },
    {
      id: 5,
      lastName: "Seliem",
      firstName: "Sondos",
      jobtitle: "ML Developer",
      progress: 70,
    },
    {
      id: 6,
      lastName: "Mohamed",
      firstName: "Eman",
      jobtitle: "Back-Stack Developer",
      progress: 80,
    },
    {
      id: 7,
      lastName: "Mostafa",
      firstName: "Radwa",
      jobtitle: "UI/UX Designer",
      progress: 90,
    },
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [task, setTask] = useState([]);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleSendTask = (newTask) => {
    const updatedTask = [newTask, ...task];
    setTask(updatedTask);

    localStorage.setItem("task", JSON.stringify(updatedTask));
    // Close the popup form
    closeForm();
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("task");
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div>
      <SideBar
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <div className="analytics">
        <h1 style={{ opacity: "0.7", marginBottom: "3%" }}>Team Members</h1>
        <div className="member-list">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
        <h1 style={{ opacity: "0.7", marginBottom: "3%" }}>Analysis</h1>
        <div className="analytics-content">
          <div className="card-analytics">
            <div className="card-analytics-header">
              <h4>
                {"$ "}
                {expenses}
              </h4>
              <h1>Expenses</h1>
            </div>
          </div>
          <div className="card-analytics">
            <div className="card-analytics-header">
              <h4>
                {"$ "}
                {income}
              </h4>
              <h1>Income</h1>
            </div>
          </div>
          <div className="card-analytics">
            <div className="card-analytics-header">
              <h4>
                {"$ "}
                {earnings}
              </h4>
              <h1>Earnings</h1>
            </div>
          </div>
        </div>
        <div className="project-details">
          <div className="data-analysis">
            <div className="analysis-details">
              <div className="analysis-overlay">
                <h1>Earnings Analysis</h1>
              </div>
            </div>
            <LineChart
              xAxis={[{ data: [1, 5, 9, 12] }]}
              series={[
                {
                  data: [504780, 100000, 202140, 800000],
                },
              ]}
              width={500}
              height={300}
            />
          </div>
          <div className="data-analysis">
            <div className="analysis-details">
              <div className="analysis-overlay">
                <h1 style={{ marginBottom: "40%" }}>Sprint's Progress</h1>
              </div>
            </div>
            <CircularProgressWithLabel value={75} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
