import React, { useState, useMemo } from 'react';
import './i18n'; 
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
// MUI imports
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Grid,
  Box
} from '@mui/material';
// components imports
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProjectsMasonry from './components/ProjectsMasonry';
import SkillCard from './components/SkillCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
// images imports 
import CrudsPic from './media/Cruds.png';
import xPic from './media/X.png';
import portfolioPic from './media/portfolioPic.png';
import todoReactPic from './media/todoReactPic.png';
import TodoJs from './media/TodoJs.png';
import club from './media/cc.png';

export default function App() { 
  const { t } = useTranslation();

  // mode clair/sombre
  const [mode, setMode] = useState('light');
  const toggleDarkMode = () =>
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));

  // langue FR/EN
  const [lang, setLang] = useState('fr');
  const toggleLanguage = () => {
    const next = lang === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(next);
    setLang(next);
  };

  // thème MUI
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#2e7d32',
            light: '#60ad5e',
            dark: '#005005',
          },
          success: {
            main: '#2e7d32',
            light: '#60ad5e',
            dark: '#005005',
          },
        },
        typography: {
          button: {
            textTransform: 'none',
          },
        },
      }),
    [mode]
  );

  // données statiques
  const projects = [
    { id:'cruds',  image: CrudsPic, repoUrl: 'https://github.com/ademguettafi/Cruds-System', liveUrl: 'https://adem-cruds-system.netlify.app/', tags: ['JavaScript'] },
    { id: 'portfolio', image: portfolioPic, repoUrl: 'https://github.com/ademguettafi/Portfolio', liveUrl: 'https://ademguettafiportfolio.netlify.app/', tags: ['React.js', 'Material UI'] },
    { id: 'JEU X-O', image: xPic, repoUrl: 'https://github.com/ademguettafi/X-O-game', liveUrl: 'https://adem-x-o-game.netlify.app/', tags: ['JavaScript'] },
    { id: 'List To-Do', image: TodoJs, repoUrl: 'https://github.com/ademguettafi/List-ToDo-js', liveUrl: 'https://adem-list-todo-js.netlify.app/', tags: ['JavaScript'] },
    { id: 'List To-Do React', image: todoReactPic, repoUrl: 'https://github.com/ademguettafi/Liste-Todo-React', liveUrl: 'https://guettafi-todolist-84c363.netlify.app/', tags: ['React.js', 'Material UI'] },
    { id: 'Cs.constantine web', image: club, repoUrl: '', liveUrl: '', tags: ['JavaScript'] },
  ];

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js',
    'Next.js', 'Node.js', 'C#', 'SQL',
    'Material UI', 'Bootstrap','Git', 'GitHub'
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* on passe toggleLanguage et currentLang à Header */}
      <Header
        toggleDarkMode={toggleDarkMode}
        toggleLanguage={toggleLanguage}
        currentLang={lang}
      />

      <HomeSection />

      <ProjectsMasonry projects={projects} />

      <Box
        id="competences"
        sx={{
          py: 8,
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.background.default,
        }}
      >
        <Container>
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}
          >
            {t('skills.title')}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {skills.map((skill, idx) => (
              <Grid item key={idx}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Contact />

      <ScrollTop />
      <Footer />
    </ThemeProvider>
  );
}