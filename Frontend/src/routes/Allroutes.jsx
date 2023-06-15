import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import PrivateRoute from '../context/PrivateRotue'
import Products from '../components/Products'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={
            <PrivateRoute>
                <Products/>
            </PrivateRoute>
        }/>
    </Routes>
  )
}

export default Allroutes