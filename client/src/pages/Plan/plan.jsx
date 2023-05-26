import React from 'react'
// import { Helmet } from 'react-helmet'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const plan = () => {
  return (
    <div>
     <HelmetProvider>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Hello World</h1>
  
  </HelmetProvider>
  
      <header className="App-header">Title will be React Helmet   
Tutorial</header>
    </div>
  )
}

export default plan
