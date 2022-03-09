import React from 'react';

import io from 'socket.io-client';
import Sign from './pages/Sign';
import Sign1 from './pages/Sign1';

function App() {
    const connectSocket = () => {
        const socket = io('http://localhost:1337');
    };

    return (
        <div>
            <Sign />
        </div>
    );
}

export default App;
