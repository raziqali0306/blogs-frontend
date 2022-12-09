import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useRef, useState } from 'react';
import sign from '../assests/sign.gif';
import useAuth from '../hooks/use-auth';

function Sign() {

    useEffect(() => {        
        document.querySelector('.reveal.intro').classList.add('active')
    }, [])

    return (
        <Stack
            direction={'row'}
            sx={{
                minHeight: '95vh',
                justifyContent: 'center',
            }}
            >
            <Box
                className='reveal intro'
                sx={{
                    width: '45vw',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                <Box sx={(theme) => ({
                    position: "relative",
                    width: "100%",
                    mx: "20%",
                    pt: "6vh",
                    pb: "18vh",
                    overflow: "hidden",
                    backgroundColor: theme.palette.primary.extraLight,
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "16px",
                    boxShadow: "8px 8px 36px gray"
                })}>
                    <SignUp />
                    <Box
                        className='sign-in-dialog'
                        sx={(theme) => ({
                            position: "absolute",
                            top: "83%",
                            width: "100%",
                            pt: "4vh",
                            pb: "80vh",
                            backgroundColor: "white",
                            display: "flex",
                            justifyContent: "center",
                            borderRadius: "80% / 10%",
                            boxShadow: "6px 6px 24px gray",
                            transition: "all 1s cubic-bezier(0.24,-0.05, 0.53, 1.44)",
                        })}
                    >
                        <SignIn />
                    </Box>
                </Box>  
            </Box>
            <Box
                sx={{
                    width: '35vw',
                    display: 'flex',
                    alignItems: "center",
                    justifyContent:"center"
                }}
                >
                <img src={sign} alt=""/>
            </Box>
        </Stack>
    )
}

function SignUp() {

    const { signUp, signIn } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const userRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const handleSignUp = async () => {
        const username = userRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;

        if (username === "" || password === "" || email === "") {
            if (password === "") passRef.current.focus();
            if (email === "") userRef.current.focus();
            if (username === "") userRef.current.focus();
            return;
        }

        const data = await signUp(username, email, password);
        document.querySelector('.signup-success').style.visibility = "visible";
        signIn(data.username, data.email, password)
            .finally(() => document.querySelector('.signup-success').style.display = "hidden");
    }

    return (
        <Stack
            gap={4}
            width="80%"
        >
            <Box height={"2.250rem"}>
                <Typography
                    variant='h4'
                    className='sign-up-title'
                    sx={{
                        fontWeight: "700",
                        textAlign: "center",
                        marginBottom: "20px"    
                    }}
                >
                    Sign Up
                </Typography>
            </Box>
            <TextField 
                inputRef={userRef}
                type={"text"}
                variant="standard"  
                placeholder="Username"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <PersonOutlineIcon
                            size="small"
                            sx={(theme) => ({
                                color: theme.palette.primary.dark,
                                margin: 1,
                            })}
                        />
                    )
                }}
            />
            <TextField 
                inputRef={emailRef}
                type={"email"}
                variant="standard"
                size="small"
                placeholder="Email"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <AlternateEmailIcon
                        size="small"
                        sx={(theme) => ({
                                color: theme.palette.primary.dark,
                                margin: 1,
                            })}
                        />
                    )
                }}
            />
            <TextField 
                inputRef={passRef}
                type={showPassword ? "text" : "password"}
                variant="standard"
                size="small"
                placeholder="Password"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <VpnKeyIcon
                            size="small"
                            sx={(theme) => ({
                                color: theme.palette.primary.dark,
                                margin: 1,
                            })}
                        />
                    ),
                    endAdornment: (
                        showPassword ? 
                        <VisibilityOffIcon
                            size="small"
                            sx={(theme) => ({
                                color: theme.palette.primary.dark,
                                    margin: 1,
                                    cursor: "pointer",
                            })}
                            onClick={() => setShowPassword(prev => !prev)}
                        />
                        :
                        <VisibilityIcon
                        size="small"
                        sx={(theme) => ({
                                color: theme.palette.primary.dark,
                                margin: 1,
                                cursor: "pointer",
                            })}
                            onClick={() => setShowPassword(prev => !prev)}
                        />
                    )
                }}
            />
            <Typography
                variant='body2'
                textAlign={'center'}
                sx={(theme) => ({
                    color: theme.palette.secondary.main,
                    top: "56%",
                    position: "absolute",
                    visibility: "hidden",
                })}
                className="signup-success"
            >Successfully registered..! Hang on, Logging in!</Typography>
            <Button
                variant='contained'
                color='common'
                sx={(theme) => ({
                    width: "fit-content",
                    mx: 'auto',
                    marginTop: "32px",
                    borderRadius: '50vh',
                    padding: "8px 28px",
                    fontWeight: "700",
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.primary.extraLight,
                })}
                onClick={handleSignUp}
            >
                Sign up
            </Button>
        </Stack>
    )
}

function SignIn() {

    const userRef = useRef(null);
    const passRef = useRef(null);
    const { signIn } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = () => {
        const username = userRef.current.value;
        const password = passRef.current.value;

        if (username === "" || password === "") {
            if (password === "") passRef.current.focus();
            if (username === "") userRef.current.focus();
            return;
        }

        signIn(userRef.current.value, userRef.current.value, passRef.current.value);
    }

    return (
        <Stack
        gap={4}
        width="80%"
        >
            <Typography
                variant='h5'
                className='sign-in-title'
                sx={{
                    fontWeight: "700",
                    textAlign: "center",
                    marginBottom: "2.25rem",
                    cursor: "pointer",
                }}
                onClick={() => {
                    const signInDialog = document.querySelector('.sign-in-dialog');
                    const signInText = document.querySelector('.sign-in-title');
                    const signUpText = document.querySelector('.sign-up-title');
                    signInDialog.style.top = (signInDialog.style.top === '83%' || signInDialog.style.top === '') ? '13%' : '83%';
                    signInText.style.fontSize = (signInText.style.fontSize === '1.5rem' || signInText.style.fontSize === '') ? '2.125rem' : '1.5rem';
                    signUpText.style.fontSize = (signUpText.style.fontSize === '2.125rem' || signUpText.style.fontSize === '') ? '1.5rem' : '2.125rem';
                }}
                >Sign In</Typography>
            <TextField 
                type={"text"}
                variant="standard"  
                placeholder="Email or Username"
                inputRef={userRef}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <PersonOutlineIcon
                            size="small"
                            sx={(theme) => ({
                                color: theme.palette.primary.dark,
                                margin: 1,
                            })}
                        />
                    )
                }}
            />
            <TextField 
                type={showPassword ? "text" : "password"}
                variant="standard"
                size="small"
                placeholder="Password"
                inputRef={passRef}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <VpnKeyIcon
                            size="small"
                            sx={(theme) => ({
                                color: theme.palette.primary.dark,
                                margin: 1,
                            })}
                        />
                    ),
                    endAdornment: (
                        showPassword ? 
                        <VisibilityOffIcon
                            size="small"
                            sx={(theme) => ({
                                color: theme.palette.primary.dark,
                                margin: 1,
                                cursor: "pointer",
                            })}
                            onClick={() => setShowPassword(prev => !prev)}
                        />
                        :
                        <VisibilityIcon
                            size="small"
                            sx={(theme) => ({
                                color: theme.palette.primary.dark,
                                margin: 1,
                                cursor: "pointer",
                            })}
                            onClick={() => setShowPassword(prev => !prev)}
                        />
                    )
                }}
            />
            <Button
                variant='contained'
                color='common'
                sx={(theme) => ({
                    width: "fit-content",
                    mx: 'auto',
                    marginTop: "                                                                                                                                                        5rem",
                    borderRadius: '50vh',
                    padding: "8px 28px",
                    fontWeight: "700",
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.primary.extraLight,
                })}
                onClick={handleSignIn}
            >
                Sign in
            </Button>
        </Stack>
    )
}

export default Sign;