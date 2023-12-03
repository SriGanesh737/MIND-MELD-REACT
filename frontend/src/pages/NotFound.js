import styles from './notfound.module.css'
import { Link } from 'react-router-dom'
function NotFound()
{
  return (<div class={styles.image}>
  <Link href="/home"> <button class={styles.home}>Go to Home</button>  </Link>
<img src={require("../assets/images/errorphoto.jpg")} alt=""/></div>)
}
export default NotFound