import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AdminPanel.css'

const AdminPanel = () => {
    return (
        <div className='container'>
            <Sidebar></Sidebar>
            <div className='others'>Other Page</div>
        </div>
    );
};

export default AdminPanel;