import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

import { Course } from "./components/Course";
import { Company } from "./components/Company";
import { Participants } from "./components/Participants";
import { Center } from "./styles/Center";
import { Block } from "./styles/Block";

import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/courses.json");
      const json = await res.json();
      setCourses(json);
    }
    fetchData();
  }, []);

  return (
    <>
      <Course passState={state => setSelectedCourse(state)} data={courses} />
      <Company />
      <Participants />
      <Block>
        <Center>
          <Button fluid color="brown" onClick={() => console.log(selectedCourse)}>
            Submit
          </Button>
        </Center>
      </Block>
    </>
  );
}

export default App;
