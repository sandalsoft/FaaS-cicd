import * as R from "ramda";
import jetpack from "fs-jetpack";
import path from "path";
import { doStuff } from "./util";

// main module to import and run module code

export const main = async () => {
  try {
    const input = process.argv[2] || "eat a bag of dicks";
    const d = doStuff("cdh");
    console.log(`doStuff(): ${d}`);
  } catch (error) {
    console.log("[STR]error: ${error}");
    console.log("[OBJ]error: ${JSON.stringify(error)}");
  }
};

main();
