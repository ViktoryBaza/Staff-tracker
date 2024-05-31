import React from "react";
import { useAppSelector } from "../app/hooks";
import {
  selectSelectedEmployee,
  Address,
} from "../features/employees/employeesSlice";
import { useNavigate } from "react-router-dom";
import "./EmployeInfo.css";

const EmployeInfo: React.FC = () => {
  const selectedEmployee = useAppSelector(selectSelectedEmployee);
  const navigate = useNavigate();

  if (!selectedEmployee) {
    return <div>Выберите сотрудника</div>;
  }

  return (
    <div className="employee">
      <h2 className="title">Информация о сотруднике</h2>
      <div className="employee-list">
        <p>Name:</p>
        <p className="employee_text">{selectedEmployee.name}</p>
      </div>
      <div className="employee-list">
        <p>Username: </p>
        <p className="employee_text">{selectedEmployee.username}</p>
      </div>
      <div className="employee-list">
        <p>Email: </p>
        <p className="employee_text">{selectedEmployee.email}</p>
      </div>
      <div className="employee-list">
        <p>Address: </p>
        <p className="employee_text">
          {selectedEmployee.address.street}, {selectedEmployee.address.city}
        </p>
      </div>
      <div className="employee-list">
        <p>Zipcode: </p>
        <p className="employee_text">
          {selectedEmployee.address.suite}, {selectedEmployee.address.zipcode}
        </p>
      </div>
      <div className="employee-list">
        <p>Geo: </p>
        <p className="employee_text">
          {selectedEmployee.address.geo.lat},{selectedEmployee.address.geo.lng}
        </p>
      </div>
      <div className="employee-list">
        <p>Phone: </p>
        <p className="employee_text">{selectedEmployee.phone}</p>
      </div>
      <div className="employee-list">
        <p>Website: </p>
        <p className="employee_text">{selectedEmployee.website}</p>
      </div>
      <div className="employee-list">
        <p>Company: </p>
        <p className="employee_text">{selectedEmployee.company.name}</p>
      </div>
      <div className="employee-list">
        <p>Catch Phrase: </p>
        <p className="employee_text">{selectedEmployee.company.catchPhrase}</p>
      </div>
      <div className="employee-list">
        <p>BS: </p>
        <p className="employee_text">{selectedEmployee.company.bs}</p>
      </div>
      <div className="button_container">
        <button onClick={() => navigate("/")}>Назад</button>
      </div>
    </div>
  );
};

export default EmployeInfo;
