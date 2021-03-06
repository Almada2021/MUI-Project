import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar"
import Add from "./components/Add";
function App() {
  const [mode, setMode]= useState("light")
  const darkTheme = createTheme({
    palette:{
      mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>

      <Box bgcolor={"background.default"} color="text.primary">
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
  </ThemeProvider>

  ); 
}

export default App;
