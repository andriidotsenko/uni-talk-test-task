import { Pagination, SelectChangeEvent } from "@mui/material";
import { FC, useState } from "react";
import { UnsplashPhotos } from "../../components/UnsplashPhotos/UnsplashPhotos";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import { CustomButton } from "../../components/CustomButton/CustomButton.tsx";

const apiKey = "4HbzscYsx_uoGKA7F59n5SW-BokKePMAvwCEdTQd8q0";
const PER_PAGE = 12;

export const HomePage: FC = () => {
  const [sortParameter, setSortParameter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSortParameter(event.target.value);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div
        className="wrapper"
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <CustomSelect sortParameter={sortParameter} onChange={handleChange} />
        <CustomButton
          onClick={() => setSortParameter("")}
          isDisable={sortParameter === ""}
        >
          Default
        </CustomButton>
      </div>
      <UnsplashPhotos
        apiKey={apiKey}
        currentPage={currentPage}
        perPage={PER_PAGE}
        orderBy={sortParameter}
      />
      <Pagination
        count={Infinity}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      />
    </>
  );
};
