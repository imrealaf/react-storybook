import { useState } from "react";

function useToggle() {
  const [open, setActive] = useState(false);
  const show = () => setActive(true);
  const hide = () => setActive(false);
  const toggle = () => setActive(!open);

  return {
    open,
    show,
    hide,
    toggle,
  };
}

export default useToggle;
