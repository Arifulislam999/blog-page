import initialState from "../Components/initialState";
import { AUTHOR, VIEW } from "./ActionType";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW:
            return {
                ...state,
            };
        case AUTHOR:
            // return state.map((data) => {
            //     if (data.title === action.payload) {
            //         console.log(data.title);
            //         return {
            //             ...data,
            //         };
            //     }
            // });
            return state.filter((data) => data.author === action.payload);
        default:
            return state;
    }
};
export default reducer;
