import { useState } from 'react';
import { FormControl, Button, Box, TextField, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material'
import { login } from '../../services/authService'

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const handleClick = async () => {
        await login(userName, password);
      }

    return (
        <Box>
            <FormControl sx={{ m: 4, width: 300 }}>
                <TextField id="outlined-basic" label="User name" variant="standard" margin="normal" fullWidth
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                    ),
                }}
                onChange={e => setUserName(e.target.value)}
                />
                <TextField id="outlined-basic" label="Password" variant="standard" margin="normal" fullWidth type='password'
                onChange={e => setPassword(e.target.value)}
                />
                <Button sx={{ m: 8, width: 150 }} color="info" variant="contained" onClick={() => handleClick()}>SignIn</Button>
            </FormControl>
        </Box>
    )
}

export default SignIn;