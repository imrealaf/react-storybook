import Button from "@mui/material/Button";

function CustomButtom({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

export default CustomButtom;
