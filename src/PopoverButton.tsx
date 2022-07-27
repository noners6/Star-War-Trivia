import { Button, Popover, Typography } from "@mui/material";
import React from "react";
import "./popoverButton.css";

interface ButtonPopoverProps {
  answer: string;
}

const ButtonPopover = (props: ButtonPopoverProps) => {
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={"buttonContainer"}>
      <Button
        size={"small"}
        sx={{
          backgroundColor: "black",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "gray",
          },
        }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Reveal Answer!
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>{props.answer}</Typography>
      </Popover>
    </div>
  );
};

export default ButtonPopover;
