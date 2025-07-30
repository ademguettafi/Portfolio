import React, { useState } from 'react'
import { Box, Typography, Stack, Chip } from '@mui/material'
import { Masonry } from '@mui/lab'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard'

const CATEGORIES = [
  'All',
  'JavaScript',
  'React.js',
  'Material UI',
  'Next.js'
]

export default function ProjectsMasonry({ projects }) {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('All')

  const displayed =
    filter === 'All'
      ? projects
      : projects.filter(p => p.tags?.includes(filter))

  return (
    <Box id="projets" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      {/* Titre qui vient de resources.filters.project */}
      <Typography
        variant="h4"
        component="h2"
        sx={{ textAlign: 'center', fontWeight: 700, mb: 4 }}
      >
        {t('filters.project')}
      </Typography>

      {/* Chips de filtre */}
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        sx={{ mb: 6, flexWrap: 'wrap', gap: 1 }}
      >
        {CATEGORIES.map(cat => (
          <Chip
            key={cat}
            label={cat === 'All' ? t('filters.all') : cat}
            clickable
            onClick={() => setFilter(cat)}
            variant={filter === cat ? 'filled' : 'outlined'}
            sx={theme => ({
              borderRadius: 2,
              px: 2,
              py: 1,
              fontWeight: filter === cat ? 700 : 500,
              color:
                filter === cat
                  ? theme.palette.common.white
                  : theme.palette.success.main,
              bgcolor:
                filter === cat
                  ? theme.palette.success.main
                  : 'transparent',
              borderColor: theme.palette.success.main,
              '&:hover': {
                bgcolor:
                  filter === cat
                    ? theme.palette.success.dark
                    : theme.palette.success.light,
                color:
                  filter === cat
                    ? theme.palette.common.white
                    : theme.palette.success.dark,
              },
            })}
          />
        ))}
      </Stack>

      {/* Message « aucun projet » ou galerie */}
      {displayed.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" color="text.secondary">
            {t('projects.none')}
          </Typography>
        </Box>
      ) : (
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
          {displayed.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </Masonry>
      )}
    </Box>
  )
}