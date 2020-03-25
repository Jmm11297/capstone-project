import * as state from "./store";
import {StateSubject} from "./StateSubject"
import {StateObserver} from "./StateObserver"

const appState = new StateSubject(state.Home);
const pages = [];
pages.push(new StateObserver(appState, state.Add));
pages.push(new StateObserver(appState, state.Contact));
pages.push(new StateObserver(appState, state.Map));
pages.push(new StateObserver(appState, state.Home));

appState.setState(state.Home); 
