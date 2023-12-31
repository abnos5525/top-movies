import {Skeleton} from "@mui/material";

const SkeletonMovies = ({count,style,height})=>{
    return(
        <>
            {
                Array.from({ length: count }, (_, index) => (
                <Skeleton key={index} variant="rounded"
                          sx={style}
                          height={height}
                          animation="wave"
                         />
            ))}
        </>
    )
}

export default SkeletonMovies