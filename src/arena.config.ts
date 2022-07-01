import Arena from "@colyseus/arena";
import { monitor } from "@colyseus/monitor";

export default Arena({
    getId: () => "Your Colyseus App",

    initializeGameServer: (gameServer) => {
        gameServer.onShutdown(function(){
            console.log(`game server is going down.`);
          });
    },

    initializeExpress: (app) => {
        app.use('/colyseus', monitor());
    },


    beforeListen: () => {
    }
});
