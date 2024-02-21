
import {  InputAdornment, Input, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


function InputFilter({ text, handleFilter, handleText }) {
    return (<Input
        placeholder="Search username"
        sx={{
            float: 'right'
        }}
        type='text'
        value={text}
        onChange={(e) => handleText(e.target.value)}
        endAdornment={
            <>
                <InputAdornment position="end">
                    <IconButton
                        onClick={handleFilter}
                    >
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
            </>
        } />

    );
}

export default InputFilter;