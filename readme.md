# Travel Adviser with Mern Stack MERN (MongoDB, Express, React, Node.js)
### Travel Adviser with MERN Stack is a web application that helps users plan their travel itinerary by providing recommendations for destinations and activities based on their preferences. The application is built using the MERN (MongoDB, Express, React, Node.js) stack and utilizes the Google Maps API and Cloudinary for image management. Users can sign up, log in, and save their favorite destinations and activities.
## Project Setup

### Installation

1. Clone the repository

```bash
git clone https://github.com/iamClutchX/travel.git
cd travel
```


# Install dependencies for client side
```bash 
cd client 
&&
npm install
```

# Install dependencies for server side
```bash 
cd server 
&&
npm install
```

### Environment Variables
# Create a .env file in the client directory and add the following variables:

```bash
REACT_APP_CLOUDINARY_NAME=<your_cloudinary_name>
REACT_APP_CLOUDINARY_API_KEY=<your_cloudinary_api_key>
REACT_APP_CLOUDINARY_UPLOAD_PRESET=<your_cloudinary_upload_preset>
```

# Create a .env file in the server directory and add the following variables:

```bash
MONGODB_URI=<your_mongodb_uri>
PORT=<your_port>
SECRET_KEY=<your_secret_key>
CLOUDINARY_NAME=<your_cloudinary_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>

```

### Run the Application
# Run the client & server with concurrently

# For client side
```bash
npm start
```

# For server side
```bash 
nodemon index.js
or node index.js
```
