function businessNameSearch(data){
    return { type: "ADD_BUSINESS_NAME_SEARCH", payload: data }
  }

  function locationSearch(data){
    return { type: "ADD_LOCATION_SEARCH", payload: data }
  }

  function renderBusinessCards(data){
    return { type: "RENDER_BUSINESSES", payload: data }
  }

  export {locationSearch, businessNameSearch, renderBusinessCards }