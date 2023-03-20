import { ADD_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../constants/constants";

export const setCharacterToFavourite = character => ({
    type: ADD_FAVOURITE,
    payload: character
})

export const removeCharacterFromFavourite = (personId) => ({
    type: REMOVE_FROM_FAVOURITE,
    payload: personId
})

