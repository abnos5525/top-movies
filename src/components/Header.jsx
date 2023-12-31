import {Box, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header = () =>{

    const navigate = useNavigate()
    return(
        <Box sx={{width:"100%", backgroundColor:"primary.main",
            height:"70px",borderBottom:1, borderBottomColor:"#6b6b6b",boxShadow:"2px 5px 3px rgba(0,0,0,.4)"}}>
                <Typography variant="h4" sx={{textAlign:"center",lineHeight:1.6,cursor:"pointer"}}
                            onClick={()=>navigate("/top-movies")}>
                        فیلم برتر
                </Typography>
        </Box>
    )
}

export default Header