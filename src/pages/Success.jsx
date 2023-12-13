import React from 'react'
import { PropagateLoader } from 'react-spinners'
import { useState, useEffect } from 'react';


const Success = () => {
  //to show loading animation initially true
  const [loading, setLoading] = useState(true);

  //on page reload run setTimeout for 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    //before showing Order Successful we are showing a little animation of dots
    <div className="flex flex-col items-center justify-center h-screen">
    {loading ? (
      //if loading is true show animation
      <PropagateLoader color="#36d7b7" />
    ) : (
      //when setLoading() is false show this
      <div>
        <h2 className="text-3xl text-green-400 font-semibold mb-4 text-center">
          Order Successful!
        </h2>
        <p>Your order has been sucessfully placed</p>
      </div>
    )}
  </div>
  )
}

export default Success