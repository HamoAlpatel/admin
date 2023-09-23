import { useTheme } from '@emotion/react';
import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form"
import Header from '../../Header';

export default function Form() {
  const theme = useTheme()
  // handle close and open message 
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  // @ts-ignore
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  // regular expretion
  const regemail = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;
  const regphone = /[0][0-9]{10}/;
  // data
  const data = [
    {
      value: 'Mangar',
      label: 'Mangar',
    },
    {
      value: 'User',
      label: 'User',
    },
    {
      value: 'Admin',
      label: 'Admin',
    }
  ];
  // react hook form
  const {
    register,
    handleSubmit,
    // @ts-ignore
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    handleClick();
    let val1 = document.getElementById('v1')
    let val2 = document.getElementById('v2')
    let val3 = document.getElementById('v3')
    let val4 = document.getElementById('v4')
    let val5 = document.getElementById('v5')
   
    // @ts-ignore
    val1.value = ''
    // @ts-ignore
    val2.value = ''
    // @ts-ignore
    val3.value = ''
    // @ts-ignore
    val4.value = ''
    // @ts-ignore
    val5.value = ''



  }


  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}
      noValidate
      autoComplete="off"
    >
      <Header suptitle={"Create a New User Profile"} title={"CREATE USER"}/>
      <Stack direction={'row'} gap='15px' flexWrap='wrap' >
        <TextField className="val" id='v1' label="Frist Name" variant="filled" sx={{
          flex: 1,
          minWidth: '100px'
        }}
          error={Boolean(errors.firstName)}
          // @ts-ignore
          helperText={Boolean(errors.firstName) ? "Frist Name is required & min 3 character" : ""}
          {...register("firstName", { required: true, maxLength: 10, minLength: 3 })}
        />
        <TextField className="val" id='v2' label="Last Name" variant="filled" sx={{
          flex: 1,
          minWidth: '100px'
        }}
          error={Boolean(errors.lastName)}
          // @ts-ignore
          helperText={Boolean(errors.lastName) ? "Last Name is required & min 3 character" : ""}
          {...register("lastName", { required: true, maxLength: 10, minLength: 3 })}
        />
      </Stack>



      <TextField className="val" id='v3' label="Email" variant="filled"
        error={Boolean(errors.Email)}
        // @ts-ignore
        helperText={Boolean(errors.Email) ? "Please provide a valid email address" : ""}
        {...register("Email", { required: true, pattern: regemail })}
      />
      <TextField className="val" id='v4' label="Contact Number" variant="filled"
        error={Boolean(errors.Phone)}
        // @ts-ignore
        helperText={Boolean(errors.Phone) ? "Please write the phone number starting with 0 and consisting of 11 digits" : ""}
        {...register("Phone", { required: true, maxLength: 11, pattern: regphone })}
      />
      <TextField className="val" id='v5' label="Address" variant="filled" />
      <TextField className="val" id='v6' label="City" variant="filled" />
      {/* selection role */}
      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="Mangar"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {/* button */}
      <Box sx={{ textAlign: 'end' }}>
        <Button type='submit' sx={{ textTransform: "capitalize" }} variant='contained'>
          Create New User
        </Button>

        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open} autoHideDuration={1500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{
            width: '100%',
            // @ts-ignore
            background: theme.palette.success.dark,
            color: '#fff'
          }}>
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  )
}
