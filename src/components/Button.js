import Button from "@material-ui/core/Button";

function MyButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

export default MyButton;
