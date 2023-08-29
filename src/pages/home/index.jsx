import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";
import Modal from "react-modal";
import states from "../../data/states.json";
import departments from "../../data/departements.json";

function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const submitForm = (e) => {
    setIsOpen(true);
    e.preventDefault();
    const EmployeesList =
      JSON.parse(localStorage.getItem("EmployeesList")) || [];
    const Employee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth.toLocaleDateString("en-US"),
      startDate: startDate.toLocaleDateString("en-US"),
      street,
      city,
      state: state.value,
      zipCode,
      department: department.value,
    };
    EmployeesList.push(Employee);
    localStorage.setItem("EmployeesList", JSON.stringify(EmployeesList));
  };

  return (
    <>
      <div
        className="home"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>HRnet</h1>
        <div>
          <Link to={`/employees-table`}>View Current Employees</Link>
        </div>
        <h2>Create Employee</h2>
        <form onSubmit={submitForm} className="form">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <DatePicker
              type="date"
              id="dateOfBirth"
              selected={dateOfBirth}
              onChange={(date) => setdateOfBirth(date)}
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              type="date"
              id="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <fieldset className="address-insert">
            <legend className="address-title">Address</legend>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <label htmlFor="state">State</label>
            <Select
              id="state"
              value={state}
              onChange={(selectedOption) => setState(selectedOption)}
              options={states}
              getOptionLabel={(option) => option.name}
            />
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </fieldset>
          <div>
            <label htmlFor="department">Department</label>
            <Select
              id="department"
              value={department}
              onChange={(selectedOption) => setDepartment(selectedOption)}
              options={departments}
              getOptionLabel={(option) => option.name}
            />
          </div>

          <button className="save-button" type="submit">
            Save
          </button>
        </form>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="modal-close-button" onClick={closeModal}>
            X
          </button>
          <div>You have been registered.</div>
        </Modal>
      </div>
    </>
  );
}

export default Home;
