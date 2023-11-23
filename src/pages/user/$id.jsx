import React from 'react'
import { useParams } from 'react-router-dom';
export default function index(props) {
const params = useParams()
console.log(props)
  console.log(params)
  return (
    <div>user</div>
  )
}
