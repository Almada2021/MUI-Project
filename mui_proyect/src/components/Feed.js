import { Box } from "@mui/system"
import Post from "./Post"

export default function Feed (){

    return(
        <Box  
            flex={4}
            p={2}
        >
            
            <Post img="https://i.pinimg.com/564x/29/8a/d4/298ad41e51004d8fc8c5ba942099dfc0.jpg"/>
            <Post img="https://i.pinimg.com/236x/68/19/f5/6819f5d6f728a7567ef73d6933c16b5d.jpg"/>
            <Post img="https://i.pinimg.com/236x/e6/d2/05/e6d20584e89f148f38f4e56cabd65e62.jpg"/>

        </Box>
    )
}