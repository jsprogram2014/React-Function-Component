import React, { useState } from 'react';

function MyFunc() {
  const [annualIncrease, showAnnualIncrease] = useState(false);

  return (
    <>
      <button onClick={()=>{showAnnualIncrease(!annualIncrease)}}>{annualIncrease ? 'Hide' : 'Show'} the annual increase</button>
      {annualIncrease && <div>is 10000</div>}
    </>
  )

}

export default MyFunc;