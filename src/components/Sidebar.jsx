import React from 'react'
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
<div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
  <div className="sidebar-wrapper">
    <div className="logo">
      <a href="https://www.creative-tim.com" className="simple-text">
        Expense Manager
      </a>
    </div>
    <ul className="nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/user/dashboard">
          <i className="nc-icon nc-chart-pie-35" />
          <p>Dashboard</p>
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/user/addGoal">
          <i className="nc-icon nc-notes" />
          <p>Add Goal</p>
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/user/addexpense">
          <i className="nc-icon nc-notes" />
          <p>Add Expense</p>
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/user/expenselist">
          <i className="nc-icon nc-notes" />
          <p>View Expenses</p>
        </Link>
      </li>
    </ul>
  </div>
  <div className="sidebar-background" style={{backgroundImage: 'url(../assets/img/sidebar-5.jpg)'}} /></div>
  )
}

export default Sidebar;