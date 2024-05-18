import Grid from "@mui/material/Grid";
import HotelCard from "@/accomodation-card/main";

function AccomodationGridSection() {
  const DUMMY_CARDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Grid container spacing={1} sx={{ mt: 20 }}>
      {DUMMY_CARDS.map((i) => {
        return (
          <Grid
            key={i}
            item
            xs={11}
            md={4}
            style={{
              margin: "auto",
            }}
          >
            <HotelCard></HotelCard>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default AccomodationGridSection;
