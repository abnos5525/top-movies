import Grid from "@mui/material/Unstable_Grid2";
import {Typography} from "@mui/material";
import ChipsInfo from "./ChipsInfo.jsx";

const FilterSection = ({ onGenreChange }) =>{

    return(
        <Grid xs={0} sm={2} md={2} lg={2} xl={2}
              sx={{mt:2,pl:3,
                display:{
                  xs:"none",
                    sm:"block",
                    md:"block",
                    lg:"block",
                    xl:"block"
                }
              }}>
            <Typography variant="h6">
                انتخاب ژانر
            </Typography>

            <ChipsInfo onGenreClick={onGenreChange} />

        </Grid>
    )
}

export default FilterSection