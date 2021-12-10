// import Data from "./mock-data.json";
// import {useState} from "react";

// export default function App ({data}){
//   const [query, setQuery] = useState("")
//   return (
//     <div>
//       <input placeholder="Enter product Title" onChange={event => setQuery(event.target.value)} />
//       {
//   data.filter(product => {
//     if (query === '') {
//       return product;
//     } else if (product.title.toLowerCase().includes(query.toLowerCase())) {
//       return product;
//     }
//   }).map((product, index) => (
//     <div className="box" key={index}>
//       <p>{product.title}</p>
//       <p>{product.id}</p>
//     </div>
//   ))
// }
//     </div>
//   )
// }