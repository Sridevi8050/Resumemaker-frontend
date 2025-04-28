import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import html2pdf from "html2pdf.js";
import { Link, useLocation } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "font",
  "size",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "script",
  "list",
  "bullet",
  "align",
  "indent",
  "link",
  "image",
];

const Texteditor = ({ value, onChange, template }) => {
  const quillRef = useRef();
  const location = useLocation();
  const formData = location.state; 
 
  const handleDownload = () => {
    const editor = document.querySelector(".ql-editor");
    if (!editor) return;

    const cloned = editor.cloneNode(true);
    const style = document.createElement("style");

    const templateStyles = {
      modern: `
        h2 { color: #000000; font-size: 26px; font-weight: bold; }
        h3 { color: #1D4ED8; font-size: 18px; font-weight: 600; }
        ul { padding-left: 1.2rem; }
        li { margin-bottom: 4px; }
      `,
      classic: `
        h2 { color: #000000; font-size: 26px; font-weight: bold;}
        h3 {font-size: 18px; font-weight: 600; }
        ul { list-style: square; padding-left: 1.2rem; }
        li { margin-bottom: 6px; }
      `,
      creative: `
  h2 { color: #000000; font-size: 30px; font-weight: bold; }
  h3 { color: red; font-size: 24px;}
  div { background-color:#FAEBD7; border-radius: 25px;}
  .profile-section { height: 10px; padding: 2px; background-color: #FFEBEE; }
  .experience-section { padding: 2px; background-color: #E8F5E9; }
  .skills-section { padding: 2px; background-color: #FFF3E0; }
  .education-section { padding: 2px; background-color: #F3E5F5; }
  .projects-section { padding: 2px; background-color: #E3F2FD; }
  .declaration-section { padding: 2px; background-color: #FFFDE7; }
  ul { padding-left: 1.2rem; }
  li { margin-bottom: 4px; color: #374151; }
`,
    };

    style.textContent = templateStyles[template] || templateStyles["modern"];
    cloned.appendChild(style);
     
    const container = document.createElement("div");
    container.appendChild(cloned);
  
    const opt = {
      margin: 0.5,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(container).set(opt).save();
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen">
      <div className="sm:w-[800px] mx-auto flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Resume Preview</h1>
        <Link
          to={`/details/${template}`}
          state={formData} 
          className="bg-slate-600 px-4 py-2 rounded text-white mt-2 md:mt-0"
        >
          Back to details
        </Link>
      </div>

      <div
        className="h-[550px] sm:h-full shadow-xl sm:w-[800px] flex flex-col items-center justify-center space-y-48 sm:space-y-20 border-l-4 border-blue-600 rounded-lg p-4 " 
        style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)" }}
        ref={quillRef}
      >
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder="Start typing here..."
          style={{ height: "300px", width: "90%" }}
         
        />

        <button
          className="bg-blue-800 text-white w-full md:w-[700px] rounded py-2"
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Texteditor;