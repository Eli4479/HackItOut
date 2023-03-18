import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./LandingPage.css";

const LandingPage = () => {
  const [text, setText] = useState("Synergy");
  const props = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(-50px)", opacity: 0 },
    delay: 650,
  });

  const props2 = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(50px)", opacity: 0 },
    delay: 800,
  });
  useEffect(() => {
    const writeText = (text) => {
      let i = 0;
      const interval = setInterval(() => {
        setText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            setText("");
            writeText("Synergy!");
          }, 2500); // wait for 2 seconds before starting the next loop
        }
      }, 200);
    };
    writeText("Synergy!");

    //     }
    //   }, 300);
    // };
    // writeText("Synergy");
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: "url('imggg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <animated.h1 className="text-white text-6xl font-bold mb-8" style={props}>
        Welcome to <span className="cursive">{text}</span>
      </animated.h1>
      <animated.h4
        className="font-montserrat text-white w-3/4 text-2xl font-semibold mb-8"
        style={props}
      >
        A Collaborative Web App, which aims to help people working as a team in
        hybrid workspace to collaborate in a better way!
      </animated.h4>

      <animated.button
        className="bg-gray-700 border text-white font-bold py-2 px-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        style={props2}
      >
        Get Started
      </animated.button>
    </div>
  );
};

export default LandingPage;

// import React, { useEffect, useState } from "react";
// import { useSpring, animated } from "react-spring";

// const LandingPage = () => {
//   const [text, setText] = useState("My Page");
//   const props = useSpring({
//     to: { transform: "translateY(0)", opacity: 1 },
//     from: { transform: "translateY(-50px)", opacity: 0 },
//     delay: 500,
//   });

//   const props2 = useSpring({
//     to: { transform: "translateY(0)", opacity: 1 },
//     from: { transform: "translateY(50px)", opacity: 0 },
//     delay: 800,
//   });

//   useEffect(() => {
//     const writeText = (text) => {
//       let i = 0;
//       const interval = setInterval(() => {
//         setText(text.slice(0, i + 1));
//         i++;
//         if (i === text.length) {
//           clearInterval(interval);
//         }
//       }, 100);
//     };
//     writeText("My Page");
//   }, []);

//   return (
//     <div className="bg-blue-500 flex flex-col items-center justify-center h-screen">
//       <animated.h1 className="text-white text-6xl font-bold mb-8" style={props}>
//         Welcome to <span className="cursive">{text}</span>
//       </animated.h1>
//       <animated.button
//         className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
//         style={props2}
//       >
//         Get Started
//       </animated.button>
//     </div>
//   );
// };

// export default LandingPage;
