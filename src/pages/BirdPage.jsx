import React from 'react'
import useFetch from '../useFetch'
import BirdCard from '../components/BirdCard'

export default function BirdPage() {
  const { error, isPending, data: birds } = useFetch('http://localhost:8000/Tbl_Bird')
  return (
    
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { birds && birds.map(bird => (<BirdCard mmName={bird.BirdMyanmarName}/>))}
    </div>
  )
}
