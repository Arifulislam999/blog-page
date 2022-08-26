import initialState from "../Components/initialState";
import { VIEW } from "./ActionType";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW:
            return {
                ...state,
            };

        default:
            return state;
    }
};
export default reducer;
