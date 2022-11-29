import CopyrightIcon from '@mui/icons-material/Copyright';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Button, Divider, styled, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import mailBox from '../assests/postbox.svg';
import { StyledBox } from './customComponents/styledComponents';

const FooterText = styled(Typography)({
    fontSize: 14,
    marginBottom: 0.6,
    textTransform: "capitalize",
    letterSpacing: 0.5
})

export default function Footer() {
    return (
        <>
            <Stack
                sx={(theme) => ({
                    justifyContent: 'center',
                    alignItems: "center",
                    bgcolor: theme.palette.primary.extraLight,
                    py: 8,
                })}
            >
                <Box width={"10%"} bgcolor="Highlight" borderRadius={"50%"} marginBottom={2}>
                    <img src={mailBox} alt="mailbox" />
                </Box>
                <Typography variant='h4' fontWeight={800} mb={1}>Subscribe for the latest updates</Typography>
                <Typography variant='subtitle1' color={'primary'} mb={3}>Subscribe to newsletter and never miss the new post every week</Typography>
                <Box sx={{ display: "flex", gap: "25px", width: "30%" }}>
                    <TextField placeholder='Enter your email...' variant="outlined"
                        sx={{
                            flexGrow: 1,
                            bgcolor: 'white',
                        }}
                    />
                    <Button variant="contained" color='secondary' size={'small'} >Subscribe</Button>
                </Box>
            </Stack>
            <Box sx={(theme) => ({
                bgcolor: theme.palette.primary.light,
                padding: "20px"
            })}>
                <Box
                    marginTop={4}
                    maxWidth={"lg"}
                    mx="auto"
                    py={"10px"}
                    >
                    <Stack
                        direction={"row"}
                        marginBottom={10}
                    >
                        <Box flexGrow={3}>
                            <StyledBox marginBottom={2} flexGrow={3}>
                                <Typography variant="h5" fontWeight={600}>Custom</Typography>
                                <Typography variant="body1" sx={(theme) => ({color: theme.palette.secondary.main, pt:0.7})}>.Blog</Typography>
                            </StyledBox>
                            <StyledBox gap={2}>
                                <GitHubIcon color='primary' sx={{height: "18px", width: "18px"}}/>
                                <LinkedInIcon color='primary' sx={{height: "18px", width: "18px"}}/>
                                <InstagramIcon color='primary' sx={{height: "18px", width: "18px"}}/>
                                <EmailIcon color='primary' sx={{height: "18px", width: "18px"}}/>
                            </StyledBox>
                        </Box>
                        <Box sx={{flexGrow: 1, textTransform: 'uppercase', mt: "8px"}}>
                            <Typography variant='body2' marginBottom={2} fontWeight={800}>Build using</Typography>
                            <Stack>
                                <FooterText>ReactJS</FooterText>
                                <FooterText>MUI</FooterText>
                                <Divider sx={{width: "25%", marginBottom: 0.5}}/>
                                <FooterText>expressJS</FooterText>
                            </Stack>
                        </Box>
                        <Box sx={{flexGrow: 1, textTransform: 'uppercase', mt: "8px"}}>
                            <Typography variant='body2' marginBottom={2} fontWeight={800}>About me</Typography>
                            <Stack>
                                <FooterText>About me</FooterText>
                                <FooterText>Portfolio</FooterText>
                            </Stack>
                        </Box>
                        <Box sx={{flexGrow: 1, textTransform: 'uppercase', mt: "8px"}}>
                            <Typography variant='body2' marginBottom={2} fontWeight={800}>Get in touch</Typography>
                            <Stack>
                                <FooterText sx={{textTransform: "lowercase"}}>raziqali0306@gmail.com</FooterText>
                                <FooterText>+91 9866-060102</FooterText>
                            </Stack>
                        </Box>
                        <Box sx={{flexGrow: 1, textTransform: 'uppercase', mt: "8px"}}>
                            <Typography variant='body2' marginBottom={2} fontWeight={800}>Follow us</Typography>
                            <Stack>
                                <FooterText>Facebook</FooterText>
                                <FooterText>Github</FooterText>
                                <FooterText>Linkedin</FooterText>
                                <FooterText>Instagram</FooterText>
                            </Stack>
                        </Box>
                    </Stack>
                    <Divider light />
                    <Stack sx={{
                        marginTop: "5px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <Stack
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                            >
                            <CopyrightIcon fontSize='small' />
                            <Typography variant="body2">2022 Custom.Blogs</Typography>
                        </Stack>
                        <Stack direction={'row'} alignItems={'cente'}>
                            <Typography variant='body2'>Made with</Typography>
                            <FavoriteIcon fontSize="small" sx={{color: "#f00", px: 0.5}}/>
                            <Typography variant='body2'>by RaziqAli</Typography>
                        </Stack>

                    </Stack>
                </Box>
            </Box>
        </>
  )
}
