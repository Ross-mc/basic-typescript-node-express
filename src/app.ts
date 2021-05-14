import { json } from "body-parser";
import express from "express"
import todoRoutes from "./routes/todos"

const app = express();
app.use(json());
app.use(todoRoutes);


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err){
    res.status(500).json({message: err.message})
  }
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
});