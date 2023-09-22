import React from 'react';
import { Stack, Typography, Container, Box, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import WebIcon from '@mui/icons-material/Web';
import { BsDiscord  } from "react-icons/bs";


const AllProjects = () => {
  return (
    <Container sx={{ maxWidth: '1500px', paddingTop: "50px" }} id="projects">
      <Stack
        marginY={10}
        gap={10}
      >
        {/* 1st Section */}
        <Stack gap={3} direction="row" width="100%">
          <Stack gap={2} width="50%">
            <Box width="100%">
              <Paper elevation={0}>
                <img
                  src="https://i.ibb.co/J7wdK9b/Screen-Shot-2023-09-22-at-6-23-16-pm.png"
                  alt="SurfaceBot"
                  width="100%"
                  style={{ borderRadius: '20px' }}

                />
              </Paper>
            </Box>
            <Stack direction="row" spacing={1}>
              <IconButton href='https://github.com/codester1000/SurfaceBot' color="primary" size='large' aria-label="github" sx={{
                '&:hover': {
                  color: 'primary.main',
                },
              }}>
                <GitHubIcon fontSize='large' />
              </IconButton>
              <IconButton href='https://discordapp.com/users/692547174839353405' color="primary" size='large' width="100%" sx={{
                '&:hover': {
                  color: 'primary.main',
                },
              }}>
                <BsDiscord size={30}/>
              </IconButton>
              <IconButton href='https://surface-bot.com' color="primary" size='large' sx={{
                '&:hover': {
                  color: 'primary.main',
                },
              }}>
                <WebIcon fontSize='large' />
              </IconButton>
            </Stack>
          </Stack>
          <Stack gap={0} width="50%" >
            <Typography variant="h2" textTransform="uppercase" >
              SurfaceBot
            </Typography>
            <Typography maxWidth="460px" variant="body2" paddingTop={3}>
              I founded the business to help Discord communities to efficiently improve community environments using sentiment analysis and AI to monitor and analyse their communities. I wanted a dashboard that allowed moderators to easily see the health of their community and to be able to increasingly improve/monitor the quality of each and every user. 
            </Typography>
            <Typography maxWidth="460px" variant="body2" paddingTop={3}>
              I solely developed this application, integrating OpenAI as well as other technologies in order to create a great product for Discord moderators. This application has been a great way to learn a lot of different languages and technologies, developing on both the backend and the frontend. An AI powered bot is something I have thought about for a while and it was great to make this come to life while I learned and honed in my craft.  
            </Typography>
          </Stack>
        </Stack>

        {/* 2nd SECTION */}
        <Stack gap={3} direction="row" width="100%">
          <Stack gap={0} width="50%" alignItems="end" justifyContent="">
            <Typography variant="h2" textTransform="uppercase">
              ReelyApp
            </Typography>
            <Typography maxWidth="460px" variant="body2" paddingTop={3}>
              ReelyApp is a conversational recommendation engine that chats with users about movies and other media, using Open AIs GPT-3.5 Turbo as well as other LLMs and AI technology. The model would recommend movies to users after conversing with them, then show them recommended scenes and trailers, as well as linking to the streaming service.
            </Typography>
            <Typography maxWidth="460px" variant="body2" paddingTop={3}>
              I helped develop this generative AI application, working on both the backend and frontend development. I learned a lot about LLMs and how to integrate them, this broadened my horizons and really helped me understand how to develop with AI. I solely developed the home page of the website, working from a design brief, using MUI, TypeScript and React Scroll Parallax for the first time.
            </Typography>
          </Stack>
          <Stack gap={0} width="50%">
            <Box>
              <Paper elevation={0}>
                <img
                  src="https://i.ibb.co/3k4yyvZ/ReelyApp.jpg"
                  alt="Website ReelyApp Project"
                  width="100%"
                  style={{ borderRadius: '20px' }}
                />
              </Paper>
            </Box>
            
          </Stack>
        </Stack>

        {/* 3rd Section */}
        <Stack gap={3} direction="row" width="100%">
          <Stack gap={1} width="50%">
            <Box>
              <Paper elevation={0}>
                  <img
                    src="https://i.ibb.co/MpWDP4k/Jello-1.jpg"
                    alt="Website Jello Project"
                    width="100%"
                    style={{ borderRadius: '20px' }}

                  />
              </Paper>
            </Box>
            <Stack direction="row" spacing={1}>
              <IconButton href='https://github.com/blakejarryd/Jello' color="primary" sx={{
                '&:hover': {
                  color: 'primary.main',
                },
              }}>
                <GitHubIcon fontSize='large'/>
              </IconButton>
            </Stack>
          </Stack>
          <Stack gap={0} width="50%">
            <Typography variant="h2" textTransform="uppercase">
              Jello
            </Typography>
            <Typography maxWidth="460px" variant="body2" paddingTop={3}>
              If your team is wobbling when managing their projects, use Jello to crystallize their vision. Jello is the pectin that will help your team shape their project, or to manage your shopping list. Jello is here to help you get a jiggle on.
            </Typography>
            <Typography maxWidth="460px" variant="body2" paddingTop={3}>
              This was my first group project while doing my course at General Assembly, and I found it a great intro into helping manage a product and then help the team develop it. We created this website while working in a team of 3, learning how to use Git and working with other coders. This project was a great learning experience and had great application to my future in a team of developers. 
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AllProjects;
