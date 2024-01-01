import { Box, Chip } from "@mui/material";
import {useState} from "react";

const ChipsInfo = ({ onGenreClick,selectedGenre }) => {
    const genreMapping = [
        {
            id: 1,
            persianName: "جنایی",
        },
        {
            id: 2,
            persianName: "درام",
        },
        {
            id: 3,
            persianName: "اکشن",
        },
        {
            id: 4,
            persianName: "بیوگرافی",
        },
        {
            id: 5,
            persianName: "تاریخی",
        },
        {
            id: 6,
            persianName: "ماجراجویی",
        },
        {
            id: 7,
            persianName: "فانتزی",
        },
        {
            id: 8,
            persianName: "غربی",
        },
        {
            id: 9,
            persianName: "کمدی",
        },
        {
            id: 10,
            persianName: "علمی تخیلی",
        },
        {
            id: 11,
            persianName: "رازآلود",
        },
        {
            id: 12,
            persianName: "خانوادگی",
        },
        {
            id: 13,
            persianName: "جنگ",
        },
        {
            id: 14,
            persianName: "انیمیشن",
        },
    ]

    const [selectedChipId, setSelectedChipId] = useState(selectedGenre);

    const handleChipClick = (genreId) => {
        // اگر روی همان Chip کلیک شده باشد، از حالت انتخاب خارج شود
        const newSelectedChipId = selectedChipId === genreId ? 0 : genreId
        setSelectedChipId(newSelectedChipId)

        // ارسال اطلاعات به تابع پدر (onGenreClick)
        onGenreClick(newSelectedChipId !== 0 ? newSelectedChipId : 0)
    }

    return (
        <Box sx={{my: 3,ml:2}}>
            {
                genreMapping.map((genre) => (
                <Chip
                key={genre.id}
                label={genre.persianName}
                 onClick={() => handleChipClick(genre.id)}
                sx={{
                     width: "98%",
                     cursor: "pointer",
                     backgroundColor: selectedChipId === genre.id ? "info.main" : "primary.light",
                     color: "#fff",
                     mb: 2,
                 }}
                />
            ))
            }
        </Box>
    )
}
export default ChipsInfo;
