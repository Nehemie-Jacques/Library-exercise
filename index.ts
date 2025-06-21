import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
// import utilisateurRoute from "./routes/utilisateur.route";
// import livreRoute from "./routes/livre.route";
// import empruntRoute from "./routes/emprunt.route";
// import notificationRoute from "./routes/notification.route";

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
// app.use("/user", utilisateurRoute)
// app.use("/book", livreRoute)
// app.use("/loan", empruntRoute)
// app.use("/notification", notificationRoute)

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
});