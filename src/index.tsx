import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeDetailsPage from './pages/EmployeInfoPage';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/employees/:id" element={<EmployeeDetailsPage />} />
          <Route path="/" element={<EmployeeListPage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
