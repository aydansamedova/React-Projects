import React, {useEffect,useState, useCallback} from 'react'

export default function Image() {
    const[data, setData]=useState()

    const catImage=useCallback(
        () => {
            fetch("https://cataas.com/cat", { cache: 'no-cache' }).then(resp=>(resp.blob())).then(data=>{setData(URL.createObjectURL(data))})
        },
        [data],
    )

    useEffect(() => {
        catImage()
    },[])

    return (
        <div >
            <h1>Cat Images </h1>
            <div style={{width:"300px", height:"250px" , margin:"50px auto"}}>
<img src={data} alt="" style={{width:"100%", height:"100%", objectFit:"cover"}} />
            </div>
       <button onClick={catImage}>Change Image</button>
       <hr style={{width:"100%"}} />
        </div>
    )
}
