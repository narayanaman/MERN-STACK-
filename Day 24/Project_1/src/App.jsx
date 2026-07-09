import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { motion } from "motion/react";
import { animate } from "motion";

function App() {
  return (
    <>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            GyanDeep
          </Typography>
          <Button variant="contained">Home</Button>
          <Button color="inherit">Course</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          backgroundColor: "#888",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            sx={{ color: "white" }}
            fontWeight="bold"
            component={motion.h1}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Learn React with MUI
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 6 }}
            component={motion.h6}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We are Going to Learn about Material UI Design.
          </Typography>
          <Button
            component={motion.button}
            initial={{ scale:0 }}
            animate={{scale:1}}
            transition={{duration:0.5,delay:0.6}}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            variant="contained"
            color="success" 
            size="large"
          >
            Get Started
          </Button>
        </Container>
      </Box>
      {/* Card Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={5}>
          Why Choose Us ?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card component={motion.div}
                  initial={{opacity:0,y:80,scale:1}}
                  whileInView={{opacity:1,y:0,scale:1}}
                  exit={{opacity:0,y:80,sclae:0.9}}
                  viewport={{once:false,amount:0.4}}
                  transition={{duration:0.6,delay: 0.2}}
                  sx={{
                    height:"100%",
                    borderRadius:3,
                    textAlign:"center",
                    boxShadow:3,

                  }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Easy Learning
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Get Started with Beginner Level
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card 
            component={motion.div}
                  initial={{opacity:0,y:80,scale:1}}
                  whileInView={{opacity:1,y:0,scale:1}}
                  exit={{opacity:0,y:80,sclae:0.9}}
                  viewport={{once:false,amount:0.4}}
                  transition={{duration:0.6,delay: 0.2}}
                  sx={{
                    height:"100%",
                    borderRadius:3,
                    textAlign:"center",
                    boxShadow:3,

                  }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Easy Learning
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Get Started with Beginner Level
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
            component={motion.div}
                  initial={{opacity:0,y:80,scale:1}}
                  whileInView={{opacity:1,y:0,scale:1}}
                  exit={{opacity:0,y:80,sclae:0.9}}
                  viewport={{once:false,amount:0.4}}
                  transition={{duration:0.6,delay: 0.2}}
                  sx={{
                    height:"100%",
                    borderRadius:3,
                    textAlign:"center",
                    boxShadow:3,

                  }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Easy Learning
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Get Started with Beginner Level
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundColor: "#111",
          color: "white",
          py: 3,
          textAlign: "center",
        }}
      >
        <Typography>&copy; 2026 Gyandeep Session . All the Best</Typography>
      </Box>
    </>
  );
}

export default App;
