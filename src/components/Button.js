import Button from "@mui/material/Button";

function MyButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

export default MyButton;
