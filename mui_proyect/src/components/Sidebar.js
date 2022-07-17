import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Switch } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Brightness2Icon from '@mui/icons-material/Brightness2';
export default function Sidebar ({mode, setMode}){
    return(
        <Box
            flex={1}
            p={2}
            sx={{display:{xs: "none", sm:"block"}}}
        >
          <Box position="fixed">
                
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#home" >
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Homepage" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#pages" >
                  <ListItemIcon>
                    <LibraryBooksIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Pages" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#groups" >
                  <ListItemIcon>
                    <PeopleIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Groups" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#store" >
                  <ListItemIcon>
                    <StorefrontIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Store" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#friends" >
                  <ListItemIcon>
                    <PersonIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Friends" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#settings" >
                  <ListItemIcon>
                    <SettingsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#profile" >
                  <ListItemIcon>
                    <AccountBoxIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#dark" >
                  <ListItemIcon>
                    <Brightness2Icon/>
                  </ListItemIcon>
                  <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")}/>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
    )
}