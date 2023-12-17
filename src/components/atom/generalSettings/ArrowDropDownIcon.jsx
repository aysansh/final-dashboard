import { ExpandOutlined } from "@mui/icons-material";
import React from "react";
import { SvgIcon } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import image from '../../assets/imgs/ArrowIcon.png'

export default function ArrowDropDownIcon({cls}){
    return(
        <KeyboardArrowDownIcon  className={cls}/>
    )
} 