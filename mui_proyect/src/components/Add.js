import { useState } from "react";
import {Fab, Modal, Tooltip, Typography, styled, Avatar, TextField, Stack, ButtonGroup, Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/system";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRange from "@mui/icons-material/DateRange";
const StyledModal = styled(Modal)({
    display: "flex",
    alignItems:"center",
    justifyContent: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems:"center",
    gap:"10px",
    marginBottom: "20px"
})
export default function Add (){
    const [open, setOpen]= useState(false)
    const [value, setValue] = useState("")
    function handleClose(){
        setOpen(false)
    }
    function handleOpen (){
        setOpen(true)
    }
    function handleChange(e){
        setValue(e.target.value)
    }
    return(
        <>
            <Tooltip title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
                <Fab color="primary" aria-label="add" onClick={handleOpen}>
                    <AddIcon/>
                </Fab>   
            </Tooltip>
            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={{xs:"85vw", sm:"400px"}} height={280} bgcolor="background.default" color="text.primary" p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar 
                            src="https://i.pinimg.com/236x/b8/ef/e9/b8efe90cd9636ac9411ea2269625a1c3.jpg"
                            sx={{width: 30, height:30}}
                        />
                        <Typography fontWeight={500} variant="spam">Doggy</Typography>
                    </UserBox>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Post"
                        multiline
                        onChange={handleChange}
                        placeholder="What's  on your mind"
                        rows={3}
                        sx={{width:"100%"}}
                        value={value}
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color="primary"/>
                        <ImageIcon color="secondary"/>
                        <CameraAltIcon color="success"/>
                        <PersonAddIcon color="error"/>
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button >Post</Button>
                        <Button>
                            <DateRange/>
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}