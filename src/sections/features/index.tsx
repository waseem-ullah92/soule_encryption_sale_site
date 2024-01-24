import { Box ,Grid} from '@mui/material'
import React from 'react'
import FeatureHeader from './feature-header/FeatureHeader'
import FeaturesCards from './features-cards/FeaturesCards'
import Feedback from '../feedback/Feedback'

const Feature = () => {
  return (
    <Grid container spacing ={2} sx={{background: "#FFFAFC !important",}}>
      <Grid item xl={12} xs={12}>
      <FeatureHeader/>
      </Grid>
      <Grid  item xl={12} xs={12} sx={{background: "#FFFAFC !important",}}>
      <FeaturesCards/>
      </Grid>
      <Grid  item xl={12} xs={12}>
      <Feedback/>
      </Grid>
    </Grid>
  )
}

export default Feature