import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: "0",
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex start",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  text: {
    padding: "0px 10px 10px 10px",
    marginBottom: "44px",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
    textShadow:
      "  0px 11px 10px rgba(81,67,21,0.8), 03px 3px 10px #330000,-2px 1px 10px #FF0000",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0px 16px",
  },
  cardActions: {
    padding: "0px 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "5px",
  },
});
