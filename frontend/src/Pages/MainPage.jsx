import { React, useEffect, useState } from "react";
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Button,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  paper: {
    height: 300,
    width: 300,
  },
  text: {
    textAlign: "center",
    paddingTop: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  margin: {
    marginLeft: "30%",
    marginTop: "3%",
  },
}));

function MainPage() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState("");
  const [query, setQuery] = useState({ name: "", age: "", gender: "" });

  useEffect(async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/admin/teachersDetails"
      );
      setTotalCount(response.data.data);
    } catch (ErrorMessage) {
      console.log(ErrorMessage);
    }
    handlePageChange();
  }, [query.name, query.age, query.gender]);

  console.log(query);

  const handlePageChange = (event, value) => {
    axios
      .get(
        `http://localhost:5000/admin/teachersDetails?page=${value}&limit=4&name=${query.name}&age=${query.age}&gender=${query.gender}`
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  return (
    <>
      <TextField
        label="Type name"
        name="name"
        value={query.name}
        type="text"
        onChange={handleChange}
        style={{ marginLeft: "20px", marginTop: "10px" }}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sort By Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="age"
          name="age"
          value={query.age}
          onChange={handleChange}
        >
          <MenuItem value="" disabled>
            Age
          </MenuItem>
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sort By Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="gender"
          name="gender"
          value={query.gender}
          onChange={handleChange}
        >
          <MenuItem value="" disabled>
            gender
          </MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>
      <div className={classes.margin}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item lg={6}>
            <Grid container justify="center" spacing={2}>
              {data.map((value) => (
                <Grid key={value._id} item>
                  <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.text}>
                      Name:{value.name}
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                      Age:{value.age}
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                      Gender:{value.gender}
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                      No-Of-Classes:{value.noOfclasses}
                    </Typography>
                    <Button variant="contained" color="primary">
                      <Link
                        to={`/teacher/${value._id}`}
                        className={classes.link}
                      >
                        View Details
                      </Link>
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Pagination
        count={Math.ceil(totalCount.length / 4)}
        color="primary"
        className={classes.pagination}
        onChange={handlePageChange}
        style={{ marginLeft: "35%", marginTop: "30px" }}
      />
    </>
  );
}

export default MainPage;
// 5fb7f4d2285b9e13a3b1eddd
