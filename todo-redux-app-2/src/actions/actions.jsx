export const addTodo=(data)=>{
    return{
        type: "ADD_TODO",
        payload:data,
    }
}

export const deleteTodo=(ind)=>{
    return{
        type:"DELETE_TODO",
        payload:ind,
    }
}

export const UpdateTodo=(ind, newData)=>{
    return{
        type:"UPDATE_TODO",
        payload:{ind,newData},
    }
}