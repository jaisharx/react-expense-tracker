import React from 'react';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TranscationList from './components/TranscationList';
import AddTranscation from './components/AddTranscation';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TranscationList />
                <AddTranscation />
            </div>
        </div>
    );
}

export default App;
