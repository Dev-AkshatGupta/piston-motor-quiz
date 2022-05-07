import React, { useEffect, useState } from "react";
// import {Routes,Route} from "react-router-dom";
// import {LogInForm} from "Components/Authentication/LogInForm";
// import {SignUpForm} from "Components/Authentication/SignUpForm";
import {db} from "./fireBase";
import {addDoc, collection,getDocs,updateDoc,doc} from "firebase/firestore";
import { defaultEqualityCheck } from "reselect";

function App() {
  const userCollectionRef=collection(db,"users");
  useEffect(()=>{
    const getUserDetails=async()=>{
      const data= await getDocs(userCollectionRef);
  //  this api calls get us all the things in the database
      data.docs.map(item=>console.log(({...item.data(),id:item.id})));
    }
    getUserDetails();
  },[])
  const [names,setName]=useState({});
  // This was for the post request
  const createUser=async(names)=>{
    await addDoc(userCollectionRef,names);
  }
  return (
    <div className="App">
       {/* post request now for creating new users */}
       <input type="text" placeholder="name" name="name" id="" onChange={(e)=>setName({...names,name:e.target.value})}/>
       <input type="number" placeholder="age" name="" id="" onChange={(e)=>setName({...names,age:e.target.value})}/>
       <button onClick={()=>createUser(names)}>Create new user</button>

    </div>
  );
}

export default App;
