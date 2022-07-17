import React from "react"
import { Avatar, AvatarGroup,ImageList, ImageListItem, Typography, List, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material"
import { Box } from "@mui/system"
export default function Feed (){

    return(
        <Box  
            flex={2}
            p={2}
            sx={{display:{xs: "none", sm:"block"}}}
            width={300}
        >
            <Box position="fixed">
                <Typography variant="h6" fontWeight={100}>Online Friend</Typography>
                <AvatarGroup >
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg"/>
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg"/>
                    <Avatar alt="" src="https://material-ui.com/static/images/avatar/5.jpg"/>

                </AvatarGroup>
                <Typography variant="h6" fontWeight={100}>Latest photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5} sx={{overflow:"hidden", width:"350px"}}>
                  <ImageListItem>
                    <img 
                      src="https://i.pinimg.com/236x/d2/5c/ff/d25cffe23e512d290781724cdaa9719b.jpg" 
                      alt="doggi"
                    />
                  </ImageListItem>
                  <ImageListItem>
                    <img 
                      src="https://i.pinimg.com/236x/fa/f8/7e/faf87ebf31bb04326d85d802db3a5047.jpg"
                      alt="duck"
                    />
                  </ImageListItem>
                  <ImageListItem>
                    <img 
                      src="https://i.pinimg.com/236x/2c/e9/31/2ce931c901ba679c2a855bfd77e6da5f.jpg" 
                      alt="doggi black"                    
                      />
                  </ImageListItem>
                  
                </ImageList>
                <Typography variant="h6" fontWeight={100}>Latest Conversation</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ali Connors
                          </Typography>
                          {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Summer BBQ"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            to Scott, Alex, Jennifer
                          </Typography>
                          {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Sandra Adams
                          </Typography>
                          {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
            </Box>
        </Box>
    )
}