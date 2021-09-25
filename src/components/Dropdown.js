import { IconButton, Button, Popover } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

function Dropdown({
  id,
  open,
  anchorEl,
  show = () => {},
  hide = () => {},
  onClose = () => {},
  btnText = "Dropdown",
  btnColor = "inherit",
  btnVariant = "text",
  iconBtn = false,
  icon = <MoreIcon />,
  positionX = "left",
  positionY = "bottom",
  children,
  ...props
}) {
  return (
    <>
      {iconBtn ? (
        <IconButton color={btnColor} onClick={show}>
          {icon}
        </IconButton>
      ) : (
        <Button variant={btnVariant} color={btnColor} onClick={show}>
          {btnText}
        </Button>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={hide}
        anchorOrigin={{
          vertical: positionY,
          horizontal: positionX,
        }}
      >
        {children}
      </Popover>
    </>
  );
}

export default Dropdown;
