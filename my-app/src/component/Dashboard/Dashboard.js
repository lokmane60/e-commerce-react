import React, { useState } from 'react'
import {Pie,Bar,Line} from 'react-chartjs-2'
import {Data} from '../data/Data'
import { Chart as Chartjs } from 'chart.js/auto'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Dashboard = () => {
    const [userData,setUserData]=useState({
        labels:Data.map(data=>data.month),
        datasets:[{
            label:'number of sales',
            data:Data.map(data=>data.money),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    })
    const [user,setUser]=useState({
      labels:Data.map(data=>data.month),
      datasets:[{
          label:'number of sales',
          data:Data.map(data=>data.money),
          
      }]
  })


  return (
    <div className='container'>
      
      <div className='row justify-content-start'>
        
        <div className='col-12 col-md-6'><Bar style={{width:'100%'}}data={userData}/></div>
        <div className='col-12 col-md-6'><Line data={userData}/></div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-6 '><Pie data={user}/></div>

      </div>
    </div>
    
    
  )
}

export default Dashboard