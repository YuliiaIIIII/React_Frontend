import {useState} from "react";
import WorkExp from "./WorkExp";
import WorkExpAddForm from "./WorkExpAddForm";

const listOfExperience = [
  {
    title: "Personal trainer. Senior coach.",
    name: "KD GYM Fitnes' club",
    description: "Conducted personal training and introductory briefings. Monitored the quality of services provided by other trainers. Interaction with the FBBU on issues of organization, preparation and holding of the ''Kyiv Cup of Bodybuilding and Fitness'' competitions and regional competitions and tournaments",
    link: "https://www.kdgym.com.ua/"
  },
  {
    title: "Head assistant.",
    name: "West-East Group",
    description: "Carried out the instructions of the head of the company. Was responsible for working documentation and communication between the manager and the divisions. Participated in preparation for negotiations with investment companies and state institutions. Worked on creating a business plan. Prepared materials for presentations and project descriptions. Organized the company's participation in an international exhibition INNOVATION MARKET",
    link: "https://west-east.com.ua/"
  }
]

function WorkExpInfo() {
  const addNewExperience = (newWorkExperience) => {
    setInputData((prevExperience) => [...prevExperience, newWorkExperience]);
  };
  return (
    <div className="work-exp">
      <h2 className="title fw600">
        Work experience
      </h2>
      {listOfExperience.map((item) => (
          <WorkExp 
            key={Math.random()}
            title={item.title} 
            description={item.description} 
            name={item.name} 
            link={item.link}
          />
          
          )
        )
      }
      <WorkExpAddForm />
    </div>
  );
}

export default WorkExpInfo