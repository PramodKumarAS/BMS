const express = require("express")
const app = express()
const dotenv = require("dotenv")
var cors = require('cors')
dotenv.config()
const userRouter = require("./routes/userRoute")
const movieRouter = require("./routes/movieRoute")
const theatreRouter = require("./routes/theatreRoutes")
const showsRouter = require("./routes/showRoutes")
const bookingRouter = require("./routes/bookingRoute")
const path = require("path");


// Homeworks
// Implement the Delete modal for both movies and Theatres
// While populating owners on theatres, we only want to get the name field, not others

// Add in middleware to handle request body as JSON
app.use(express.json())
// // Serve static files from frontend/dist
// app.use(express.static(path.join(__dirname, "frontend/dist")));
app.use(cors())

// // Handle all other routes to serve index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
// });

// Registering my root level routes
app.use("/api/user", userRouter)
app.use("/api/movies", movieRouter)
app.use("/api/theatres", theatreRouter)
app.use("/api/shows", showsRouter)
app.use("/api/bookings", bookingRouter)


const {connectDB } = require("./config/db")
connectDB()

app.listen(process.env.PORT, () => {
    console.log("Backend application has started!")
})