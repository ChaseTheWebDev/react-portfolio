import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className='footer-content-container'>
                <h3><Link to='/'>ChaseTheWebDev</Link></h3>
                <div className='footer-address-container'>
                    <address>
                        <p>1053 Fake St</p>
                        <p>San Diego, California</p>
                    </address>
                    <address>
                        <p><a href='mailto:chasethewebdev@gmail.com'>Chasethewebdev@gmail.com</a></p>
                        <p><a href='tel:6195550709'>(619) 555-0709</a></p>  
                    </address>
                </div>
         
            </div>
        </footer>
    );
}
