import { Button, Input, Paper, TextField, Typography } from "@mui/material";
import "./Form.scss";

import CreatableSelect from "react-select/creatable";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [bio, setBio] = useState("");
  const [quotes, setQuotes] = useState("");
  const [ideas, setIdeas] = useState("");

  const handleSubmit = () => {
    console.log("sumbit of the data");
    const quoteList = quotes.split(",");
    const ideaList = ideas.split(",");
    console.log(name, title, theme, bio, quoteList, ideaList);
  };

  return (
    <div className="Form">
      <Paper elevation={3} className="form_fields">
        <Typography variant="h6">Form</Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="normal"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Theme"
          variant="outlined"
          margin="normal"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Bio"
          variant="outlined"
          margin="normal"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Ideas"
          variant="outlined"
          margin="normal"
          value={ideas}
          onChange={(e) => setIdeas(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Quotes"
          variant="outlined"
          margin="normal"
          value={quotes}
          onChange={(e) => setQuotes(e.target.value)}
        />
        <Button
          variant="contained"
          className="submit_button"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
};

export default Form;
