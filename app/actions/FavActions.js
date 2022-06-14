export const addFav = (favourite) => {
    return (dispatch) => {
        dispatch({
            payload: favourite,
            type: "ADD_FAV"
        })
    }
}

export const rmvFav = (favourite) => {
    return (dispatch) => {
        dispatch({
            payload: favourite,
            type: "RMV_FAV"
        })
    }
}

export const sortFavGreenAsc = () => {
    return (dispatch) => {
        dispatch({
            type: "SORT_FAV_GREEN_ASC"
        })
    }
}

export const sortFavGreenDesc = () => {
    return (dispatch) => {
        dispatch({
            type: "SORT_FAV_GREEN_DESC"
        })
    }
}

export const sortFavNameAsc = () => {
    return (dispatch) => {
        dispatch({
            type: "SORT_FAV_NAME_ASC"
        })
    }
}

export const sortFavNameDesc = () => {
    return (dispatch) => {
        dispatch({
            type: "SORT_FAV_NAME_DESC"
        })
    }
}