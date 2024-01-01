import {useNavigate, useParams} from "react-router-dom";
import {Box, Card, CardActionArea, CardMedia, Chip, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SkeletonMovies from "./SkeletonMovies.jsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie} from "../reducers/movieSlice.js";
import notFound from "../assets/noImg.png"
import Header from "./Header.jsx";
import {KeyboardDoubleArrowLeftRounded, KeyboardDoubleArrowRightRounded} from "@mui/icons-material";
import {Helmet} from "react-helmet-async";

const MovieDetails = () =>{
    const {movieId} = useParams()
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [loading,setLoading] = useState(false)

    const { movieDetails:movies, status, error} = useSelector((state) => state.movies);

    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        if(movies.images){
            const updateImageIndex = () => {
                setImageIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
            };

            const intervalId = setInterval(updateImageIndex, 6000);

            // Cleanup function to clear the interval when the component unmounts
            return () => {
                clearInterval(intervalId);
            };
        }
    }, []);

    useEffect(() => {
        setLoading(true);

        dispatch(fetchMovie(movieId))
        setTimeout(()=>{
            setLoading(false)
        },2000)
    }, [movieId])

    const onNextControll = (e)=>{
        e.preventDefault()
        if(movieId <=250) {
            navigate(`/top-movies/movie/${parseInt(movieId) + 1}`)
        }
    }

    const onPrevControll = (e)=>{
        e.preventDefault()
        if(movieId >=1){
            navigate(`/top-movies/movie/${parseInt(movieId)-1}`)
        }
    }


    return(
        <>
            <Header/>
            <Helmet>
                <title>
                    {movies.title}
                </title>
            </Helmet>
        <Box sx={{width:"90vw",border:"12px solid #445", borderRadius:6,
            m:"auto",my:5,position:"relative",pb:5}}>
            {
                loading || status === "pending" ?
                    (
                        <SkeletonMovies count={2} height={1000}/>
                    ) : status === "rejected" || error || movies.length ?
                        (
                            <Typography variant="h4" textAlign="center">
                                فیلمی یافت نشد
                            </Typography>
                        )
                    :
                    (
                        <>
                            <Typography sx={{m:1, textAlign:"center", float:"right",
                                position:"absolute",right:10,top:12,zIndex:3,
                                fontSize:{
                                    xs:"14pt",
                                    sm:"18pt",
                                    md:"21pt",
                                    lg:"25pt"
                                },
                                backgroundColor: "rgba(0, 0, 0, 0.7)", // یک رنگ تیره برای پس‌زمینه
                                padding: "1px", // افزودن یک فاصله داخلی
                                borderRadius: "3px",
                            }}>
                                {movies.title}
                            </Typography>
                            <Chip label={`${movies.imdb_rating} :IMDB`} color="secondary"
                                  sx={{zIndex:5,position:"absolute",
                                right:20,top:80,height:40,fontSize:"13pt"}}
                            />

                            <Chip label={`${movies.runtime}`} color="warning"
                                  sx={{zIndex:5,position:"absolute",
                                      right:20,top:130,height:40,fontSize:"9pt"}}
                            />

                            <CardMedia sx={{
                                  width:"99%",
                                  m:"auto",
                                  mt:1,
                                  }}
                                       component="img"
                                       image={ movies.images ?
                                                    movies.images[imageIndex]
                                           :   notFound
                            }
                                  />


                            <Grid xs={6}  sx={{m:2,float:"left",position:"absolute",top:0}}>
                                <Card
                                    sx={{
                                        boxShadow:"5px 6px 4px rgba(0,0,0,.5)",
                                        width:{
                                            lg:"280px",
                                            md:"230px",
                                            sm:"200px",
                                            xs:"140px"
                                        }
                                    }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={movies.poster}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid container columnSpacing={1}
                                  sx={{
                                      mt:{
                                          lg:0,
                                          md:0,
                                          sm:8,
                                          xs:8
                                      }
                                  }}>
                                <Grid xs={12} sm={12} md={4} lg={4}
                                      sx={{backgroundColor:"primary.light",p:2,m:2,
                                        ":hover":{
                                            backgroundColor:"secondary.main"
                                        }
                                }}>
                                    <Typography variant="h5" sx={{float:"left"}}>
                                        ژانر
                                    </Typography>
                                    <Typography variant="body1" sx={{float:"right",ml:1}}>
                                        {movies.genres[0]}
                                    </Typography>
                                    <Typography variant="body1" sx={{float:"right",ml:1}}>
                                        {movies.genres[1]}
                                    </Typography>
                                    <Typography variant="body1" sx={{float:"right"}}>
                                        {movies.genres[2]}
                                    </Typography>
                                </Grid>

                                <Grid xs={12} sm={12} md={3} lg={3} sx={{backgroundColor:"primary.light",p:2,m:2,
                                    ":hover":{
                                        backgroundColor:"secondary.main"
                                    }
                                }}>
                                    <Typography variant="h5" sx={{float:"left"}}>
                                        کشور
                                    </Typography>
                                    <Typography variant="h6" sx={{float:"right"}}>
                                        {movies.country}
                                    </Typography>
                                </Grid>

                                <Grid xs={12} sm={12} md={3} lg={3} sx={{backgroundColor:"primary.light",p:2,m:2,
                                    ":hover":{
                                        backgroundColor:"secondary.main"
                                    }
                                }}>
                                    <Typography variant="h5" sx={{float:"left"}}>
                                        سال
                                    </Typography>
                                    <Typography variant="h6" sx={{float:"right"}}>
                                        {movies.released}
                                    </Typography>
                                </Grid>

                                <Grid xs={12} sm={12} md={3} lg={3} sx={{backgroundColor:"primary.light",p:2,m:2,
                                    ":hover":{
                                        backgroundColor:"secondary.main"
                                    }
                                }}>
                                    <Typography variant="h5" sx={{float:"left"}}>
                                        کارگردان
                                    </Typography>
                                    <Typography variant="body1" sx={{float:"right"}}>
                                        {movies.director}
                                    </Typography>
                                </Grid>

                                <Grid xs={12} sm={12} md={6} lg={6} sx={{backgroundColor:"primary.light",p:2,m:2,
                                    ":hover":{
                                        backgroundColor:"secondary.main"
                                    }
                                }}>
                                    <Typography variant="h5" sx={{float:"left"}}>
                                        بازیگران
                                    </Typography>
                                    <Typography variant="body1" sx={{float:"right"}}>
                                        {movies.actors}
                                    </Typography>
                                </Grid>

                                <Grid xs={12} sx={{mt:5}}>
                                    {
                                        movieId === "1" ?
                                            <KeyboardDoubleArrowLeftRounded sx={{color:"#fff",fontSize:"80pt",
                                                position:"absolute",right:0, opacity:".5",
                                                backgroundColor:"primary.light",borderRadius:50,mr:3}} />
                                            :
                                            <KeyboardDoubleArrowLeftRounded onClick={(e)=>onPrevControll(e)}
                                                                            sx={{color:"#fff",fontSize:"80pt",
                                                                                position:"absolute",right:0,
                                                                                backgroundColor:"primary.dark",borderRadius:50,mr:3,cursor:"pointer"}} />
                                    }

                                    {
                                        movieId === "250" ?
                                            <KeyboardDoubleArrowRightRounded
                                                sx={{color:"#fff",fontSize:"80pt",opacity:".5",
                                                    backgroundColor:"primary.light",borderRadius:50,ml:3}} />
                                            :
                                            <KeyboardDoubleArrowRightRounded
                                                onClick={(e) => onNextControll(e)}
                                                sx={{color:"#fff",fontSize:"80pt",
                                                    backgroundColor:"primary.dark",borderRadius:50,ml:3,cursor:"pointer"}} />
                                    }

                                </Grid>
                            </Grid>


                        </>
                    )
            }

        </Box>
        </>
    )
}

export default MovieDetails