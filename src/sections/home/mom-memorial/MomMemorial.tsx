import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import mommemorial from "../../../assets/svg/mommemorial.svg"
import animation1 from "../../../assets/svg/animation1.svg"
import animation2 from "../../../assets/svg/animation2.svg"
import Image from 'next/image'
import TryButton from '@/components/button/TryButton'

const MomMemorial = () => {
    return (
        <Box
        //  sx={{ padding: "20px 89px" }}
         >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6} xl={6} sx={{display:{xs:"flex",md:"block"},justifyContent:{xs:"center"}}}>
                    <Box sx={{position:"relative", width:"400px", height:"400px",}}>
                        <Box>
                            <div  className="rotate-animation-first">
                              <Image src={animation1} alt="animation1" style={{ width: "100%" }} />
                            </div>
                        </Box>
                        <Box>
                            <div  className="rotate-animation-second">
                              <Image src={animation2} alt="animation2" style={{ width: "100%" }} />
                            </div>
                        </Box>
                        <Image src={mommemorial} alt="mommemorial" style={{ width: "100%",position:"relative",zIndex:"1" }} />
                    </Box>

                   
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6} sx={{textAlign:{xs:"center",md:"left"}}}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: {xs:"center",md:"start"}, flexDirection: "column", height: {xs:"450px",md:"600px"} }}>


                        <Typography component="h2" mb={4}>
                            As if my Mom dying wasnt bad enough, <br></br> I agonized over what to share for her memorial
                        </Typography>
                        <Typography variant='body1' mb={4}>In her absence, we find strength in the memories she left behind, weaving a tapestry of love that will forever adorn our hearts.</Typography>
                        <TryButton
                            width="173px"
                            height="50px"
                        >
                            Try For Free
                        </TryButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MomMemorial