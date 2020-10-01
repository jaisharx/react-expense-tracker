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
            <main className="main">
                <div className="container-money">
                    <Balance />
                    <IncomeExpenses />
                    <TranscationList />
                </div>
                <AddTranscation />
            </main>
        </div>
    );
}

export default App;
