import { Actions } from './Actions';

export default (state, action) => {
    switch (action.type) {
        case Actions.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transcation) => transcation.id !== action.payload
                ),
            };

        case Actions.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            };

        default:
            return state;
    }
};
