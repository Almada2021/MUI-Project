import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import { Box } from "@mui/system";
import Mail from "@mui/icons-material/Mail";
import { useState } from "react";
import Notifications from "@mui/icons-material/Notifications";
const StyledToolBar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between"
})
const Search = styled("div")(({theme}) =>({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius : theme.shape.borderRadius,
    width: "40%"
}))
const Icons = styled(Box)(({theme}) =>({
    display: "none",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))
const UserBox = styled(Box)(({theme}) =>({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))
export default function NavBar (){
    const [open, setOpen] = useState(false)
    return (
        <AppBar bgcolor="blue" position="sticky" >
            <StyledToolBar>
                <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
                    PetsWorld
                </Typography>
                <PetsIcon sx={{display:{xs:"block", sm:"none"}}}/>
                <Search><InputBase sx={{width:"100%"}} placeholder="search..."/></Search>
                <Icons>
                    <Badge badgeContent={1} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={1} color="error">
                        <Notifications/>
                    </Badge>
                    <Avatar sx={{width:30, height:30}} onClick={() => setOpen(true)}  src="https://i.pinimg.com/236x/b8/ef/e9/b8efe90cd9636ac9411ea2269625a1c3.jpg"/>
                </Icons>
                <UserBox>
                    <Avatar sx={{width:30, height:30}} onClick={() => setOpen(true)} src="https://i.pinimg.com/236x/b8/ef/e9/b8efe90cd9636ac9411ea2269625a1c3.jpg"/>
                    <Typography variant="spam">Doggy</Typography>
                </UserBox>
            </StyledToolBar>
            <Menu
                id="positioned-menu-profile"
                aria-labelledby="positioned-button-profile"
                open={open}
                onClose ={(e) => setOpen(false)}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{zIndex:"5000"}}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}