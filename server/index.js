const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const hotelRoutes = require("./routes/hotelRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const searchRouter = require("./routes/search");

// const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require("./routes/userRoutes");

const flightBooking = require("./routes/flightBooking");

const FlightRoute = require("./routes/flightRoutes");

dotenv.config();
 
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");  
});

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes); 
// app.use('/api/admin', adminRoutes);

app.use("/api/hotels", hotelRoutes);  
app.use("/api/bookings", bookingRoutes);  
app.use("/api/search", searchRouter); 
app.use("/api/flights", FlightRoute);
app.use('/api/flight/bookings', flightBooking);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
