import { Button } from "@mui/material";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
export const CustomButton: FC<CustomButtonProps> = ({ children, onClick }) => {
  return (
    <Button
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
