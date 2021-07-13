import GamesController from "./Controllers/GamesController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();

  gamesController = new GamesController();
}

window["app"] = new App();
