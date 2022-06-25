import Express from "express";

import homeRouter from "./routes/home";

export class App {
    private app;
    private port;

    constructor(port = 3003) {
        this.app = Express();
        this.port = port;
        this.middlewares();
        this.routes()
        this.app.listen(this.port, () => console.log("port", this.port));
    }

    middlewares() {
        this.app.use(Express.urlencoded({ extended: true }));
        this.app.use(Express.json());
    }

    routes() {
        this.app.use("/", homeRouter);
    }
}
