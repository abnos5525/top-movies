import { Box, Chip } from "@mui/material";
import {useEffect, useState} from "react";

const ChipsInfo = ({ onGenreClick,selectedGenres  }) => {
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

    // const [selectedChipId, setSelectedChipId] = useState(0);
    //
    // const handleChipClick = (genreId) => {
    //     // اگر روی همان Chip کلیک شده باشد، از حالت انتخاب خارج شود
    //     const newSelectedChipId = selectedChipId === genreId ? 0 : genreId
    //     setSelectedChipId(newSelectedChipId)
    //
    //     // ارسال اطلاعات به تابع پدر (onGenreClick)
    //     onGenreClick(newSelectedChipId !== 0 ? newSelectedChipId : 0)
    // }

    const [localSelectedGenres, setLocalSelectedGenres] = useState([]);

    useEffect(() => {
        setLocalSelectedGenres(selectedGenres || []); // اضافه کردن چک برای وجود selectedGenres
    }, [selectedGenres]);

    const handleChipClick = (genreId) => {
        if (!localSelectedGenres) return; // افزودن چک برای وجود localSelectedGenres

        const newSelectedGenres = [...localSelectedGenres];

        const isSelected = newSelectedGenres.includes(genreId);
        if (isSelected) {
            newSelectedGenres.splice(newSelectedGenres.indexOf(genreId), 1);
        } else {
            newSelectedGenres.push(genreId);
        }

        setLocalSelectedGenres(newSelectedGenres);
        onGenreClick(newSelectedGenres);
    };

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
                     backgroundColor: localSelectedGenres.includes(genre.id) ? "info.main" : "primary.light",
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
