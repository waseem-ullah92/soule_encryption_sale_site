import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { DataPolicyData, TermAndConditionTitle, TermAndCondtionData } from './policayData'
import SectionWrapper from '@/components/section-wrapper'
import Link from 'next/link'

const TermAndCondition = () => {
  return (
    <Box>
      <Box sx={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#FFFAFC", marginBottom: "50px" }}>
        <Typography variant='h2'>
          Terms & Conditions
        </Typography>
      </Box>
      <SectionWrapper background="#FFFAFC">
        <Grid container spacing={2} mb={5}>
          {/* <Grid item lg={2} mb={1} sx={{ borderLeft: "3px solid #FF3B83", height: "360px" }}>
            {TermAndConditionTitle.map((item: any) => {
              return (
                <>
                  <Link href={'#id'}><Typography key={item?.id} mb={1.5}>{item?.title}</Typography> </Link>
                </>
              )
            })}
          </Grid> */}
          <Grid item xs={12} sm={4.5} md={4} lg={3} mb={1} sx={{ borderLeft: "3px solid #FF3B83", height: "100%" }}>
            {TermAndConditionTitle.map((item: any) => {
              return (
                <Link href={`#${item.id}`} key={item.id} style={{textDecoration:"none",}}>
                  <Typography mb={1.5}>{item.title}</Typography>
                </Link>
              );
            })}
          </Grid>
          <Grid item p={3} xs={12} sm={7.5} md={8} lg={9} mb={1} sx={{ background: "#fff", boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)", borderRadius: "12PX", }}>
            {/* {TermAndCondtionData?.map((item: any) => {
              return (
                <>

                  <Typography variant='h4' key={item?.id} sx={{ fontWeight: "600 !important" }}>
                    {item?.title}
                  </Typography>
                  <Typography variant='body1'>
                    {item?.description}
                  </Typography>

                </>
              )
            })} */}
            {TermAndCondtionData.map((item: any) => {
              return (
                <div
                  id={item.id} // Add an 'id' attribute that matches the id in the data
                  key={item.id}
                >
                  <Typography variant='h4' sx={{ fontWeight: "600 !important" }}>
                    {item.title}
                  </Typography>
                  <Typography variant='body1' sx={{marginBottom:"40px"}}>
                    {item.description}
                  </Typography>
                </div>
              );
            })}
          </Grid>

        </Grid>
      </SectionWrapper>
    </Box>
  )
}

export default TermAndCondition