import React, { useState } from "react";
import { qa } from "../../contants/en/QA/index";
import KeepMountedModal from "../../components/KeepMountedModal";
import { useNavigate } from "react-router-dom";

const QA = () => {
  const [progress, setProgress] = useState(0);
  const [tempProgress, setTempProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleProgressChange = (event) => {
    const newProgress = Math.min(Math.max(0, event.target.value), 100); // Ensures value stays between 0-100
    setTempProgress(newProgress);
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    setProgress(tempProgress);
    console.log(tempProgress);
    navigate('/image')
     // Send tempProgress to the backend here
    // Example of sending data to the backend
    // fetch('/api/submit-progress', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ progress: tempProgress })
    // });
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleOutsideClick = () => {
    setOpen(false);
  };

  return (
    <>
   
      <h1 className="bg-[#8A8A8A] w-64 text-center rounded-md text-2xl p-3 px-5 m-auto mt-10 font-bold text-white">
        Question/Answer
      </h1>
      
      {qa &&
        qa?.map((value, index) => (
          <div
            key={index}
            className="bg-white px-20  py-10 text-center max-[400px]:px-5 w-[60%] m-auto  max-[700px]:w-[100%]"
          >
            <div className="flex items-center justify-center mb-8">
              <p className="text-2xl ">
                <span>Q:</span> {value.qa}
              </p>
              {/* <span className="text-gray-500 text-sm">0%</span>
                     <span className="text-gray-500 text-sm">100%</span> */}
            </div>

            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-500 text-sm  ">{tempProgress}%</span>
              <input
                type="range"
                min="0"
                max="100"
                value={tempProgress}
                onChange={handleProgressChange}
                className="w-full focus:outline-none"
              />
            </div>
            <button
              type="submit"
              onClick={openModal}
              className="bg-[#1976d2]   text-white font-medium py-2 px-4 rounded-md focus:outline-none mt-10"
            >
              Submit ({tempProgress}%)
            </button>
            {open && (
              <KeepMountedModal
                open={open}
                handleOutsideClick={handleOutsideClick}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        ))}
        
    </>
  );
};

export default QA;
