// import styles from './Status.module.css'

import { createElement } from "react";


const Status = (props) => {

    let comp;
    if(props.status=="paid")
    {
        comp=<div>Paid</div>
       

    }

    return ( 
        <div  >
            {comp}
        </div>
     );
}
 
export default Status;