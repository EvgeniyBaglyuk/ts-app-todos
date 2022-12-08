import {useSelector as _useSelector, TypedUseSelectorHook, useDispatch as _useDispatch,} from "react-redux";
import {RootState} from "../store";
import {Action} from "../actions";
import {ThunkDispatch} from "redux-thunk";

export type TypedDispatch = ThunkDispatch<RootState, unknown, Action>;
export interface TypedUseDispatchHook<TState> {
    (): TState;
}

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector
export const useDispatch: TypedUseDispatchHook<TypedDispatch> = _useDispatch;