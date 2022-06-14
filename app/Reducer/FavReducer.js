import calcGreenIndex from "../components/CalcGreenIndex";

const initState = { //when store is created - initial state is set up
    favourites : [], //list which stores the favourite companies
    sortValue : "Name_Asc" //tag which indicates the sorting of the favourites list
};

const favReducer = (state = initState, action) => { //defines actions which have writable access to store
    switch (action.type){
        case "ADD_FAV": //action which adds a favourite to the favourite-list
            return {
                ...state,
                favourites: state.favourites.concat(action.payload)
            }
        case "RMV_FAV": //action which removes a favourite from the favourite-list
            return {
                ...state,
                favourites: state.favourites.filter((company) => {
                    return company.id !== action.payload.id
                })
            }
        case "SORT_FAV_GREEN_ASC": //action which sorts the favourite-list, be aware to not mutate the original state directly
            return {
                ...state,
                favourites: state.favourites.slice().sort((fav1, fav2) => { //use slice to create copy
                    return calcGreenIndex(fav1).toPrecision(2).localeCompare(calcGreenIndex(fav2).toPrecision(2))
                }),
                sortValue: "Green_Asc"
            }
        case "SORT_FAV_GREEN_DESC": //action which sorts the favourite-list, be aware to not mutate the original state directly
            return {
                ...state,
                favourites: state.favourites.slice().sort((fav1, fav2) => { //use slice to create copy
                    return calcGreenIndex(fav2).toPrecision(2).localeCompare(calcGreenIndex(fav1).toPrecision(2))
                }),
                sortValue: "Green_Desc"
            }
        case "SORT_FAV_NAME_ASC": //action which sorts the favourite-list, be aware to not mutate the original state directly
            return {
                ...state,
                favourites: state.favourites.slice().sort((fav1, fav2) => { //use slice to create copy
                    return fav1.company_name.localeCompare(fav2.company_name)
                }),
                sortValue: "Name_Asc"
            }
        case "SORT_FAV_NAME_DESC": //action which sorts the favourite-list, be aware to not mutate the original state directly
            return {
                ...state,
                favourites: state.favourites.slice().sort((fav1, fav2) => { //use slice to create copy
                    return fav2.company_name.localeCompare(fav1.company_name)
                }),
                sortValue: "Name_Desc"
            }
        default:
            return state
    }
}

export default favReducer;