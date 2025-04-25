import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Texteditor from "./Texteditor";
// import "./Creative.css"

const Creative = () => {
  const location = useLocation();
  const formData = location.state;

  const [editorValue, setEditorValue] = useState("");

  useEffect(() => {
    if (formData && formData.keyPoints) {
      axios
        .post("https://resumemaker-backend.onrender.com/categorize", {
          keyPoints: formData.keyPoints,
        })
        .then((res) => {
          const { Experience, Education, Skills, Projects } = res.data;

          const content = `
       <div>
         <div>
          <h2>${formData.name}</h2>
          <p>${formData.email} | ${formData.mobile}</p>
         </div>
    
         <div style="background-color: #FFEBEE; padding: 10px;">
           <h3>Profile</h3>
           <p>A self-motivated, passionate, and hardworking, seeking an opportunity to work in a challenging organization. I aim to utilize my skills and knowledge to contribute to the growth of the organization, and I am always open to learning new skills to enhance my knowledge.</p>
        </div>

        <div style="background-color: #E8F5E9; padding: 10px;">
          <h3>Experience</h3>
          <p>${Experience.join(" ")} I have gained hands-on experience through academic and personal projects. These helped me improve my technical skills, understand real-world problem-solving, and work effectively in a team. I'm comfortable using development tools and managing tasks within deadlines.</p>
        </div>

    <div style="background-color: #FFF3E0; padding: 10px;">
      <h3>Skills</h3>
      <ul>${Skills.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div style="background-color: #F3E5F5; padding: 10px;">
      <h3>Education</h3>
      <ul>${Education.map(item => `<li>${item}</li>`).join("")}</ul>
    </div> 

    <div style="background-color: #E3F2FD; padding: 10px;">
      <h3>Projects</h3>
      <ul>${Projects.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div style="background-color: #FFFDE7; padding: 10px;">
      <h3>Declaration</h3>
      <p>I hereby declare that the above information is true to the best of my knowledge and belief.</p>
    </div>
    </div>
  
`;
          setEditorValue(content);
        })
        .catch((err) => console.error("API error:", err));
    }
  }, [formData]);

  return (
    <div className="p-6 creative-editor"  >
      <Texteditor value={editorValue} onChange={setEditorValue} template="creative" />
    </div>
  );
};

export default Creative;


