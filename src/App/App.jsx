import React from "react";
import Card from "../components/UI/Card";
import ToDoForm from "../components/ToDoList/ToDoForm";
import "./App.css";
const App = () => {
  return (
    <section id="forms">
      <Card>
        <ToDoForm />
      </Card>
    </section>
  );
};

export default App;
