import React, { useState, useMemo } from 'react';
import './i18n'; // initialise i18next
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Grid,
  Box
} from '@mui/material';

import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProjectsMasonry from './components/ProjectsMasonry';
import SkillCard from './components/SkillCard';
import Contact from './components/Contact';
import Footer from './components/Footer';

import cscPic from './media/csc.png';
import xPic from './media/X.png';

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
    { id: 1, title: 'CRUDS', description: 'Gestion de produits (CRUD)', image: cscPic, repoUrl: '', liveUrl: '', tags: ['JavaScript'] },
    { id: 2, title: 'Portfolio', description: 'Mon portfolio React/MUI', image: '', repoUrl: '', liveUrl: '', tags: ['React.js', 'Material UI'] },
    { id: 3, title: 'JEU X-O', description: 'Morpion en JS', image: xPic, repoUrl: '', liveUrl: '', tags: ['JavaScript'] },
    { id: 4, title: 'List To-Do', description: 'Todo list JS', image: xPic, repoUrl: '', liveUrl: '', tags: ['JavaScript'] },
    { id: 5, title: 'Todo React', description: 'Todo list React/MUI', image: xPic, repoUrl: '', liveUrl: '', tags: ['React.js', 'Material UI'] },
    { id: 6, title: 'Clube Web', description: 'App JS pour un club', image: xPic, repoUrl: '', liveUrl: '', tags: ['JavaScript'] },
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

      <Footer />
    </ThemeProvider>
  );
}