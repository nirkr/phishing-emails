import axios from 'axios';

const login = async (userName, password) => {
    try {
      return await axios.post(`http://localhost:4003/api/auth/signin`, {userName, password})
    }
    catch(e){
      throw new Error(e);
    }  
  };

  const currentUser = async () =>{
    try{
        const res = await axios.get('http://localhost:4003/api/auth/currentUser');
        return res.data;
    }
    catch(err){
        console.error(err)
    }
};

export {login, currentUser}