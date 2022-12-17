import {app} from "electron";
import {clean} from "./clean";
import {getAccessToken} from "./get-access-token";
import {getSessionToken} from "./get-session-token";


const routes = {
    'CLEAN': clean,
    'GET_ACCESS_TOKEN': getAccessToken,
    'GET_SESSION_TOKEN': getSessionToken
};


app.on('ready', routes[process.env.route]);

app.on('window-all-closed', () => {
    app.quit()
})
