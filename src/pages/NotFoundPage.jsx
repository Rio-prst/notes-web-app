import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <>
        <hr />
        <div className='not-found-page'>
            <h2>404</h2>
            <p>Halaman tidak ditemukan.</p>
            <Link to="/">Kembali ke Halaman Utama</Link>
        </div>
        </>
    );
}

export default NotFoundPage;