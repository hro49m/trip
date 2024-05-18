import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { Stack } from "@mui/material";

function AccomodationAdditionDialog({ onClose, open }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          width: 1100,
          maxWidth: "100%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <DialogTitle>افزودن اقامتگاه</DialogTitle>
        <Stack dir="rtl" spacing={3} sx={{ m: 3 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            textAlign={"right"}
            selectedValue={10}
            placeholder="نوع اقامتگاه"
          >
            <MenuItem value={10} selected={true}>
              ویلا
            </MenuItem>
            <MenuItem value={20}>آپارتمان</MenuItem>
            <MenuItem value={30}>سوییت</MenuItem>
          </Select>
          <TextField dir={"rtl"} label="شهر" id="fullWidth" />
          <TextField dir={"rtl"} label="شهر" id="fullWidth" />
          <TextField dir={"rtl"} label="شهر" id="fullWidth" />
          <TextField dir={"rtl"} label="شهر" id="fullWidth" />
          <TextField dir={"rtl"} label="شهر" id="fullWidth" />
          <TextField dir={"rtl"} label="شهر" id="fullWidth" />
          <TextField dir={"rtl"} label="شهر" id="fullWidth" />
          <TextField dir={"rtl"} label="شهر" id="fullWidth" />
          <TextField dir={"rtl"} label="شهر" id="fullWidth" />
          <TextField dir={"rtl"} label="شهر" id="fullWidth" />
          <Button variant="contained" color="primary" onClick={handleClose}>
            ثبت اقامتگاه
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
}

export default AccomodationAdditionDialog;
