import '../styles/Button.css';
import { Link } from 'react-router-dom';

export default function Button({ children, variant = 'light', backgroundImage, ...rest }) {
    const buttonClass = variant === 'dark' ? 'button-dark' : 'button';
    const imageClass = backgroundImage ? 'has-background-image' : '';

    return (
        <Link to ='/contact'>
            <button className={`${buttonClass} ${imageClass}`} style={{ backgroundImage: `url(${backgroundImage})` }} aria-label='Contact Us' {...rest}>
                {children}
            </button>
        </Link>
    );
}
