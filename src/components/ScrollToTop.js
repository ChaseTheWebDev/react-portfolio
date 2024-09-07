// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        console.log('Route changed, scrolling to top...');
        window.scrollTo(0, 0);
    }, [location]);

    return null;
}

export default ScrollToTop;
