import { useEffect, useState } from "react";
//   custom hook
function useCurrencyinfo(currency) {
    const [data,setData] = useState({})
   useEffect(() => {
    var resdetail
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    fetch(url)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
    console.log(data);
   }, [currency]) 

   return data 
}

export default useCurrencyinfo;