import styles from './TableCustom.module.css';
import React from 'react';
const TableCustom=()=>{
    // if(props.no==7)
    //     tr_s={"Invoice no","Customer name",}

    const billDetails=[]
    for(let i=0;i<2;i++)
        {
            billDetails.push(
                <div key={i} className={styles.content} >
                    <div className={styles.elec}>
                        2018/INV/0001
                    </div>
                    <div className={styles.elec} >
                        Guruprasad
                    </div>
                    <div className={styles.elec} >
                        Electronics
                    </div>
                    <div className={styles.elec} >
                        Laptop
                    </div>
                    <div className={styles.elec} >
                        14/02/2020  15:00hrs
                    </div>
                    <div className={styles.elec} >
                        800
                    </div>
                    <div className={styles.blue} >
                        Refunded
                    </div>
                    {/* if(props.status=="Refunded")
                    {<div className={styles.blue} >
                        Refunded
                    </div>}
                    else if(props.status=="Paid")
                    {<div className={styles.green} >
                        Paid
                    </div>}
                    else if(props.status=="Cancelled")
                    {<div className={styles.red} >
                    Cancelled
                    </div>}
                    else if(props.status=="Unpaid")
                    {<div className={styles.orange} >
                    Unpaid
                    </div>} */}
                </div>
            )
        }

    return(
            

            <div>
                <div className={styles.header} >

                <div className={styles.eleh1} >Invoice no.</div>
                        <div className={styles.eleh2} >Customer name</div>
                        <div className={styles.eleh3} >Category</div>
                        <div className={styles.eleh4} >Product</div>
                        <div className={styles.eleh5} >Time & Date</div>
                        <div className={styles.eleh6} >Amount</div>
                        <div className={styles.eleh7} >Status</div>

                </div>
                <hr className={styles.widehr} />
                {billDetails}
                
            
        </div>
    );

};

export default TableCustom;