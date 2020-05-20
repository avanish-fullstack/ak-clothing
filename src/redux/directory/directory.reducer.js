import sections from "../../data/data";

const INITIAL_STATE = sections;

const directoryReducer = (state = INITIAL_STATE, action) => {
    console.log("directory reducer");
    switch (action.type) {
        default:
            return state;
    }
};

export { directoryReducer };
