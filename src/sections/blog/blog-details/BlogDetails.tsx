import React from "react";
import { blogDetail } from "../BlogData";
import { useRouter } from "next/router";
import SectionWrapper from "@/components/section-wrapper";
import { Box, Grid, Typography } from "@mui/material";
import soulEncriptionIcon from "../../../assets/svg/soulEncryption.svg";
import facebookIcon from "../../../assets/svg/FbIcon.svg";
import twitterIcon from "../../../assets/svg/twitterIcon.svg";
import youtubeIcon from "../../../assets/svg/youtubeIcon.svg";
import tiktokIcon from "../../../assets/svg/tik_tok.svg";
import pinterestIcon from "../../../assets/svg/printestIcon.svg";
import instagramIcon from "../../../assets/svg/instaIcon.svg";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = () => {
  const router = useRouter();
  console.log("path id ****************************", router?.query?.id);
  console.log("blogDetail ****************************", blogDetail[0]?.id);
  return (
    <div>
      {router.query.id && (
        <>
          {blogDetail?.map(
            (item) =>
              router.query?.id === item?.id && (
                <SectionWrapper key={item.id}>
                  <Typography
                    variant="h1"
                    sx={{ marginTop: "120px", marginBottom: "30px" }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: "30px" }}>
                    {item?.summary}
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: { xs: "center", md: "space-between" }, flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "start" } }}
                      mb={3}
                    >
                      <Box display={"flex"} gap={"10px"}>
                        <Image src={soulEncriptionIcon} alt="soul encription" />
                        <Box>
                          <Typography variant="h3">Soul Encryption </Typography>
                          <Typography variant="body1">{item?.date}</Typography>
                        </Box>
                      </Box>

                      <Box>
                        <Link href={"https://www.facebook.com/people/Soul-Encyption/100091673163166/?is_tour_dismissed=true"}><Image src={facebookIcon} alt="facebook" style={{ marginRight: "8px" }} /></Link>
                        <Link href={"https://twitter.com/EncryptionSoul"}><Image src={twitterIcon} alt="twitterIcon" style={{ marginRight: "8px" }} /></Link>
                        <Link href={"https://www.pinterest.com/SoulEncryption/"}><Image src={pinterestIcon} alt="pinterestIcon" style={{ marginRight: "8px" }} /></Link>
                        <Link href={"https://www.instagram.com/soulencryptionuk/?igshid=YmMyMTA2M2Y%3D"}><Image src={instagramIcon} alt="instagramIcon" style={{ marginRight: "8px" }} /></Link>
                        <Link href={"https://www.instagram.com/soulencryptionuk/?igshid=YmMyMTA2M2Y%3D"}><Image src={youtubeIcon} alt="youtubeIcon" style={{ marginRight: "8px" }} /></Link>
                        <Link href={"https://www.instagram.com/soulencryptionuk/?igshid=YmMyMTA2M2Y%3D"}><Image src={tiktokIcon} alt="tiktokIcon" /></Link>



                      </Box>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                      <Box>
                        <Image src={item?.img} alt="facebook" style={{ height: "100%", width: "100%" }} />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12} mb={3}>
                      <Typography
                        variant="body1"
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      />
                    </Grid>
                    {item?.benefits && (
                      <Grid item xs={12} md={12}  >
                        {item?.benefits?.map((benefits: any) => {
                          return (
                            <>

                              <Typography variant="h3" mb={3} key={item?.id}>
                                {benefits?.title}
                              </Typography>
                              <Typography variant="body1" mb={3}>
                                {benefits?.description}
                              </Typography>
                              <ul style={{ margin: "0px", padding: "0px" }} className="blog-list">
                                <li>{benefits?.benefitList}</li>
                              </ul>


                            </>
                          );
                        })}
                        <Typography variant="body1" mt={3}>
                          {item?.benefitDiscription}
                        </Typography>
                      </Grid>
                    )}
                    {item?.challenges && (
                      <Grid item xs={12} md={12}>
                        {item?.challenges?.map((benefits: any) => {
                          return (
                            <>

                              <Typography variant="h3" mb={3} mt={3} key={item?.id}>
                                {benefits?.title}
                              </Typography>
                              <ul style={{ margin: "0px", padding: "0px" }} className="blog-list">
                                <li>{benefits?.benefitList}</li>
                              </ul>

                            </>
                          );
                        })}
                        <Typography variant="body1" mt={3}>
                          {item?.challengeDiscription}
                        </Typography>
                      </Grid>
                    )}

                    {item?.tips && (
                      <Grid item xs={12} md={12}  >
                        {item?.tips?.map((benefits: any) => {
                          return (
                            <>

                              <Typography variant="h3" mb={3} mt={3} key={item?.id}>
                                {benefits?.title}
                              </Typography>
                              <ul style={{ margin: "0px", padding: "0px" }} className="blog-list">
                                <li>{benefits?.tipsList}</li>
                              </ul>

                            </>
                          );
                        })}
                      </Grid>
                    )}


                    {item?.headingSection && item?.headingSection?.map((benefits: any) => {
                      return (
                        <>
                          <Grid item xs={12} md={12} key={item?.id}>
                            <Typography variant="h3" mb={3} mt={3}>
                              {benefits?.title}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ marginBottom: "10px" }}
                              dangerouslySetInnerHTML={{
                                __html: benefits?.description,
                              }}
                            />
                            <Typography
                              variant="h4"
                              sx={{ marginBottom: "10px", fontWeight: "600 !important" }}
                              dangerouslySetInnerHTML={{
                                __html: benefits?.advantage,
                              }}
                            />
                            <Typography
                              variant="body1"
                              sx={{ marginBottom: "10px" }}
                              dangerouslySetInnerHTML={{
                                __html: benefits?.advantageList,
                              }}
                            />
                            <Typography
                              variant="h4"
                              sx={{ marginBottom: "10px", fontWeight: "600 !important" }}
                              dangerouslySetInnerHTML={{
                                __html: benefits?.disadvantage,
                              }}
                            />
                            <Typography
                              variant="body1"
                              dangerouslySetInnerHTML={{
                                __html: benefits?.disadvantageList,
                              }}
                            />
                          </Grid>
                        </>
                      );
                    })}
                    <Grid item xs={12} md={12} mb={3}>
                      <>
                        <Typography variant="body1">{item?.subDescription}</Typography>
                      </>
                    </Grid>
                  </Grid>
                </SectionWrapper>
              )
          )}
        </>
      )}
    </div>
  );
};

export default BlogDetails;
