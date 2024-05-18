import { InputAdornment, Input } from "@mui/material";
import Pic from "@@/assets/icons/SearchIcon.png";

export default function SearchBar() {
  return (
    <search>
      <Input
        dir={"rtl"}
        autoFocus={true}
        id="filled-basic"
        placeholder="جستجوی اقامتگاه ها"
        startAdornment={
          <InputAdornment position="start" sx={{ m: 2 }}>
            <img src={Pic} className="m-1 mx-2" alt="Picture of the author" />
          </InputAdornment>
        }
        disableUnderline={true}
        sx={{
          backgroundColor: "#F2F2F2",
          borderRadius: "12px",
          width: "100%",
          height: "44px",
          fontFamily: "IRANYekanFN",
          fontZize: "14px",
          fontWeight: 400,
          lineHeight: "18px",
          letterSpacing: "-0.02em",
          "& input::placeholder": {
            fontFamily: "IRANYekanFN",
            fontZize: "14px",
            fontWeight: 400,
            lineHeight: "18px",
            letterSpacing: "-0.02em",
            opacity: 1,
          },
        }}
        size="medium"
        margin="none"
        maxRows={1}
      />
    </search>
  );
}
