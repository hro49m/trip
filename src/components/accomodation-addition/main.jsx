import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import AccomodationAdditionDialog from "@/accomodation-addition-dialog/main";
import "./style.css";

export default function AccomodationAddition() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <article className="control-container">
        <Button onClick={handleClickOpen}>افزودن اقامتگاه + </Button>
        <Typography>لیست اقامتگاه های من</Typography>
      </article>
      <AccomodationAdditionDialog open={open} onClose={handleClose} />
    </>
  );
}
