// import {  useFormik } from 'formik'
// import React from 'react'
// import { sing } from '../Schemas/Validat'

// const initialValues={
// name:"",
// email:"",
// password:"",
// confirm_password:""
// }
// const Daafetch = () => {
//   const {handleBlur,handleChange,handleSubmit,errors,values,touched} =  useFormik({
//         initialValues:initialValues,
//         validationSchema:sing,
//         onSubmit: (values) => {
//             console.log(values);
            
//             // action.resetForm();
//         }
//     })
//     // console.log(Formik)
//     console.log(errors)
//   return (
//     <div>
//         <form onSubmit={handleSubmit}  style={{width:"20%",background:"red",display:"flex",justifyContent:"center",padding:"20px",margin:"100px auto"}}>
//             <div style={{width:"100%",padding:"10px 25px 10px 10px"}}>
//             <div>
//                 <input type="text" placeholder='name' id='name' autoComplete='off' name='name' value={values.name} onChange={handleChange}onBlur={handleBlur}   />
//                 {errors.name && touched.name ? <p>{errors.name}</p> : null}
//             </div>
//             <div>
//                 <input type="email" placeholder='email' id='email' autoComplete='off' name='email'  value={values.email} onChange={handleChange}onBlur={handleBlur}/>
//                 {errors.email && touched.email ? <p>{errors.email}</p> : null}
//             </div>
//             <div>
//                 <input type="password" placeholder='password' id='password' autoComplete='off' name='password'  value={values.password} onChange={handleChange}onBlur={handleBlur} />
//                 {errors.password && touched.password ? <p>{errors.password}</p> : null}
//             </div>
//             <div>
//                 <input type="password" placeholder='confirm_password' id='confirm_password' autoComplete='off' name='confirm_password' value={values.confirm_password} onChange={handleChange}onBlur={handleBlur}
//              />
//                {errors.confirm_password && touched.confirm_password ? <p>{errors.confirm_password}</p> : null}
//             </div>
//             <button type='submit'>submit</button>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default Daafetch