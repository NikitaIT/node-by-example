import esMain from "es-main";
import { app } from "./app.js";

if (esMain(import.meta)) {
  // Module run directly.
  app();
}
