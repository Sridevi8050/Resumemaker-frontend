import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const Details = () => {
  const { templateType } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    keyPoint: '',
  });

  const [keyPoints, setKeyPoints] = useState([]);

  useEffect(() => {
    // Check if there's state passed during navigation (from the preview page)
    if (location.state && location.state.name) {
      setFormData({
        name: location.state.name || '',
        mobile: location.state.mobile || '',
        email: location.state.email || '',
        keyPoint: '', // Reset keyPoint input
      });
      setKeyPoints(location.state.keyPoints || []);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddKeyPoint = () => {
    if (formData.keyPoint.trim() !== '') {
      setKeyPoints([...keyPoints, formData.keyPoint]);
      setFormData({ ...formData, keyPoint: '' });
    }
  };

  const handleRemoveKeyPoint = (index) => {
    const updated = [...keyPoints];
    updated.splice(index, 1);
    setKeyPoints(updated);
  };

  const handleGenerateResume = async () => {
    try {
      const response = await fetch('http://localhost:5000/save-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          keyPoints: keyPoints,
          template: templateType,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save resume');
      }

      const savedResume = await response.json();
      console.log('✅ Resume saved:', savedResume);

      navigate(`/${templateType}`, {
        state: {
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          keyPoints: keyPoints,
        },
      });
    } catch (error) {
      console.error('❌ Error saving resume:', error.message);
      alert('Something went wrong while saving your resume. Please try again.');
    }
  };

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.mobile.trim() !== '' &&
    formData.email.trim() !== '' &&
    keyPoints.length > 0;

  const isKeyPointValid = formData.keyPoint.trim() !== '';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Enter Your Details</h2>
      <div className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <div className="flex flex-col sm:flex-row mb-4 gap-2">
          <input
            type="text"
            name="keyPoint"
            placeholder="Resume Key Points"
            value={formData.keyPoint}
            onChange={handleChange}
            className="flex-grow px-4 py-2 border rounded"
          />
          <button
            onClick={handleAddKeyPoint}
            disabled={!isKeyPointValid}
            className={`px-4 py-2 rounded text-white ${
              isKeyPointValid ? 'bg-blue-800 hover:bg-blue-900' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Add
          </button>
        </div>

        <ul className="mb-4 max-h-40 overflow-y-auto">
          {keyPoints.map((point, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded text-sm"
            >
              <span className="pr-2">{point}</span>
              <button
                onClick={() => handleRemoveKeyPoint(index)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={handleGenerateResume}
          disabled={!isFormValid}
          className={`w-full py-2 rounded text-white ${
            isFormValid ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Generate Resume
        </button>
      </div>
    </div>
  );
};

export default Details;