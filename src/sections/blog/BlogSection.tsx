import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { BlogData } from './BlogData'
import Image from 'next/image'
import SectionWrapper from '@/components/section-wrapper'
import { useRouter } from 'next/router'

const BlogSection = () => {
    let router = useRouter()
    return (
        // <Box sx={{ padding: {xs:"0px 0px 50px 20px",lg:"0px 95px 50px 95px"},}}>
        <SectionWrapper background="#FFFAFC">
            <Box sx={{ paddingTop: "100px", textAlign: "center", width: { xs: "100%", lg: "1000px" }, margin: { xs: "unset", lg: "0 auto" } }}>
                <Typography component="h2" mb={2.5}>
                    New & Articles
                </Typography>
                <Typography variant='body1' sx={{ marginBottom: "70px" }}>
                    A little snapshot of what the Soul Encryption team have been up to. A melting pot of news, reviews, press
                    and thought pieces. Go on, click the links, you know you want to!
                </Typography>
            </Box>

            <Box>

                <Grid container spacing={6}>
                    {BlogData.map((item: any) => {
                        return (
                            <>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={item?.id}>
                                    <Card sx={{ width: { xs: "100%", lg: "100%" }, minHeight: "100%", height: "100%", maxWidth: "100%", borderRadius: "20PX", paddingTop: "20px",cursor:"pointer" }}
                                      onClick={() => {
                                        router.push({ pathname: `/blog/blog-detail/${item?.id}`, query: { action: "view-detail" } })
                                      }}
                                      >
                                        <Box sx={{ position: "relative", }}>
                                            <Image src={item?.img} alt="blog img" style={{ width: "100%", height: "100%" }} />
                                            <Button style={{ position: "absolute", right: "30px", top: "20px", backgroundColor: "#fff", borderRadius: "40px", color: "#2E2E2E", fontSize: "12PX" }}>New</Button>
                                        </Box>

                                        <CardContent>
                                            <Typography gutterBottom variant='body1'>
                                                {item?.date}
                                            </Typography>
                                            <Typography gutterBottom variant="h4" color={"#FF3B83"}>
                                                {item?.title}
                                            </Typography>
                                            <Typography variant='body1'>
                                                {item?.description}
                                            </Typography>
                                        </CardContent>
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

export default BlogSection