function loadCurrentUser(data){
    return { type: "ADD_CURRENT_USER", payload: data }
  }

  function loadCurrentLocation(data){
    return { type: "ADD_CURRENT_LOCATION", payload: data }
  }


  function followFilter(data){
    return { type: "TOGGLE_FOLLOW_FILTER", payload: data }
  }

  function resetTraits(){
    return { type: "RESET_TRAITS" }
  }
  export { loadCurrentUser, loadCurrentLocation, followFilter, resetTraits}