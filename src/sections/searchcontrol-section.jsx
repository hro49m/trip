import SearchBar from "@/searchbar/searchbar";
import AccomodationAddition from "@/accomodation-addition/main";
import StatusTab from "@/tab/main";

export default function SearchControlSection() {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "white",
        width: "100%",
        marginTop: 0,
        top: 0,
        zIndex: 10,
      }}
    >
      <div style={{ margin: "10px" }}>
        <SearchBar />
        <AccomodationAddition />
        <StatusTab />
      </div>
    </div>
  );
}
