import React from "react";
import Product from "./Product/Product";
import useStyles from "./productsStyle";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
//import productsReducers from "../../reducers/productsReducers";

export default function Products({ setCurrentId }) {
  const productsReducers = useSelector((state) =>  state);
  console.log(productsReducers);

  const classes = useStyles();

  return !productsReducers.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {productsReducers.map((product) => (
        <Grid key={product._id} item xs={12} sm={6} md={6}>
          <Product product={product} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}
