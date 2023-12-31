import {useRouteError} from "react-router-dom";
import {Typography} from "@mui/material";

const NotFound = () =>{

    const error = useRouteError()
    console.error(error)

    return(
        <div className="text-center mt-10">
            <Typography variant="h4" textAlign="center" sx={{mt:20}}>
                صفحه یافت نشد یا مشکل پیش آمده!
            </Typography>
            <Typography variant="h5" textAlign="center" sx={{mt:10}}>
                صفحه را رفرش کنید!
            </Typography>
        </div>
    )
}

export default NotFound