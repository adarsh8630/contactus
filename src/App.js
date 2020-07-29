import React , {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import contact from './Assets/contact.png';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Recaptcha from 'react-recaptcha';
import Divider from '@material-ui/core/Divider';
import rightimg from './Assets/rightimg.png';

const useStyles = makeStyles((theme) => ({
  header: { 
    textAlign: 'center',
  },
  cardcontent: {
    paddingLeft: "0",
    paddingRight:0,
    paddingTop:"30px" ,
  },
}));

var callback = function () {
  console.log('Done!!!!');
};
function App() {
  const classes = useStyles();
  const [name,setName] = useState({fullname : '' ,
                                   email :'' ,
                                   mobile: '' ,
                                   purpose: '' ,
                                   tellusmore: ''
                                });

  return (
      <div className="bg-class" style={{background:`url(${contact})`
                                        ,backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        position: 'absolute'
                                      }}>
        <div className="grid-container-class-form" style={{minHeight:'400px'}}>
          <Grid container spacing={0}>
              <div className="left-image-text-container">
                <h1 className="onehead">
                  Contact Us
                </h1>
                <p className="onepara">Questions, issues, or just want to say hello?<br></br>
                 Contact Us and we will get back to you as soon as we can!</p>
              </div>
          </Grid>
          <Grid container spacing = {4}>
            <Grid item xs = "1">
              
            </Grid>
            <Grid item xs="6">
              <Card className={classes.header} width = "50%">
                <CardContent className={classes.cardcontent}>
                <TextField

                                  required
                                  id="outlined-required"
                                  placeholder="Enter Your Full Name here"
                                  variant="outlined"
                                  name="fullname"
                                  style={{ width: '90%',background:'white',marginBottom:'20px'}}
                                  value = {name.fullname}
                                  onChange={e => setName({...name , fullname: e.target.value})}
                />

                <TextField
                                  required
                                  id="outlined-required"
                                  placeholder="Enter Your Email ID here"
                                  variant="outlined"
                                  name="email"
                                  style={{ width: '90%',background:'white',marginBottom:'20px'}}
                                  value = {name.email}
                                  onChange={e => setName({...name , email: e.target.value})}
                              />

                <TextField
                                  required
                                  id="outlined-required"
                                  placeholder="Enter Your Phone Number"
                                  variant="outlined"
                                  name="mobile"
                                  style={{ width: '90%',background:'white',marginBottom:'20px'}}
                                  value = {name.mobile}
                                  onChange={e => setName({...name , mobile: e.target.value})}
                              />

                <TextField
                                  required
                                  variant="outlined"
                                  select
                                  label="Purpose of reaching  out"
                                  id="purpose"
                                  style={{ width: '90%',background:'white',marginBottom:'20px'}}
                              >
                                <MenuItem value="">
                                      <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={1}>Purpose1</MenuItem>
                                  <MenuItem value={2}>Purpose2</MenuItem> 
                              </TextField>

                              <TextField
                                  required
                                  id="outlined-required"
                                  multiline
                                  rows = {9}
                                  placeholder="Tell Us More "
                                  variant="outlined"
                                  name="tellusmore"
                                  value = {name.detail}
                                  onChange={e => setName({...name ,detail: e.target.value})}
                                  style={{ width: '90%',background:'white',marginBottom:'20px'}}
                              />

                              <Recaptcha
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                render="explicit"
                                onloadCallback={callback}
                              />

                              <Button variant="contained"
                                  style={{ width: '70%',marginBottom:'20px'}}
                                  size="large"
                                  color="secondary">SEND MESSAGE
                              </Button>

                              
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs="1">
            <div className="rmg" style={{background:`url(${rightimg})`
                                        ,
                                        backgroundRepeat: 'no-repeat',
                                        position: 'relative'
                                      }}>

            </div>
            </Grid>
            <Grid item xs>
              <h1 className="sideheads">SEND US A MAIL</h1>
              <p className="sidepara">GENERAL ENQUIRY<br></br>
                support@gradely.ng</p>
              <p className="sidepara">BUSINESS<br></br>
                teams@gradely.ng</p>
              <Divider variant="inset"/>
              <h1 className="sideheads">CALL US</h1>
              <p className="sidepara">(+234) 810 059 8268</p>
              <p className="sidepara">(+234) 805 596 7844</p>
              <Divider variant="inset"/>
              <h1 className="sideheads">ADDRESS</h1>
              <p className="sidepara">8,Montgomery Street,<br></br>
                Yaba, Lagos Nigeria</p>
            </Grid>
          </Grid>
        </div>
      </div>
  );
}

export default App;
