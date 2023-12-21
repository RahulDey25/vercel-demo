import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/getuser').then(async (res)=>{
      const jsonResponse = await res.json();
      console.log(jsonResponse);
      if(!jsonResponse.loggedin){
        router.push('/login');

      }else{
        setUser(jsonResponse);
      }
    });
  },[]);


  const logout = async() =>{
    const response = await fetch('/api/logout');
    router.push('/login');
  };
  return (
    
  <div className="container">
    <ul className="list-group mt-4">
      <li className="list-group-item">Name:{user?.name}</li>
      <li className="list-group-item">Age:{user?.age}</li>
      <li className="list-group-item">City:{user?.city}</li>
    </ul>

    <button onClick={logout} className="btn btn-danger mt-4">Logout</button>
  </div>
    
  )
}
