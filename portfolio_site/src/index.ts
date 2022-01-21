import dotenv from "dotenv";
import exphbs from "express-handlebars";
import express, {
  Application,
  json,
  Request,
  Response,
  urlencoded
} from "express";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.engine('hbs', exphbs({defaultLayout: 'main'}) as any);
app.set("view engine", "hbs");

app.get("/", (req: Request, res: Response) => {
  return res.render("home", {
    contohText: "Lorem Ipsum mas bro",
    title: "Express Typescript"
  });
});

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});