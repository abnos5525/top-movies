import Grid from "@mui/material/Unstable_Grid2";
import MovieCard from "./MovieCard.jsx";
import SkeletonMovies from "./SkeletonMovies.jsx";
import {Typography} from "@mui/material";

const MainSection = ({ movies, loading }) => {

    const style = {
        width: {
            lg: "160px",
            md: "210px",
            sm: "220px",
            xs: "360px"
        },
        float: "left",
        m: 2
    };

    return (
        <Grid xs={10} sx={{ mx: "auto" }}>
            {
                loading ? (
                <SkeletonMovies count={10} style={style} height={260} />
            ) : movies.length > 0 ? (
                movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
            ) :
                (
                <Typography variant="h4" textAlign="center" sx={{mt:20}}>
                    فیلمی یافت نشد،
                    صفحه را رفرش کنید
                </Typography>
            )
            }
        </Grid>
    );
};

export default MainSection;
