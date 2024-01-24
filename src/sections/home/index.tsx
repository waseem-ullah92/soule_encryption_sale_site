
import { Box } from '@mui/material'
import React from 'react'
import WellOrganized from './well-organized/WellOrganized'
import Hero from './hero/Hero'
import MomMemorial from './mom-memorial/MomMemorial'
import ChoosePlan from './choose-plan/ChoosePlan'
import SectionWrapper from '@/components/section-wrapper'

const Home = () => {

  return (
    <Box>
      <SectionWrapper background='#FDFCFA'>
        <Hero />
        <WellOrganized />
        <ChoosePlan />
        <MomMemorial />
      </SectionWrapper>
    </Box >
  )
}

export default Home