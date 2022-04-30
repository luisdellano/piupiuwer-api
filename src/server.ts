import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";
const app = express();
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./config/swagger";

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

// app.get("/", (req, res) => {
//     return res.json({
//         message: "Hello World",
//     });
// });

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof Error) {
            return response.status(400).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
);

app.listen(3333, console.log("🚀 Server started on port 3333."));
