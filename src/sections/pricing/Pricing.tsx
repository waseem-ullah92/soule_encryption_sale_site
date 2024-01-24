import { Box, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { PricingDataList } from './PricingData'
import TryButton from '@/components/button/TryButton'
import pricingwomen from '../../assets/svg/pricingwomen.svg'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionWrapper from '@/components/section-wrapper'


const Pricing = () => {
  return (
    <SectionWrapper background="#FFFAFC">
      <Box sx={{ paddingTop: "100px", textAlign: "center",width:{sm:"unset",lg:"550px"},margin:"0 auto" }}>
        <Typography component="h2" sx={{mb:2.5,textTransform:"uppercase" }}>
          Register your details and
          tie up your loose ends
        </Typography>
        <Typography variant='body1' sx={{marginBottom: "70px" }}>
          Record the memories of your life so far then get on with life and make some more.
          Everything organized in one place.
        </Typography>
      </Box>

      <Box sx={{paddingBottom:{xs:"40px",lg:"100px"}}}>
        <Grid container spacing={5} >
          <Grid item xs={12} md={12} lg={4} xl={4}>
            <Card sx={{ minWidth:{xs:"100%",lg:"275px"} , backgroundColor: "#FF3B83", boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.10)",borderRadius:"20px",position:"relative",padding:"24px",height:"486px"  }}>
              <CardContent>
                <Typography sx={{ fontSize: "28PX !important",fontWeight:"400 !important",lineHeight:"25px",color:"#FFF",mb:2, }} color="text.secondary" gutterBottom>
                  Save More
                </Typography>
                <Typography sx={{ mb: 2.5,fontSize: "28PX !important",fontWeight:"600 !important",lineHeight:"25px",color:"#FFF" }} color="text.secondary">
                  With Goodplans.
                </Typography>
                <Typography variant="body2" color={"#fff"}>
                  Choose a plan and get onboard in minutes. Ten get $100 credits for your next payment.
                </Typography>
              </CardContent>
              <CardActions>
                <ArrowForwardIcon sx={{fontSize:"30PX",color:"#FFF"}}/>
              </CardActions>
              <Image src={pricingwomen} alt="pricingwomen" style={{position:"absolute",bottom:"0px",right:"0px"}}/>
            </Card>
          </Grid>
          {PricingDataList.map((item: any) => {
            return (
              <>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>

                  <Card sx={{ minWidth:{xs:"100%",lg:"275px"}, borderRadius:"20px",minHeight:"100%",height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                    <CardContent sx={{ margin: 0, padding: 0 }}>
                      <Typography sx={{ fontSize: "28px !important", backgroundColor: '#FF3B83', textAlign: "center", color: "#fff", padding: "10px", fontWeight: "600 !important" }} gutterBottom>
                        {item?.package}
                      </Typography>
                      <Typography  sx={{ textAlign: "center", fontSize: "30px !important", fontWeight: "700 !important", color: "#2E2E2E", margin: "40px 0px" }}>
                        {item?.title}
                      </Typography>



                      <ul className='pricing-list'>
                        {item?.list.map((listItem: any) => {
                          return (

                            <li key={listItem.id} >
                              {listItem.l1}
                            </li>

                          )

                        })}
                      </ul>
                    </CardContent>
                    <CardActions sx={{justifyContent:"center",paddingBottom:"30px"}}>
                      <TryButton
                        width="327px"
                        height="50px"
                      >
                        Choose
                      </TryButton>
                    </CardActions>
                  </Card>


                </Grid>
              </>
            )
          })}
        </Grid>
      </Box>
      </SectionWrapper>
  )
}

export default Pricing