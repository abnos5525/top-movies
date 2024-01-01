import Grid from "@mui/material/Unstable_Grid2";
import {Link} from "react-router-dom";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const MovieCard = ({movie})=>{

    const {id, title, poster} = movie
    return(
        <Grid xs={12} sm={5} md={3} lg={2} xl={2} sx={{m:2,display:"flex",float:"left",textAlign:"center"}}>
            <Link to={`/top-movies/movie/${id}`}>
                <Card
                    sx={{borderRadius:2,
                        width:{
                            lg:"160px",
                            md:"210px",
                            sm:"220px",
                            xs:"360px"
                        }
                    }}>
                    <CardActionArea>
                        <CardMedia sx={{height:"260px"}}
                            component="img"
                            image={poster}
                        />
                        <CardContent sx={{backgroundColor:"primary.dark",height:"60px",p:1,borderRadius:0,overflow:"hidden"}}>
                            <Typography gutterBottom variant="h6"
                                        component="div" sx={{textAlign:"right"}}>
                                {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    )
}

export default MovieCard