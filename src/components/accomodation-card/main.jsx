import { Button, Badge } from "@mui/material";
import Pic from "@@/assets/images/1.jpeg";
import Pic1 from "@@/assets/images/2.jpeg";
import Pic2 from "@@/assets/images/3.jpeg";
import Pic3 from "@@/assets/images/4.jpeg";
import Pic4 from "@@/assets/images/5.jpeg";

import Card from "@mui/material/Card";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function HotelCard() {
  let PICS = [Pic, Pic1, Pic2, Pic3, Pic4];

  return (
    <Card sx={{ m: 3 }} elevation={0}>
      <div
        style={{
          position: "relative",
          height: "270px",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <Badge
          style={{
            position: "absolute",
            right: "40px",
            top: "30px",
          }}
          sx={{ "& .MuiBadge-badge": { fontSize: 10, height: 25, width: 60 } }}
          className="absolute"
          badgeContent={" غیر فعال ⓧ"}
          color="error"
        />
        <img
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            height: "100%",
          }}
          src={PICS[Math.floor(Math.random() * PICS.length)]}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: "0px",
            right: 0,
            marginLeft: "auto",
            paddingRight: "7px",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            marginRight: "auto",
            height: "85px",
            color: "white",
            textAlign: "right",
            background:
              "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,0) 100%)",
          }}
        >
          <br />
          <em>ویلا سه خوابه استخر دار لوکس در شیراز</em>
          <br />
          <strong
            style={{
              backgroundColor: "rgba(225, 225, 225, 0.12)",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            کد اقامتگاه:
            <code>154658465</code>
          </strong>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button sx={{ mt: 2 }} variant="outlined" endIcon={<EditNoteIcon />}>
          ویرایش
        </Button>
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          color="success"
          endIcon={<PowerSettingsNewIcon />}
        >
          فعال سازی اقامتگاه
        </Button>
      </div>
    </Card>
  );
}
