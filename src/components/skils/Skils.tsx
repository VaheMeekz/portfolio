import React from "react";
import "./Skils.css";
const Skils = () => {
  const skils = [
    {
      id: 1,
      name: "JS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/160px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      id: 2,
      name: "Node JS",
      icon: "https://miro.medium.com/max/1400/1*bc9pmTiyKR0WNPka2w3e0Q.png",
    },
    {
      id: 3,
      name: "React JS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      id: 4,
      name: "JS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/160px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      id: 5,
      name: "Node JS",
      icon: "https://miro.medium.com/max/1400/1*bc9pmTiyKR0WNPka2w3e0Q.png",
    },
  ];

  return (
    <div className="skilBox">
      <div className="titleBox">
        <h1>Skils</h1>
      </div>
      <div className="skilOptions">
        {skils.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img src={item.icon} alt="image" />
              </div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skils;
