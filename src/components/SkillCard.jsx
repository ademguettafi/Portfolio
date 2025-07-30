import React from 'react';
import { Paper, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDotnet,
  SiMysql,
  SiMui,
  SiBootstrap,
  SiGit,
  SiGithub
} from 'react-icons/si';


const ICONS = {
  html:          [SiHtml5,     '#E34F26'],
  css:           [SiCss3,      '#1572B6'],
  javascript:    [SiJavascript,'#F7DF1E'],
  'react.js':    [SiReact,     '#61DAFB'],
  'next.js':     [SiNextdotjs, '#000000'],
  'node.js':     [SiNodedotjs, '#339933'],
  'c#':           [SiDotnet,   '#239120'],
  sql:           [SiMysql,     '#4479A1'],
  'material ui': [SiMui,       '#0081CB'],
  bootstrap:     [SiBootstrap, '#7952B3'],
  git:           [SiGit,       '#F05033'],
  github:        [SiGithub,    '#181717'],
};

export default function SkillCard({ skill }) {
  const theme = useTheme();
  const { t } = useTranslation();
  
  const key = skill.toLowerCase();
  const entry = ICONS[key];
  const Icon = entry?.[0];
  const color = entry?.[1] || theme.palette.primary.main;

  return (
    <motion.div whileHover={{ scale: 1.05 }} style={{ flex: '0 0 auto' }}>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          m: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2,
          minWidth: 100,
          bgcolor: theme.palette.background.paper,
          transition: 'box-shadow 0.3s',
          '&:hover': { boxShadow: theme.shadows[8] },
        }}
      >
        {Icon && (
          <Icon
            style={{
              fontSize: 40,
              color,                             
              marginBottom: theme.spacing(1),
            }}
          />
        )}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, textAlign: 'center' }}
        >
          
          {t(`skillsList.${key}`, skill)}
        </Typography>
      </Paper>
    </motion.div>
  );
}
