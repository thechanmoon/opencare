function loadAllTraits(data){
    return { type: "ADD_ALL_TRAITS", payload: data }
  }

  function addOrDeleteTrait(data){
    return { type: "ADD_AND_DELETE_TRAIT", payload: data }
  }

  export { loadAllTraits, addOrDeleteTrait }
