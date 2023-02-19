import React, { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Grid } from "@mui/material";
import HomePage from "./pages/HomePage";
import ContactPageModal from "./pages/ContactPageModal";
import ProjectsPage from "./pages/ProjectsPage";
import Resume from "./pages/Resume";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ConstructionIcon from "@mui/icons-material/Construction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import backImg from "./images/blur_code.jpg";
import "./index.css";

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
  },
  { icon: <EmailIcon />, name: "Contact", to: "/contactpage" },
];

function App() {
  const [buttonShown, setButtonShown] = useState(true);
  const [typeText, setTypeText] = useState(true);

  const buttonShownHandler = () => {
    setButtonShown(false);
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
              typeText={typeText}
              setTypeText={setTypeText}
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
            right: 125,
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
              icon={
                action.to ? (
                  <Link to={action.to}>{action.icon}</Link>
                ) : (
                  action.icon
                )
              }
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      ) : null}
    </BrowserRouter>
  );
}

export default App;
