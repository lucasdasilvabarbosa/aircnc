import React, { useEffect } from 'react';
import api from '../../services/api';

export default function Dashboard() {
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/spots', {
                headers: { user_id }
            });

            console.log(response);
        }

        loadSpots();
    }, []);


    return <div>Dashboard</div>
}