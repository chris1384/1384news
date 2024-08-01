function switchTheme(state, action){
    switch(action.type) {
        case "toggler":
            return !state
        default:
            return false;
    }
}