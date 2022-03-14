import React from 'react'
import { useTranslation } from 'next-i18next'
import { Container } from '@mui/material'

import Layout from 'components/layout/Layout'

import Timeline from './sections/Timeline'
import TechStack from './sections/TechStack'
import WhatIsDone from './sections/WhatIsDone'
import AboutPlatform from './sections/AboutPlatform'

export default function AboutProject() {
  const { t } = useTranslation()

  return (
    <Layout
      title={t('about-project:aboutPlatformTitle')}
      metaDescription={t('about-project:aboutPlatformDescription')}>
      <Container maxWidth="lg">
        <AboutPlatform />
        <WhatIsDone />
        <TechStack />
        <Timeline />
      </Container>
    </Layout>
  )
}
