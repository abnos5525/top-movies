import {Drawer} from "@mui/material";
import ChipsInfo from "../filtersection/ChipsInfo.jsx";
import {useState} from "react";

const SideBar = ({setDrawerOpen,drawerOpen,onGenreChange}) =>{

    const [selectedGenre, setSelectedGenre] = useState(0);

    const handleGenreChange = (genreId) => {
        setSelectedGenre(genreId);
        onGenreChange(genreId);
    };

    return(
        <Drawer xs={1} sm={0} md={0} lg={0} xl={0} sx={{ float:"left",position:"absolute",
            left:0,
            height:"100vh",
            overflowX:"hidden",overflowY:"auto", zIndex:"6",
            "& .MuiDrawer-paper": {
                width: 230,
                backgroundColor:"primary.main",
            },
            display:{
                xs:"block",
                sm:"none",
                md:"none",
                lg:"none",
                xl:"none"
            }}}
                open={drawerOpen} variant="temporary" onClose={()=> setDrawerOpen(false)}>

           <ChipsInfo onGenreClick={handleGenreChange} selectedGenre={selectedGenre} />

        </Drawer>
    )
}

export default SideBar