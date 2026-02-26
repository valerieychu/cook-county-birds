import React from "react";
import "../styles/global.less";
import "../styles/home.less";
import image from "../images/valeriechu.png";
import divider from "../images/divider.svg";
import Header from "./header";
import Footer from "./footer";
import aetchome from "../images/aetchome.png";
import blobblue from "../images/blobblue.png";
import blobgreen from "../images/blobgreen.png";
import blobpink from "../images/blobpink.png";
import arrowdown from "../images/arrowdown.png";

const Home = () => {
  return (
    <>
      <div className="intro">
        <div className="centered-text">
          <h1 className="h1">Cook County Birds</h1>
          {/* <h1 className="h0">Gut</h1>
          <h1 className="h0">Tracker</h1> */}
          <h2 className="h2">Cook County Birds!</h2>
          <h3 className="h3">Header goes here</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="blob">
            <img src={blobpink} alt="A pink blob." />
            <img src={blobblue} alt="A blue blob." />
            <img src={blobgreen} alt="A green blob." />
          </div>
          {/* <br></br> */}
          {/* <img src={arrowdown} alt="A down arrow." /> */}
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Home;

// Old Version
// const Home = () => {
//   return (
//     <>
//       {/* <Header /> */}
//       {/* Intro */}
//       {/* Intro */}
//       {/* Intro */}
//       <div className="intro">
//         <div className="centered-text">
//           <h1 className="h1" style={{ marginBottom: "1rem" }}>
//             Welcome to The Gut Tracker!
//           </h1>
//           <h2 className="h2">
//             <span
//               className="heart"
//               style={{ color: "#b76e79", fontSize: "16px" }}
//             >
//               &#9829;
//             </span>{" "}
//             Yay!{" "}
//             <span
//               className="heart"
//               style={{ color: "#b76e79", fontSize: "16px" }}
//             >
//               &#9829;
//             </span>
//           </h2>
//           <h2 className="paragraph" style={{ margin: "1rem 0" }}>
//             {/* <em>~ Creating digital products that tell a story ~</em> */}
//           </h2>
//         </div>
//         {/* <img className='image' src={image} alt='Image of Valerie Chu' /> */}
//       </div>

//       <img src={divider} alt="divider" className="divider" />
//       <div className="centered-text">
//         <h3 className="h3">A Quick Intro</h3>
//         <p className="paragraph">Hello hello! Welcome to The Gut Tracker!</p>
//         {/* <p className="paragraph">Hello hello!</p> */}
//       </div>

//       <img src={divider} alt="divider" className="divider" />

//       <div className="centered-text">
//         <h3 className="h3">How to use The Gut Tracker</h3>
//         {/* <ProjectCard
//           image={aetchome}
//           alt="NASA Aerosciences Evaluation and Test Capabilities Portfolio Office home page"
//           hed="NASA Wind Tunnel Test Tracking Project"
//           subhed="NASA’s Aerosciences Evaluation and Test Capabilities Portfolio Office"
//           description="Full stack development and data science for tracking NASA’s wind tunnel tests — Built a landing page that updates with real-time issues, highlights, and data visualizations for NASA’s 12 wind tunnels."
//           skills="Python, Figma, SQL, GitLab, Dash Mantine Components, Dash Plotly"
//           learnMoreUrl="/work/nasa-wind-tunnel-test-tracking"
//           // viewProjectUrl='https://www.nasa.gov/directorates/armd/aetc/'
//         /> */}
//       </div>
//     </>
//   );
// };

// export default Home;
