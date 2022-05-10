import {Box} from '@mui/material';
import { useEffect, useState } from 'react';
import { currentUser } from '../services/authService';
import { MailItemsTable } from '../components/MailItemsTable/';

export default function Home() {
  const [user,setUser] = useState(true);
  useEffect(()=>{

// will get the info if user is authenticated or not

    async function wrapper(){
      const user = await currentUser();
      setUser(user);
    }
    wrapper();
  });
  return (
    <Box>
      <h1> Cymulate mails </h1>
      {
        !user ? <h3>you need to authenticate</h3>
        : <MailItemsTable/>
      }

    </Box>
  )
}
