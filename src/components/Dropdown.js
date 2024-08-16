import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Playlist } from "../data/Playlist";
import { styled } from "@mui/material/styles";

const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white", // Default border color
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "white", // Border color on hover
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white", // Border color when focused
  },
}));

function Dropdown({ onSubmit }) {
  const [selectedYear, setSelectedYear] = useState("");

  const handleChange = (event) => {
    const selected = event.target.value;
    setSelectedYear(selected);
    onSubmit(selected); // Kirim tahun yang dipilih ke Content
  };

  return (
    <div>
      <FormControl id="dropdown-container">
        <InputLabel id="decade-label">Select a decade</InputLabel>
        <CustomSelect
          labelId="decade-label"
          value={selectedYear}
          onChange={handleChange}
          label="Select a decade"
        >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          {Array.from(Playlist.keys()).map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
    </div>
  );
}

export default Dropdown;
