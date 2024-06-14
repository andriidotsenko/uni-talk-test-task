import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface CustomSelectProps {
  sortParametr: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

export function CustomSelect({ sortParametr, onChange }: CustomSelectProps) {
  return (
    <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
      <InputLabel id="demo-select-small-label">Sort By</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sortParametr}
        label="Sort By"
        onChange={onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"latest"}>Latest</MenuItem>
        <MenuItem value={"popular"}>Popular</MenuItem>
        <MenuItem value={"oldest"}>Oldest</MenuItem>
      </Select>
    </FormControl>
  );
}
