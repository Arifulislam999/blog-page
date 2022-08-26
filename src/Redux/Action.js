import { AUTHOR, VIEW } from "./ActionType";

export const View = () => {
    return {
        type: VIEW,
    };
};

export const Title = (author) => {
    return {
        type: AUTHOR,
        payload: author,
    };
};
