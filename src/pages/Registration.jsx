import React from "react";

const Registration = () => {
  const paperStyle = {
    padding: 20,
    height: "400px",
    width: 380,
    margin: "20px auto",
    align: "center",
  };

  const btnstyle = {
    margin: "8px 0",
    height: 40,
  };

  const[userRegistration,setUserRegistration]= usestate({
     firstname:"",
     lastname:"",
      email:"",
      password:"",
      

  })

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h1>Register Here</h1>
          </Grid>

          <TextField
            label="First Name"
            placeholder="Enter First Name"
            value={userRegistration.firstname}
            onChange={}
            fullWidth
            required
          />
          <br />
          <br />

          <TextField
            label="Last Name"
            placeholder="Enter Last Name "
            
            value={userRegistration.lastname}
            onChange={}
            fullWidth
            required
          />
          <br />
          <br />


          <TextField
          label="UserEmail"
          placeholder="Enter Your Email"
          value={userRegistration.email}
          onChange={}
          fullWidth
          required
        />
        <br />
        <br />
          
        <TextField
          label="Password"
          placeholder="Enter Your Password"
          type="password"
          value={userRegistration.password}
          onChange={}
          fullWidth
          required
        />

          <Button
            disabled={signinProgress}
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={saveUser}
          >
            Sign Up
          </Button>
          <ToastContainer />
        </Paper>
      </Grid>
    </>
  );
};

export default Registration;
