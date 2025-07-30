import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default function ProjectCard({ project }) {
  const theme = useTheme();
  const { t } = useTranslation();

  const isDark = theme.palette.mode === 'dark';

  // Toujours vert pour la bordure
  const borderColor = theme.palette.success.main;
  // Texte blanc en sombre, vert en clair
  const textColor = isDark ? '#fff' : theme.palette.success.main;
  // Icônes blanches en sombre, noires en clair
  const iconColor = isDark ? '#fff' : '#000';
  // Fond au survol : nuance foncée de success
  const hoverBg = theme.palette.success.dark;

  return (
    <Card
      sx={{
        width: 345,
        height: 450,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: theme.shadows[6],
        },
      }}
      elevation={3}
    >
      {/* Image du projet */}
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{ height: 180, objectFit: 'cover' }}
      />

      {/* Titre & description */}
      <CardContent sx={{ flexGrow: 1, px: 2, pt: 2 }}>
        <Typography gutterBottom variant="h6" sx={{ fontWeight: 600 }}>
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {project.description}
        </Typography>
      </CardContent>

      {/* Boutons Démo / Code */}
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button
          size="small"
          variant="outlined"
          component="a"
          href={project.liveUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<LaunchIcon sx={{ color: iconColor }} />}
          sx={{
            borderColor,
            color: textColor,
            fontWeight: 900,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: hoverBg,
              borderColor,
            }
          }}
        >
          {t('projects.demo')}
        </Button>

        <Button
          size="small"
          variant="outlined"
          component="a"
          href={project.repoUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon sx={{ color: iconColor }} />}
          sx={{
            borderColor,
            color: textColor,
            fontWeight: 900,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: hoverBg,
              borderColor,
            }
          }}
        >
          {t('projects.code')}
        </Button>
      </CardActions>
    </Card>
  );
}