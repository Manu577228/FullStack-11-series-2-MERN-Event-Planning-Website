import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.URI, { dbName: "EVENT_PLANNING_DATABASE" })
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log("Error Connecting to DataBase", err);
    });
};
