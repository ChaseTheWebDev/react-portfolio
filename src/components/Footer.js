import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className='footer-content-container'>
                <h3><Link to='/'>ChaseTheWebDev</Link></h3>
                <div className='footer-address-container'>
                    <address>
                        <p>San Diego, California</p>
                    </address>
                    <address>
                        <p>Personal email available upon request</p>
                    </address>
                </div>
         
            </div>
        </footer>
    );
}
