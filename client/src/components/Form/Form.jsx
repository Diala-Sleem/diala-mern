import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./formStyle";
import { createProduct, updateProduct } from "../../actions/productsActions";

export default function Form({ currentId, setCurrentId }) {
  const classes = useStyles();

  const [productData, setProductData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    price: "",
  });
  const product = useSelector((state) =>
    currentId
      ? state.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) setProductData(product);
  }, [product]);

  const clear = () => {
    setCurrentId(0);
    setProductData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      price: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createProduct(productData));
      clear();
    } else {
      dispatch(updateProduct(currentId, productData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${product.title}"` : "Add a Product"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={productData.creator}
          onChange={(e) =>
            setProductData({ ...productData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={productData.title}
          onChange={(e) =>
            setProductData({ ...productData, title: e.target.value })
          }
        />
        <TextField
          name="price"
          variant="outlined"
          label="Price"
          fullWidth
          value={productData.price}
          onChange={(e) =>
            setProductData({ ...productData, price: e.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          value={productData.message}
          onChange={(e) =>
            setProductData({ ...productData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={productData.tags}
          onChange={(e) =>
            setProductData({ ...productData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setProductData({ ...productData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
