import React from 'react'

export function generateMetadata ({params}) {
    return{
        title: params.username,
        description: `Hi ${params.username}, you are wellcome`
    }
}

export default function page({params}) {
  return (
    <>
      <h1> This is {params.username}'s profile page </h1>
    </>
  )
}
