import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useTheme,
  Box
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default function ProjectCard({ project }) {
  const theme = useTheme();
  const { t } = useTranslation();
  const isDark = theme.palette.mode === 'dark';

  // Styles dynamiques
  const borderColor = theme.palette.success.main;
  const textColor   = isDark ? '#fff' : theme.palette.success.main;
  const iconColor   = isDark ? '#fff' : '#000';
  const hoverBg     = theme.palette.success.dark;

  return (
    <Card
      elevation={3}
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
    >
      {/* Image du projet */}
      <CardMedia
        component="img"
        image={project.image}
        alt={t(`projectList.${project.id}.title`)}
        sx={{ height: 180, objectFit: 'cover' }}
      />

      {/* Titre & description traduits */}
      <CardContent sx={{ flexGrow: 1, px: 2, pt: 2 }}>
        <Typography gutterBottom variant="h6" sx={{ fontWeight: 600 }}>
          {t(`projectList.${project.id}.title`)}
        </Typography>
   <Box
         sx={{
            flex: 1,
            overflowY: 'auto',
            pr: 1,    // padding à droite pour ne pas coller la scrollbar
           mt: 1
          }}
        >
         <Typography variant="body2" color="text.secondary">
            {t(`projectList.${project.id}.description`)}
          </Typography>
       </Box>
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