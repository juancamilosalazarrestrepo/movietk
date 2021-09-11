import { Link } from "react-router-dom"
import styles from "./Nav.module.css"
import { Search } from "./Search"

export function Nav(){
return <div className={styles.navStyle}>
    
<div><Link to="/" >
    
    <h1 className={styles.title}>MovieTK</h1> 
    </Link>
    </div>

    <div className={styles.subMenu}>

      <Link className={styles.enlace} to="/" >
    
           <p className={styles.title}>Categorias</p>
      

      </Link>

      <Link  className={styles.enlace} to="/" >
    
           <p className={styles.title}>Series</p>
      

      </Link>

      <Link className={styles.enlace} to="/" >
    
           <p className={styles.title}>inicio</p>
      

      </Link>

      <Link className={styles.enlace} to="/" >
    
           <p className={styles.title}>inicio</p>
      

      </Link>
      </div>

      <div>

        <Search/>
    </div>


      

      
    
</div>



}