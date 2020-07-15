function loadLat(data){
    return { type: "ADD_LAT", payload: data }
  }

  function loadLong(data){
    return { type: "ADD_LONG", payload: data }
  }
  export { loadLat, loadLong }