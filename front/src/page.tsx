import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Page = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    console.log('common raf LogIn'),
    axios.get('http://localhost:3000/page')
        .then((res) => {
            console.log(res.data)

            if (res.data === 'Success'){
              navigate('/page')
            }
            else {navigate('/')}
   
            // navigate('/');
        })
        .catch(err => 
            console.log(err))
        

  }, [])





  return (
    <div>common raf LogIn suc</div>
  )
}

export default Page
