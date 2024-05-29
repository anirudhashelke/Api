// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const UserData = () => {
// const data=[
//    { name:"",
//    email:"",
//    username:"",
  
//    }
// ]
// // console.log(data)
// const [users,setUsers]=useState([])
    
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response=>{
//             // if (!response.ok) {
//             //     throw new Error('Network response was not ok');
//             //   }
//               return response.json();    
//         })
//         .then(ttt=>{
//             setUsers(ttt);
//             console.log(ttt)
//         })
//     },[])
//   return (
//     <div>
//          <h1>User List</h1>
//       <ul>
//         {users.map(user => (
//           <li >{user.name}</li>
//         ))}
      
//       </ul>
     
      
//     </div>
//   )
// }

// export default UserData