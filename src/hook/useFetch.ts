import { useEffect, useState } from "react";

export default function useFetch(url : string){
    const [data, setData] = useState([]);
    

    useEffect(()=>{
        fetch(url) // ? day는 동적으로 저 day = {}값에 따라 주소를 fetch해오겠다는 뜻
        .then((res) => {
            return res.json(); // res는 실제 json형이 아니라, json으로 변환되고 promise반환
        })
        .then((data) => setData(data));
    },[url])  

    return data;
}

