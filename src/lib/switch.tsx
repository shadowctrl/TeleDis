"use client";
const handleClick = async (value: boolean) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      value,
    }),
  };
  const response = await fetch("http://localhost:3000/api/telegram", options);
};

const Switch = () => {
  return (
    <div>
      <div className="hero-switch" onClick={() => handleClick(true)}>
        On
      </div>
      <div className="hero-switch" onClick={() => handleClick(false)}>
        off
      </div>
    </div>
  );
};

export default Switch;
