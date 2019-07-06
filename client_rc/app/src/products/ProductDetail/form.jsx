import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function AddressForm(props) {
  const {product, handleChange, handleSave, handleCreate, isNew} = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            value = {product.title}
            onChange={handleChange}
            fullWidth
            // autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            value = {product.description}
            onChange={handleChange}
            fullWidth
           
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cost"
            name="cost"
            label="Cost"
            fullWidth
            value = {product.cost}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="eqpStatus"
            name="eqpStatus"
            label="EQP Status"
            fullWidth
            autoComplete="eqpStatus"
            value = {product.eqpStatus}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="version"
            name="version"
            label="Version"
          
            
            value = {product.version}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      { isNew ?
        <Button variant="contained" color="primary"  onClick={handleCreate}  >Create</Button> :
        <Button variant="contained" color="primary"  onClick={handleSave} >Save</Button>
      }
      
      
    </React.Fragment>
  );
}