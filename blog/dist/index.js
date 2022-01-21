"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT;
app.engine('hbs', (0, express_handlebars_1.default)({ defaultLayout: 'main' }));
app.set("view engine", "hbs");
app.get("/", (req, res) => {
    return res.render("home", {
        contohText: "Lorem Ipsum mas bro",
        title: "Express Typescript"
    });
});
app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});
//# sourceMappingURL=index.js.map