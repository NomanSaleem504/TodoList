import React from 'react'


const Home = (props) => 
{
  const {Name , LastName, Email, Address,  myNameOne, Age, myEmail, myAddress,} = props;

return (
    <>
        <input type="text" placeholder="Name" value={Name} onChange={(e) =>myNameOne(e.target.value)}></input>
        <input type="text" placeholder="Last Name" value={LastName} onChange={(e) =>Age(e.target.value)}></input>
        <input type="email" placeholder="E-mail" value={Email} onChange={(e) =>myEmail(e.target.value)}></input>
        <input type="text" placeholder="myAddress" value={myAddress} onChange={(e) =>myAddress(e.target.value)}></input>
       </>
  )

}

export default Home