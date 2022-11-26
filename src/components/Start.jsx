import { useRef } from "react";

const Start = ({ setUsername }) => {
  const userRef = useRef();

  const handleClick = () => {
    userRef.current.value && setUsername(userRef.current.value);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="Enter your name"
        ref={userRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

export default Start;
