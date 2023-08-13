import React from "react";
import "./Calender.css";
import { CaretLeft, CaretRight } from "phosphor-react";

const Calender = () => {
  return (
    <section className="calender_container">
      <div className="calender_header">
        <h3>February</h3>
        <div className="calender_year">
          <CaretLeft className="calender_icon" weight="bold" />
          <h3>2023</h3>
          <CaretRight className="calender_icon" weight="bold" />
        </div>
      </div>
      <div className="calender_monthly_container">
        <div className="calender_days_of_week space_between">
          <h4 className="calender_item">Sun</h4>
          <h4 className="calender_item">Mon</h4>
          <h4 className="calender_item">Tue</h4>
          <h4 className="calender_item">Wed</h4>
          <h4 className="calender_item">Thu</h4>
          <h4 className="calender_item">Fri</h4>
          <h4 className="calender_item">Sat</h4>
        </div>
        <div className="calender_days_of_month space_between">
          <h4 className="calender_item">1</h4>
          <h4 className="calender_item">2</h4>
          <h4 className="calender_item">3</h4>
          <h4 className="calender_item">4</h4>
          <h4 className="calender_item">5</h4>
          <h4 className="calender_item">6</h4>
          <h4 className="calender_item">7</h4>
          <h4 className="calender_item">8</h4>
          <h4 className="calender_item">9</h4>
          <h4 className="calender_item">10</h4>
          <h4 className="calender_item">11</h4>
          <h4 className="calender_item">12</h4>
          <h4 className="calender_item">13</h4>
          <h4 className="calender_item">14</h4>
          <h4 className="calender_item">15</h4>
          <h4 className="calender_item">16</h4>
          <h4 className="calender_item">17</h4>
          <h4 className="calender_item">18</h4>
          <h4 className="calender_item">19</h4>
          <h4 className="calender_item">20</h4>
          <h4 className="calender_item">21</h4>
          <h4 className="calender_item">22</h4>
          <h4 className="calender_item">23</h4>
          <h4 className="calender_item">24</h4>
          <h4 className="calender_item">25</h4>
          <h4 className="calender_item">26</h4>
          <h4 className="calender_item">27</h4>
          <h4 className="calender_item">28</h4>
        </div>
      </div>
    </section>
  );
};

export default Calender;
