import { InputAdornment } from "@material-ui/core";
import React from "react";
import CustomIconButton from "../../atoms/IconButton/index";
import SearchIcon from "../../../assets/icons/search.jpg";
import { TextField } from "@mui/material";

const index = () => {
    return (
        <>
            <TextField
                variant="standard"
                placeholder="Search by title or author"
                InputProps={{
                    style: {
                        color: "#6D787E",
                        fontSize: "24px",
                        fontWeight: 700,
                        height: "46px",
                        width: "658px",
                        borderBottom: "2px solid #6D787E",
                        paddingBottom: "16px",
                    },
                    startAdornment: (
                        <InputAdornment position="start">
                            <CustomIconButton
                                icon={SearchIcon}
                                iconwidth="23px"
                                iconheight="23px"
                                customstyle={{ marginRight: "25px" }}
                            />
                        </InputAdornment>
                    ),
                }}
            ></TextField>
        </>
    );
};

export default index;
