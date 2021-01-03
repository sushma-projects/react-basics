
import React from 'react'

function Displayname({name,alertName}) {
    return (
        <div>
            <h1>My self {name}</h1>
            <button onClick={()=>{alertName("Sakshii")}}>Click</button> 
            
        </div>
    )
}

export default Displayname








// export function Displayname(props)
// {
//     return <h1>hello me </h1>
// }







