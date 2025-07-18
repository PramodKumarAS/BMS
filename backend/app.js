const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const path = require("path")

dotenv.config()

const userRouter = require("./routes/userRoute")
const movieRouter = require("./routes/movieRoute")
const theatreRouter = require("./routes/theatreRoutes")
const showsRouter = require("./routes/showRoutes")
const bookingRouter = require("./routes/bookingRoute")

app.use(express.json())
app.use(cors())

// ✅ Serve static files from frontend/dist
app.use(express.static(path.join(__dirname, "frontend/dist")))

// ✅ Registering API routes
app.use("/api/user", userRouter)
app.use("/api/movies", movieRouter)
app.use("/api/theatres", theatreRouter)
app.use("/api/shows", showsRouter)
app.use("/api/bookings", bookingRouter)

// ✅ Handle SPA client-side routing fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
})

const { connectDB } = require("./config/db")
connectDB()

app.listen(process.env.PORT, () => {
    console.log("Backend application has started!")
})
