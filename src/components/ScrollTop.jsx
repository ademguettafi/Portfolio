import React from 'react';
import { useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,  // apparait immédiatement quand on descend
    threshold: 100,           // après 100px de scroll
  });

  const handleClick = () => {
    // on cible le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1300,
        }}
      >
        <Fab color="primary" size="small" aria-label="Remonter">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}