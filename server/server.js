import config from "../config/config"
import app from "./express";

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('The Server has started on port %s.', config.port)
})