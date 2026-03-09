    const initialState={
        list:[]
    }

    export const todoReducer=(state=initialState, action)=>{
        switch (action.type) {
            case "ADD_TODO":
                return {list : [...state.list, action.payload]}
            case "DELETE_TODO":
                state.list.splice(action.payload,1)
                return {list : [...state.list]}
            case "UPDATE_TODO":
                const {ind,newData}=action.payload;
                state.list[ind]=newData;
                return {list : [...state.list]}
            default:
                return state;
        }
    }