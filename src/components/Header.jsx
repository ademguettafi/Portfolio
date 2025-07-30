import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';

// NavButton adapté à chaque mode
const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === 'dark'
    ? '#fff'
    : theme.palette.success.main,
  textTransform: 'none',
  fontWeight: 600,
  '&:hover': {
    color: theme.palette.mode === 'dark'
      ? theme.palette.success.light
      : theme.palette.success.dark,
    backgroundColor: theme.palette.success.light + '22',
  },
}));

// Clés de navigation pour i18n
const navItems = [
  { key: 'about',   href: '#accueil'   },
  { key: 'projects', href: '#projets'  },
  { key: 'skills',  href: '#competences' },
  { key: 'contact', href: '#contact'   },
];

export default function Header({ toggleDarkMode, toggleLanguage, currentLang }) {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(open => !open);
  };

  // Drawer mobile
  const drawer = (
    <Box sx={{ width: 240 }} onClick={handleDrawerToggle}>
      <List>
        {navItems.map(item => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemText
                primary={t(`nav.${item.key}`)}
                primaryTypographyProps={{
                  sx: {
                    color: theme.palette.mode === 'dark'
                      ? '#fff'
                      : theme.palette.success.main,
                    fontWeight: 600
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
          mb: 3
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo / Titre */}
          <Typography
            variant="h6"
            component="a"
            href="#accueil"
            sx={{
              fontWeight: 'bold',
              textDecoration: 'none',
              color: theme.palette.text.primary,
              '&:hover': { color: theme.palette.success.main }
            }}
          >
            ADEM GUETTAFI
          </Typography>

          {/* Liens desktop */}
          {!isMobile && (
            <Box component="nav" sx={{ display: 'flex', gap: 2 }}>
              {navItems.map(item => (
                <NavButton key={item.key} href={item.href}>
                  {t(`nav.${item.key}`)}
                </NavButton>
              ))}
            </Box>
          )}

          {/* Boutons d’action */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Toggle Dark/Light */}
            <IconButton
              aria-label="Toggle light/dark mode"
              onClick={toggleDarkMode}
              sx={{
                color: theme.palette.text.primary,
                '&:hover': { backgroundColor: theme.palette.success.light + '22' }
              }}
            >
              {theme.palette.mode === 'dark'
                ? <LightModeIcon fontSize="large" />
                : <DarkModeIcon fontSize="large" />
              }
            </IconButton>

            {/* Switch langue */}
            <Button
              variant="outlined"
              size="small"
              onClick={toggleLanguage}
              sx={{
                textTransform: 'none',
                borderColor: theme.palette.success.main,
                color: theme.palette.text.primary,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: theme.palette.success.light + '22',
                  borderColor: theme.palette.success.dark,
                  color: theme.palette.success.dark,
                },
              }}
            >
              {/* Affiche l’inverse : « EN » si on est en FR, « FR » si EN */}
              {currentLang === 'fr' ? 'EN' : 'FR'}
            </Button>

            {/* Burger menu mobile */}
            {isMobile && (
              <IconButton
                aria-label="Open navigation menu"
                onClick={handleDrawerToggle}
                sx={{ color: theme.palette.success.main }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}