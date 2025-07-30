import React, { useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  useTheme
} from '@mui/material';
import { PersonOutline, EmailOutlined, MessageOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const theme = useTheme();
  const { t } = useTranslation();
  const formRef = useRef();
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ill57d7', 'template_onlgagb', formRef.current, 'H62LJmQDiI6IaM-Fk')
      .then(() =>
        emailjs.sendForm('service_ill57d7', 'template_dcb0w9o', formRef.current, 'H62LJmQDiI6IaM-Fk')
      )
      .then(() => {
        setSuccess(true);
        setOpen(true);
        formRef.current.reset();
      })
      .catch(() => {
        setSuccess(false);
        setOpen(true);
      });
  };

  const textFieldSx = {
    backgroundColor: theme.palette.background.paper,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.grey[400],
      },
      '&:hover fieldset': {
        borderColor: theme.palette.success.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.success.dark,
      },
    },
    '& label.Mui-focused': {
      color: theme.palette.success.dark,
    },
  };

  return (
    <Box
      id="contact"
      component={Paper}
      elevation={3}
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="sm">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Titre traduit */}
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, color: theme.palette.text.primary }}
          >
            {t('contact.title')}
          </Typography>

          <Box
            component="form"
            ref={formRef}
            onSubmit={sendEmail}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              mt: 4,
            }}
          >
            <TextField
              name="from_name"
              label={t('contact.nameLabel')}
              required
              fullWidth
              variant="outlined"
              sx={textFieldSx}
              InputProps={{
                startAdornment: <PersonOutline sx={{ mr: 1, color: theme.palette.text.secondary }} />,
              }}
            />

            <TextField
              name="from_email"
              label={t('contact.emailLabel')}
              type="email"
              required
              fullWidth
              variant="outlined"
              sx={textFieldSx}
              InputProps={{
                startAdornment: <EmailOutlined sx={{ mr: 1, color: theme.palette.text.secondary }} />,
              }}
            />

            <TextField
              name="message"
              label={t('contact.msgLabel')}
              required
              fullWidth
              variant="outlined"
              multiline
              rows={5}
              sx={textFieldSx}
              InputProps={{
                startAdornment: <MessageOutlined sx={{ mr: 1, color: theme.palette.text.secondary }} />,
              }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 1,
                py: 1.5,
                fontWeight: 700,
                borderRadius: 2,
                backgroundColor: theme.palette.success.main,
                color: theme.palette.common.white,
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.success.dark,
                  boxShadow: 'none',
                },
              }}
            >
              {t('contact.send')}
            </Button>
          </Box>
        </motion.div>
      </Container>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpen(false)} severity={success ? 'success' : 'error'} sx={{ width: '100%' }}>
          {success ? t('contact.success') : t('contact.error')}
        </Alert>
      </Snackbar>
    </Box>
  );
}