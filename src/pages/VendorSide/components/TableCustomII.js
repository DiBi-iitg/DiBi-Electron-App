import styles from './TableCustomII.module.css'
import Call from '../../../assets/Call.png'
import Frame from '../../../assets/Frame.png'
import React from 'react'
const venList=[]
    for(let i=0;i<3;i++)
        {
            venList.push(
                <tr key={i} className={styles.content} >
                        <td >Sahil</td>
                        <td>Fashion</td>
                        <td  >
                        <img style={{paddingRight:"1rem"}} src={Call} alt="Logo" />
                        <img style={{paddingLeft:"1rem"}} src={Frame} alt="Logo" />
                        </td>
                        <td>&#8377; 8000</td>
                        <td>&#8377; 11600</td>
                        <td className={styles.grey} >
                        Invite
                    </td>
                        {/* if(props.status=="Invite")
                    {<td className={styles.grey} >
                        Invite
                    </td>}
                    else if(props.status=="Accepted")
                    {<td className={styles.green} >
                    Accepted
                    </td>}
                    else if(props.status=="Rejected")
                    {<td className={styles.red} >
                    Rejected
                    </td>}
                    else if(props.status=="Requested")
                    {<td className={styles.orange} >
                    Requested
                    </td>} */}
                </tr>
            )
        }




const TableCustomII=(props)=>{

    return(
        <div>
                <table>
                    <thead className={styles.header} style={{border: "3px solid rgb(0, 0, 0)"}}>
                        <td className={styles.sptd}>
                            Vendor name
                        </td>
                        <td className={styles.sptd}>
                            Category
                        </td>
                        <td className={styles.sptd}>
                                Contact
                        </td >
                        <td className={styles.sptd}>
                            Pending Payment
                        </td>
                        <td className={styles.sptd}>
                            Total Amount
                        </td>
                        <td className={styles.sptd}>
                             Status
                        </td >
                        <hr/>
                    </thead>
                    {/* <hr className={styles.widehr}/> */}
                    <tbody >
                        
                    {venList}
                    </tbody>
                    
                </table>
        </div>
    )
};
export default TableCustomII;