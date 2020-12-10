import { useRouter } from 'next/router'
import useSWR from 'swr'
import React,{useState, useEffect} from 'react';


const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Person() {
  const [currentSum,setCurrentSum]=useState(0);
  const Add=(e)=>{
    e.preventDefault();
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum+parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
  
  }
  
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.meter_serialNum && `/api/people/${query.meter_serialNum}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
  
  <form>
    <table>
      <thead>
        <tr>
          <th id="meter">Meter#</th>
          <th id="oct07_20">October 7th</th>
          <th id="Current" >Meter Reading</th>
          <th id="used">Water Used</th>
          <th id="remain">Water Remain</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="serial" >{data.meter_serialNum}</td>
          <td id="value1" type="number">{data.oct07_20}</td>
          <td><input type="text" id="num" placeholder="enter a number" /></td>
          <td ><input type="text" id="result" value={0}  readOnly /></td>
          <td id="remaining">hi</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td><button onClick={Add}>Calc</button></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      
    </table>
    
    </form>
    
  )
  }
     

