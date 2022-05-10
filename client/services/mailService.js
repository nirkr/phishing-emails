import axios from 'axios';

async function fetchMails(){
    try{
        const res = await axios.get('http://localhost:4003/api/mails');
        console.log(res.data);
        return res.data;
    }
    catch(err){
        console.error(err)
    }
}

export {fetchMails}