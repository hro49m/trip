import "./style.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default function _Tab() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      variant="fullWidth"
      value={value}
      className="status-tab"
      onChange={handleChange}
      sx={{
        margin: {
          xs: 'auto',
          md: 'unset'
        },
        ml:{
          md: 100
        },
        minWidth: {
          xs: "100%",
          md: "10%",
        },
      }}
      aria-label="basic tabs example"
    >
      <Tab label="غیر فعال" value={2} />
      <Tab label="فعال(15)" value={1} />
    </Tabs>
  );
}
