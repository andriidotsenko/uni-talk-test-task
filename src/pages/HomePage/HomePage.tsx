import { Pagination, SelectChangeEvent } from "@mui/material";
import { FC, useState } from "react";
import UnsplashPhotos from "../../components/UnsplashPhotos/UnsplashPhotos";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";

const apiKey = "4HbzscYsx_uoGKA7F59n5SW-BokKePMAvwCEdTQd8q0";

export const HomePage: FC = () => {
  const [sortParametr, setSortParametr] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSortParametr(event.target.value);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <>
      <CustomSelect sortParametr={sortParametr} onChange={handleChange} />
      <UnsplashPhotos
        apiKey={apiKey}
        currentPage={currentPage}
        perPage={12}
        orderBy={sortParametr}
      />
      <Pagination
        count={999}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      />
    </>
  );
};
