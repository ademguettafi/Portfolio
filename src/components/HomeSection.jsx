import React from 'react';
import {
  Box,
  Container,
  Grid,
  Avatar,
  Badge,
  Typography,
  IconButton,
  Button
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GetAppIcon from '@mui/icons-material/GetApp';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import ademPic from '../media/ademC.jpg';
import { ReactComponent as StaticWebsite } from '../media/undraw_static-website_x3tn.svg';
import { motion } from 'framer-motion';

export default function HomeSection() {
  const theme = useTheme();
  const { t } = useTranslation();

  // couleur GitHub dynamique selon le mode
  const githubColor =
    theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.8)'
      : '#181717';

  return (
    <Box component="section" id="accueil" sx={{ py: 2 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          height: '100%',
          ml: 0,
          mr: 'auto'
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          sx={{
            flexWrap: {
              xs: 'wrap',  // wrapping sous 600px
              sm: 'nowrap' // côte‑à‑côte ≥600px
            }
          }}
        >
          {/* Colonne de texte + avatar */}
          <Grid item sx={{ flex: '1 1 0%', minWidth: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <CheckCircleIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                }
              >
                <Avatar
                  alt={t('home.title')}
                  src={ademPic}
                  sx={{ width: 100, height: 100 }}
                />
              </Badge>
            </Box>

            {/* TITRE */}
            <Typography
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 'bold',
                mb: 1
              }}
            >
              {t('home.title')}
            </Typography>

            {/* SOUS‑TITRE */}
            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: 'text.secondary',
                mb: 3
              }}
            >
              {t('home.subtitle')}
            </Typography>

            {/* Réseaux sociaux */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
              <IconButton
                component="a"
                href="https://github.com/ademguettafi"
                target="_blank"
                aria-label="GitHub"
              >
                <GitHubIcon sx={{ fontSize: 30, color: githubColor }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/adem-gtf-b7183a25a/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedInIcon sx={{ fontSize: 30, color: '#0077B5' }} />
              </IconButton>
              <IconButton component="a" href="#contact" aria-label="Email">
                <MailOutlineIcon sx={{ fontSize: 30, color: '#EA4335' }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/adem__gtf/"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon sx={{ fontSize: 30, color: '#E4405F' }} />
              </IconButton>
            </Box>

            {/* Bouton Télécharger CV */}
            <motion.div whileHover={{ scale: 1 }}>
              <Button
                component="a"
                href="/Adem_Guettafi_CV.pdf"
                download
                variant="contained"
                startIcon={<GetAppIcon />}
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.success.light} 0%, ${theme.palette.success.main} 100%)`,
                  color: '#fff',
                  fontWeight: 700,
                  py: 1.5,
                  px: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                  textTransform: 'none',
                  transition: 'background 0.3s',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.success.dark} 100%)`,
                  }
                }}
              >
                {t('cv.download')}
              </Button>
            </motion.div>
          </Grid>

          {/* Illustration – masquée <500px */}
          <Grid
            item
            sx={{
              flex: '0 0 auto',
              '@media (max-width:500px)': { display: 'none' }
            }}
          >
            <Box
              component={StaticWebsite}
              sx={{
                width: 250,
                height: 'auto',
                borderRadius: 1,
                boxShadow: 1
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}