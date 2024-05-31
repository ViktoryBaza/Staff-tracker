import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchEmployees, selectAllEmployees, selectEmployee } from '../features/employees/employeesSlice';
import { useNavigate } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList: React.FC = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectAllEmployees);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleClick = (id: number) => {
    dispatch(selectEmployee(id));
    navigate(`/employees/${id}`);
  };

  return (
    <div className='employees'>
      <h2 className='title'>Список сотрудников</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} onClick={() => handleClick(employee.id)}>
            {employee.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
