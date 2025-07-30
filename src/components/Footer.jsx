import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const theme = useTheme();
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <AppBar
      position="static"
      component="footer"
      elevation={1}
      sx={{
        top: 'auto',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.background.default,
        color: theme.palette.text.primary,
        borderTop: `1px solid ${theme.palette.divider}`,
        mb: 0,
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', py: 1 }}>
        <Typography variant="body2">
          {t('footer.copy', { year })}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}