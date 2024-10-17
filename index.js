import { connect } from "mongoose"
import app from "./app.js"
import { PORT } from "./src/config/config.js"
import { connectDB } from "./src/config/mongodb.js";



app.listen(PORT,async () => {
    await connectDB("mongodb://localhost:27017");
    console.log(`server run successfully at http://localhost:${PORT}/api`)
})
