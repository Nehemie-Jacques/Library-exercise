import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import utilisateurRoute from "./routes/utilisateur.route";
import livreRoute from "./routes/livres.route";
import empruntRoute from "./routes/emprunts.route";
import "./notification/reminder";

const port = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json());
app.use("/users", utilisateurRoute)
app.use("/books", livreRoute)
app.use("/loans", empruntRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});