// import React, { useState, useEffect } from "react";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

// function SeetaskPopup() {
//   const [tasks, setTasks] = useState([]);
//   const [modalIsOpen1, setModalIsOpen1] = useState(false);

//   const openModal1 = () => {
//     setModalIsOpen1(true);
//   };

//   const closeModal1 = () => {
//     setModalIsOpen1(false);
//   };

//   const handleSendTask = (newTask) => {
//     const updatedTask = [newTask, ...tasks];
//     setTasks(updatedTask);

//     localStorage.setItem("tasks", JSON.stringify(updatedTask));
//     closeModal1();
//   };

//   useEffect(() => {
//     const storedTasks = localStorage.getItem("tasks");
//     if (storedTasks) {
//       setTasks(JSON.parse(storedTasks));
//     }
//   }, []);

//   return (
//     <div>
//       <button onClick={openModal1}>Add Task</button>
//       <Modal isOpen={modalIsOpen1} onRequestClose={closeModal1}>
//         {tasks.map((task, index) => (
//           <div key={index}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//           </div>
//         ))}
//       </Modal>
//     </div>
//   );
// }

// export default SeetaskPopup;
