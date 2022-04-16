// const [datas,setData]=useState({});
//     var obj={
//         columns:[
//             {
//                 label:"Today's Complaints",
//                 field:"complaints",
//                 sort:"asc",
//                 width:300
//             },
//             {
//                 label:"Update Status"
//             }
//         ],
//         rows:[]
//     }
//     useEffect(()=>{
//         let today = new Date();
//         const dd = String(today.getDate()).padStart(2, "0");
//         const mm = String(today.getMonth() + 1).padStart(2, "0");
//         const yyyy = today.getFullYear();
//         today = dd + "-" + mm + "-" + yyyy;
//         let arr=[];
//         fireDb.child("complaints").once("value",(snapshot)=>{
//             setData({...snapshot.val()});
//             console.log(JSON.stringify(datas));
//             snapshot.forEach(objects=>{
//                 var address=objects.key;
//                 arr.push(address);
//                 var date=objects.val().date;
//                 //setData({...objects.val()});
//                 // console.log(data.toString());
//             });
//             // if(arr.length!=0){
//             //     setData({arr});
//             //     console.log(data.toString());
//             // }
//             // else{
//             //     setData();
//             // }
            
//         });
//         return () =>{
//             setData({})
//         }
//     },[]);
//     return (
//         <div>
            
//             <table striped bordered small>
//                 {/* <thead>
//                     <tr>
//                         <th>Today's Complaints</th>
//                         <th>Update Status</th>
//                     </tr>
//                 </thead> */}
//                 {/* <tbody>
//                     {Object.keys(data).map((id,index)=>{
//                         return(
//                             <tr>
//                                 <td key={id}>{data[id].date}</td>
//                                 <td></td>
//                             </tr>
//                         )
//                     })}

//                 </tbody> */}
//             </table>
//         </div>

// Header.css
// .header {
//   overflow: hidden;
//   background-color: #f1f1f1;
// }
// .header p {
//   float: left;
//   color: black;
//   text-align: center;
//   padding: 10px;
//   text-decoration: none;
//   font-size: 18px;
//   line-height: 15px;
//   border-radius: 4px;
// }

// .header p.logo {
//   font-size: 25px;
//   font-weight: bold;
//   color: #4284f5;
// }

// .header p:hover {
//   background-color: #ddd;
//   color: #5d6770;
// }

// .header p.active {
//   background-color: dodgerblue;
//   color: white;
// }

// .header-right {
//   float: right;
// }

// @media screen and (max-width: 500px) {
//   .header p {
//     float: none;
//     display: block;
//     text-align: left;
//   }

//   .header-right {
//     float: none;
//   }
// }
