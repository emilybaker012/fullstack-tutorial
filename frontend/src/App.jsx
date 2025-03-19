import React, { useState } from 'react'
import './App.css'
import axiosClient from './common/client/axiosInstance'
import {useQuery} from '@tanstack/react-query';

function App() {
  const [fetchData, setFetchData] = useState(false);
  const {data} = useQuery({
    queryKey: ['test'],
    queryFn: () => (axiosClient.get('api/v1/test')),
    enabled: !!fetchData,
  })
  return (
    <>
      <div className='mb-4 text-2xl font-bold text-white'> A Very Basic Frontend</div>
      <button onClick={()=>{setFetchData(true)}}> Click Me</button>
      <div className='mt-2'>
        {data?.data && "Got data from the backend!"}
      </div>
    </>
  )
}

export default App
