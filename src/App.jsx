import "./App.css";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import Form from "./components/Form/Form";
//--------------------------------------------------------
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import mem from "./images/mem.png";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getProducts } from "./actions/productsActions";

//--------------------------------------------------------
function App() {
  const [currentId, setCurrentId] = useState(0);

  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [currentId, dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          MERN STACK
        </Typography>
        <img className={classes.image} src={mem} alt="mem" height="60" />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
            className={classes.mainCon}
          >
            <Grid item xs={12} sm={7}>
              <Products setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
