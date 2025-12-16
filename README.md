## Backend Design – Week 9

This backend is built using Node.js, Express.js, and MongoDB with Mongoose.

### Planned REST API Endpoints

1. GET /api/items  
   - Purpose: Retrieve all items from the database  
   - MongoDB Query: Item.find()

2. POST /api/items  
   - Purpose: Add a new item to the database  
   - MongoDB Query: new Item(data).save()

### Database
MongoDB is used as the database.  
Mongoose is used to define schemas and interact with MongoDB collections.
GitHub Repository:
https://github.com/Aarsh2103/week9-backend-mongodb
