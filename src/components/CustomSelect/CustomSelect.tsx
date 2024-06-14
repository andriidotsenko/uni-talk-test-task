import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface CustomSelectProps {
  sortParameter: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

export function CustomSelect({ sortParameter, onChange }: CustomSelectProps) {
  return (
    <FormControl sx={{ m: 1, minWidth: "48%" }} size="medium">
      <InputLabel id="demo-select-small-label">Sort By</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sortParameter}
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
