import * as React from "react";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./sidebarStockInd.module.css";
import { indRoutes } from "./types";

const SidebarStockInds: FC = () => {
   const [activeTab,setactiveTab]=useState("advantage")
  return (
    <div className={styles.sdb_inds_con}>
       {Object.keys(indRoutes).map((el:string)=>{
         //@ts-ignore
         return <Link to={`indicators/${indRoutes[el]}`} 
         //@ts-ignore
         style={activeTab===indRoutes[el]?{fontWeight:'700'}:{fontWeight:'300'}}
          //@ts-ignore
         onClick={()=>setactiveTab(indRoutes[el])}
         className={styles.sdb_inds_link}
         >{el}
         </Link>
        
       })}
    </div>
  );
};

export default SidebarStockInds;
