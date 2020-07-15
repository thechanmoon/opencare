const defaultState = {
    allBusinesses: [],
    currentRenderedBusinesses: [],
    currentBusiness: null,
    currentUser: null,
    currentBusinessSearch: "",
    currentLocationSearch: "",
    allTraits: [],
    checkedTraits: [],
    createOreEditsBiz: 'nil',
    lat: 32.792610,
    long: -79.93,
    toggleFilter: false


  }

  export const reducer = (state = defaultState, action) => {

    console.log(action)
    
    switch(action.type){
      case "Load_Businesses": {
        return { ...state, allBusinesses: action.payload }
      }
      case "ADD_CURRENT_BUSINESS": {
        return {...state, currentBusiness: action.payload}
      }
      case "ADD_CURRENT_USER": {
        return {...state, currentUser: action.payload}
      }
      case "ADD_BUSINESS_NAME_SEARCH": {
        return {...state, currentBusinessSearch: action.payload}
      }
      case "ADD_LOCATION_SEARCH": {
        return {...state, currentLocationSearch: action.payload}
      }
      case "RENDER_BUSINESSES": {
        return {...state, currentRenderedBusinesses: action.payload}
      } 
      case "ADD_ALL_TRAITS": {
        return {...state, allTraits: action.payload}
      } 
      case "ADD_AND_DELETE_TRAIT": {
        console.log(action.payload)
        return {...state, checkedTraits: action.payload}
      } 
      case "ADD_LAT": {
        console.log(action.payload)
        return {...state, lat: action.payload}
      }
      case "ADD_LONG": {
        console.log(action.payload)
        return {...state, long: action.payload}
      }
      case "TOGGLE_FOLLOW_FILTER": {
        // console.log(action.payload)
        return {...state, toggleFilter: !state.toggleFilter}
      }
      case "RESET_TRAITS": {
        // console.log(action.payload)
        return {...state, checkedTraits: []}
      }
 
      default:
        return state
    }
  }

