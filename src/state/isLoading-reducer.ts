import {AppRootStateType} from './store';
import {TodolistType} from '../AppWithRedux';


export const IsLoadingReducer = (state: TodolistType[], action: Action): TodolistType[] => {
    switch (action.type) {
        case 'TOGGLE-LOAD':
            return state.map(v => v.id === action.todoId ? {...v, isLoading: action.value} : v)
        default:
            return state
    }
}

type Action = LoadingType

export type LoadingType = ReturnType<typeof loadingAC>

export const loadingAC = (todoId: string, value: boolean) =>  {
    return {type: 'TOGGLE-LOAD', value, todoId} as const
}