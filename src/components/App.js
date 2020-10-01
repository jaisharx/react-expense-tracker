import React from 'react';

import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TranscationList from './TranscationList';
import AddTranscation from './AddTranscation';

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
