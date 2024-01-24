import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { DataPolicyData } from './policayData'
import SectionWrapper from '@/components/section-wrapper'

const DataPolicy = () => {
  return (
    <SectionWrapper background="#FFFAFC">
      <Box sx={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "50px" }}>
        <Typography variant='h2'>
          Data Policy of Soul Encryption
        </Typography>
      </Box>
      <Box sx={{ background: "#FFFAFC", boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)", borderRadius: "12PX",marginBottom:"40px"  }}>
        <Grid container spacing={2} p={3} >
          <Grid item xs={12} pb={4}>
            <Typography variant='body1'>
              At Soul Encryption, we are committed to safeguarding your privacy and ensuring the security of your personal information. This Data Policy outlines how we collect, use, and protect your data. By using our services, you agree to the practices described here.
            </Typography>
          </Grid>
          {DataPolicyData.map((item: any) => {
            return (
              <>
                <Grid item xs={12} mb={1} key={item?.id}>
                  <Typography variant='h4' sx={{ fontWeight: "600 !important" }}>
                    {item?.title}
                  </Typography>
                  <Typography variant='body1'>
                    {item?.description}
                  </Typography>
                </Grid>
              </>
            )
          })}
          <Grid item xs={12} mb={4}>
            <Typography variant='body1'mb={2}>
              For more details about our data practices and your rights, please review our full [Privacy Policy]. If you have questions or concerns, contact our [Privacy Team] at <span style={{ color: "#FF3B83" }}> info@soulencryption.com</span>.
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

export default DataPolicy