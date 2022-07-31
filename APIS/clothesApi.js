//create router to handle user api reqs
const exp = require("express");
const coursesApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

//to extract body of request object
coursesApp.use(exp.json());

//USER API Routes

//create route to handle '/courses' path
coursesApp.get(
  "/cloth/:type",
  expressAsyncHandler(async (request, response) => {
    let dbObj = request.app.get("dbObj");
    let type = request.params.type
    let clothesCollection=dbObj.collection(type);
    let courses = await clothesCollection.find().toArray();
    response.send({ message: "courses list", payload: courses });
  })
);

coursesApp.get(
  "/clothes",
  expressAsyncHandler(async (request, response) => {
    let dbObj = request.app.get("dbObj");
    let collection = await dbObj.listCollections().toArray();
    response.send({ message: "collection list", payload: collection });
  })
);

//export coursesApp
module.exports = coursesApp;