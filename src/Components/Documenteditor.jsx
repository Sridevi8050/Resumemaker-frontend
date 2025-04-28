import React, { useState, useRef } from "react"; 
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import html2pdf from "html2pdf.js";
import * as mammoth from "mammoth"; 


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

const Documenteditor = () => {
  const [content, setContent] = useState("");


  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      // if docx file
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setContent(result.value);
    } else if (file.type === "text/plain") {
      // if txt file
      const reader = new FileReader();
      reader.onload = () => {
        setContent(reader.result);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a .docx or .txt file only!");
    }
  };

//   const handleDownload = () => {
//     const editor = document.querySelector(".ql-editor");
//     if (!editor) return;
  
//     const cloned = editor.cloneNode(true);
//     const container = document.createElement("div");
  
    
//     cloned.style.color = "inherit"; 
//     cloned.style.fontFamily = "inherit"; 
//     cloned.style.fontSize = "inherit"; 
 
//     const styleTag = document.createElement("style");
//     styleTag.innerHTML = `
//       .ql-editor a {
//         color: blue !important;    
//         text-decoration: underline !important;  
//       }
//     `;
//     container.appendChild(styleTag);
//     container.appendChild(cloned);
  
//     const opt = {
//       margin: 0.5,
//       filename: "document.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//     };
  
//     html2pdf().from(container).set(opt).save();
//   };




const handleDownload = () => {
    const editor = document.querySelector(".ql-editor");
    if (!editor) return;
  
    const cloned = editor.cloneNode(true);
    const container = document.createElement("div");
  
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .ql-editor h1 { font-size: 2em; font-weight: bold; margin: 0.67em 0; }
      .ql-editor h2 { font-size: 1.5em; font-weight: bold; margin: 0.75em 0; }
      .ql-editor h3 { font-size: 1.17em; font-weight: bold; margin: 0.83em 0; }
      .ql-editor p { margin: 0.5em 0; }
      .ql-editor strong { font-weight: bold; }
      .ql-editor em { font-style: italic; }
      .ql-editor u { text-decoration: underline; }
      .ql-editor a { color: blue; text-decoration: underline; }
      .ql-editor li { margin-left: 1.5em; }
    `;
  
    container.appendChild(styleTag);
    container.appendChild(cloned);
  
    const opt = {
      margin: 0.5,
      filename: "document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
  
    html2pdf().from(container).set(opt).save();
  };
  
 
    return (
    <div className="flex flex-col items-center justify-center sm:min-h-screen space-y-6 p-4">
      <input type="file" accept=".docx, .txt" onChange={handleFileChange} className="mb-4" />
      

      <div className="w-full h-[500px] md:w-[800px] md:h-[450px] border p-4 rounded shadow space-y-32 sm:space-y-20">
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          placeholder="Uploaded content will appear here..."
          style={{ height: "300px" }}
          theme="snow"
        />
        <button
        onClick={handleDownload}
        className="bg-blue-800 hover:bg-blue-700 text-white w-full sm:w-full font-bold py-2 px-4 rounded"
      >
        Download as PDF
      </button>
      </div>

     
    </div>
  );
};

export default Documenteditor;






