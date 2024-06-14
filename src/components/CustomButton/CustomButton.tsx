import { Button } from "@mui/material";
import { FC, ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  onClick: () => void;
  isDisable?: boolean;
}
export const CustomButton: FC<CustomButtonProps> = ({
  children,
  onClick,
  isDisable,
}) => {
  return (
    <Button
      disabled={isDisable}
      variant="contained"
      onClick={onClick}
      sx={{
        width: "100%",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "var(--main-accent)",
        "&:hover": {
          backgroundColor: "var(--secondary-accent)",
        },
      }}
    >
      {children}
    </Button>
  );
};
