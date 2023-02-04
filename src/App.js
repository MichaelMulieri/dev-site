import React, { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Grid } from "@mui/material";
import HomePage from "./pages/HomePage";
import ContactPageModal from "./pages/ContactPageModal";
import ProjectsPage from "./pages/ProjectsPage";
import Resume from "./pages/Resume";
import sound from "./sounds/Typing.mp3";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ConstructionIcon from "@mui/icons-material/Construction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import backImg from "./images/blur_code.jpg";
import "./index.css";

const typingSound = new Audio(sound);

const actions = [
  {
    icon: <HomeIcon />,
    name: "Home",
    to: "/",
  },
  { icon: <ArticleIcon />, name: "Resume", to: "/resume" },
  { icon: <ConstructionIcon />, name: "Projects", to: "/projects" },
  {
    icon: (
      <GitHubIcon
        aria-label="Github.com"
        onClick={() => window.open("https://github.com/MichaelMulieri")}
      />
    ),
    name: "GitHub",
    to: "/",
  },
  {
    icon: (
      <LinkedInIcon
        aria-label="Linkedin.com"
        onClick={() =>
          window.open("https://www.linkedin.com/in/michael-mulieri/")
        }
      />
    ),
    name: "LinkedIn",
    to: "/",
  },
  { icon: <EmailIcon />, name: "Contact", to: "/contactpage" },
];

function App() {
  const [buttonShown, setButtonShown] = useState(true);

  const buttonShownHandler = () => {
    PlaySound();
    setButtonShown(false);
  };

  const PlaySound = () => {
    typingSound.play();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              handleBtnClick={buttonShownHandler}
              buttonShown={buttonShown}
            />
          }
        />
        <Route path="/contactpage" element={<ContactPageModal />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      {!buttonShown ? (
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          direction="down"
          sx={{
            position: "absolute",
            top: 105,
            right: 230,
          }}
          icon={
            <SpeedDialIcon
              sx={{
                color: "black",
              }}
              openIcon={<Close />}
            />
          }
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={<Link to={action.to}>{action.icon}</Link>}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      ) : null}
    </BrowserRouter>
  );
}

export default App;
