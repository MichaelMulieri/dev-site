import React, { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Close } from "@mui/icons-material";
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
  { icon: <GitHubIcon />, name: "GitHub", to: "/" },
  { icon: <LinkedInIcon />, name: "LinkedIn", to: "/" },
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
      <a
        className="fontColor"
        target="_blank"
        href="https://github.com/MichaelMulieri"
        rel="noreferrer"
      >
        Github
      </a>
      <a
        className="fontColor"
        target="_blank"
        href="https://www.linkedin.com/in/michael-mulieri/"
        rel="noreferrer"
      >
        Linkedin
      </a>
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
            top: 125,
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
