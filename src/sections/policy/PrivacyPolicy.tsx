import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { PivacyPolicyData } from './policayData'
import SectionWrapper from '@/components/section-wrapper'

const PrivacyPolicy = () => {
  return (
    <SectionWrapper background="#FFFAFC">
      <Box sx={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#FFFAFC", marginBottom: "50px" }}>
        <Typography variant='h2'>
          Privacy Policy of Soul Encryption
        </Typography>
      </Box>
      <Box sx={{ background: "#fff", boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)", borderRadius: "12PX" }}>
        <Grid container spacing={2} p={3} mb={5}>
          {PivacyPolicyData.map((item: any) => (
            <Grid item xs={12} mb={1} key={item?.id}>
              <Typography variant='h4' sx={{ fontWeight: "600 !important" }}>
                {item?.title}
              </Typography>
              <Typography variant='body1'>
                {item?.description}
              </Typography>
              <ul>
                {item?.list?.map((listItem: any) => (
                  <li key={listItem?.id}>
                    {listItem?.l1}
                  </li>
                ))}
              </ul>
            </Grid>
          ))}

          <Grid item xs={12} mb={4}>
            <Typography variant='body1' mb={2}>
              For further details about our data practices and your rights, or if you have questions or concerns, please review our complete Privacy Policy or contact our Privacy Team at<span style={{ color: "#FF3B83" }}> info@soulencryption.com</span>.
            </Typography>
            <Typography variant='body1'>
              Copyright © 2018 Soul Encryption. All Rights Reserved.
            </Typography>
          </Grid>

        </Grid>
      </Box>
    </SectionWrapper>
  )
}

export default PrivacyPolicy