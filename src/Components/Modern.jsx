import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Texteditor from "./Texteditor";

const Modern = () => {
  const location = useLocation();
  const formData = location.state;

  const [categorizedData, setCategorizedData] = useState(null);
  const [editorValue, setEditorValue] = useState("");

 
  useEffect(() => {
    if (formData && formData.keyPoints) {
      axios
        .post("http://localhost:5000/categorize", {
          keyPoints: formData.keyPoints,
        })
        .then((res) => {
          setCategorizedData(res.data);

          // Compose resume content for Quill
          const { Experience, Education, Skills, Projects } = res.data;
          const content = `
            <h2>${formData.name}</h2>
            <p> ${formData.email} | ${formData.mobile}</p>
            
            <h3>Profile</h3>
            <p> A self-motivated, passionate, and hardworking, seeking an opportunity to work in a challenging organization. I aim to utilize my skills and knowledge to contribute to the growth of the organization, and I am always open to learning new skills to enhance my knowledge.</p>

            <h3>Experience</h3>
            <p>${ Experience.join(" ")} I have gained hands on experience through academic, and personal projects. These helped me improve my technical skills, understand real-world problem-solving, and work effectively in a team. I'm comfortable using development tools and managing tasks within deadlines</p>

            <h3>Skills</h3>
            <ul>${Skills.map(item => `<li>${item}</li>`).join("")}</ul>
              
            <h3>Education</h3>
            <ul>${Education.map(item => `<li>${item}</li>`).join("")}</ul>

            <h3>Projects</h3>
            <ul>${Projects.map(item => `<li>${item}</li>`).join("")}</ul>
          
            <h3>Declaration</h3>
            <p>I hereby declare that the above information is true to the best of my knowledge and belief.</p>
          `;
          setEditorValue(content);
        })
        .catch((err) => console.error("API error:", err));
    }
  }, [formData]);

  return (
    <div className="p-6 modern-quill">
      <Texteditor value={editorValue} onChange={setEditorValue} template="modern" />
    </div>
  );
};

export default Modern;
