import {Box, Pagination} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FilterSection from "./filtersection/FilterSection.jsx";
import {useEffect, useRef, useState} from "react";
import MainSection from "./MainSection.jsx";
import {styled} from "@mui/system"
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie, fetchMovies, fetchMoviesByGenre} from "../reducers/movieSlice.js";
import Header from "./Header.jsx";
import SideBar from "./sidebar/SideBar.jsx";

const Home = ()=>{

    const CenteredPagination = styled(Pagination)({
        margin: "auto",
        '& .MuiPaginationItem-root': {
            color: 'white', // تغییر رنگ متن دکمه‌ها به سفید
        }
    });
    const boxRef = useRef();

    const [page,setPage] = useState(1)
    const [loading,setLoading] = useState(false)
    const [selectedGenres, setSelectedGenres] = useState(0);

    const [drawerOpen, setDrawerOpen] = useState(false)

    const dispatch = useDispatch();

    const { movies, pageCount } = useSelector((state) => state.movies);

    // اسکرول به بالای صفحه
    useEffect(() => {
        if (boxRef.current) {
            boxRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [page]);
    /////////////////////////////////////////////////////////////////

    // const savePaginationData = (page, selectedGenres) => {
    //     const paginationData = { page, selectedGenres };
    //     localStorage.setItem('paginationData', JSON.stringify(paginationData));
    // };
    //
    // const loadPaginationData = () => {
    //     const savedData = localStorage.getItem('paginationData');
    //     return savedData ? JSON.parse(savedData) : null;
    // };


    useEffect(() => {
        setLoading(true);

        // const savedPaginationData = loadPaginationData();
        // if (savedPaginationData) {
        //     setPage(savedPaginationData.page);
        //     setSelectedGenres(savedPaginationData.selectedGenres);
        // }

        if (selectedGenres !== 0) {
            dispatch(fetchMoviesByGenre({ genre: selectedGenres, page }))
        } else {
            dispatch(fetchMovies(page))
            dispatch(fetchMovie(1))
        }
        setTimeout(()=>{
            setLoading(false)
        },2000)
    }, [dispatch, page, selectedGenres]);


    const handlePageChange = (event, value) => {
        setLoading(true)
        setPage(value)
        // savePaginationData(value, selectedGenres);
        setTimeout(()=>{
            setLoading(false)
        },2000)
    };

    const handleGenreChange = (genres) => {
        setLoading(true);
        setSelectedGenres(genres);
        setPage(1);
        // savePaginationData(1, genres);
        setTimeout(()=>{
            setLoading(false)
        },3000)
    }

    return(
        <Box ref={boxRef}>
            <Grid container>
                <SideBar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} onGenreChange={handleGenreChange} />
                <Header setDrawerOpen={setDrawerOpen} />
                <FilterSection onGenreChange={handleGenreChange}/>
                <MainSection movies={movies} loading={loading} />
                <CenteredPagination count={pageCount} page={page} sx={{m:"auto", my:5}} color="info" onChange={handlePageChange}/>
            </Grid>
        </Box>
    )
}

export default Home