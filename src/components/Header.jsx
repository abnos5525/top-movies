import {Box, Fab, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header = ({setDrawerOpen}) =>{

    const navigate = useNavigate()
    return(
        <Box sx={{width:"100%", backgroundColor:"primary.main",textAlign:"center",
            height:"70px",borderBottom:1, borderBottomColor:"#6b6b6b",boxShadow:"2px 5px 3px rgba(0,0,0,.4)"}}>

            <Fab onClick={()=>setDrawerOpen(true)} variant="extended" sx={{
                position:"absolute", left:20, top:10,
                display:{
                    xs:"block",
                    sm:"none",
                    md:"none",
                    lg:"none",
                    xl:"none"
                },
                fontSize:"10pt", fontWeight:"bold", zIndex:2
            }}>
                انتخاب ژانر
            </Fab>

                <Typography variant="h4" sx={{textAlign:"center",lineHeight:1.6,cursor:"pointer"}}
                            onClick={()=>navigate("/top-movies")}>
                        فیلم برتر
                </Typography>
        </Box>
    )
}

export default Header