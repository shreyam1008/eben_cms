import { Button, Input, Paper, TextField, Typography } from "@mui/material";
import "./Form.scss";

const Form = () => {
  return (
    <div className="Form">
      <Paper elevation={3} className="form_fields">
        <Typography variant="h6">Form</Typography>
        <TextField id="outlined-basic" label="Name" variant="outlined" />

        <TextField id="outlined-basic" label="Title" variant="outlined" />

        <TextField id="outlined-basic" label="Theme" variant="outlined" />

        <TextField id="outlined-basic" label="Bio" variant="outlined" />

        <TextField id="outlined-basic" label="Ideas" variant="outlined" />
        <TextField id="outlined-basic" label="Quotes" variant="outlined" />
        <Button variant="contained" className="submit_button">
          Submit
        </Button>
      </Paper>
    </div>
  );
};

export default Form;
