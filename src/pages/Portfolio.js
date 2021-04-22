
import React from "react";
import Card from "../components/Card";

function Portfolio() {
  return (
    <section className="container">
      <h1>Portfolio</h1>
      <div className="content clearfix">
        <Card href="https://mich3ll3e.github.io/My-travel-planner-app/" image="/images/mytravelplanner.jpeg" alt="myTravelPlanner" title="My Travel Planner" />

        <Card href="https://mich3ll3e.github.io/HomeworkWeek4/" image="/images/password.jpeg" alt="PasswordGenerator" title="Password Generator" />

        <Card href="https://mich3ll3e.github.io/HOMEWORKWEEK3/" image="/images/quiz.jpeg" alt="CodingQuiz" title="Coding Quiz App" />

        <Card href="https://arcane-thicket-88504.herokuapp.com/" image="/images/eatdaburger.jpeg" alt="EatDaBurger" title="Eat Da Burger" />

        <Card href="https://group-3-project-2.herokuapp.com/" image="/images/ChatRUs.jpeg" alt="ChatRUs" title="Chat R Us" />

        <Card href="hhttps://github.com/mich3ll3e/Employee-Tracker" image="/images/EmployeeTracker.jpeg" alt="EmployeeTracker" title="Employee Tracker" />
      </div>
    </section>
  );
}

export default Portfolio; 