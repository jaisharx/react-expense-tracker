import React from 'react';

import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TranscationList from './TranscationList';
import AddTranscation from './AddTranscation';

import { GlobalProvider } from "../context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <Header />
            <main className="main">
                <div className="container-money">
                    <Balance />
                    <IncomeExpenses />
                    <TranscationList />
                </div>
                <AddTranscation />
            </main>
        </GlobalProvider>
    );
}

export default App;
