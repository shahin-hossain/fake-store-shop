import React from 'react';
import './Manubar.css'
const Manubar = (props) => {
    const { count } = props;
    return (
        <>
            <div className='container'>
                <div className='grid row'>
                    <div className='col-2'>
                        <h1>sh<span className='logo'>O</span>p</h1>
                    </div>
                    <div className='manu-container col-10 d-flex align-items-center justify-content-end'>
                        <li className='items me-3 p-2'>Home</li>
                        <li className='items me-3 p-2'>Contact</li>
                        <li className='items me-3 p-2'>Cart <sup>{count}</sup></li>
                        <li className='items me-3 p-2'>Login</li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Manubar;