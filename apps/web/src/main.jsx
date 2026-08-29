import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import BrandLoader from '@/components/BrandLoader';
import '@/index.css';

function Root() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => setLoading(false), 1700);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <>
            <BrandLoader visible={loading} />
            {!loading && <App />}
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<Root />
);
