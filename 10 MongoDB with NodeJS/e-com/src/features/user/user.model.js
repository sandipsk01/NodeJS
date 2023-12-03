import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

export default class UserModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this._id = id;
  }

  static async signUp(name, email, password, type) {
    try{
    // 1. Get the db
    const db = getDB();

    // 2. Get the userCollection
    const collection = db.collection("users");

    const newUser = new UserModel(
      name,
      email,
      password,
      type
    );
    
    // 3.Insert Document
     await collection.insertOne(newUser);

     return newUser;
    }
    catch(err){
      throw new ApplicationError("Something went wrong", 500);
    }
    
  }

  static signIn(email, password) {
    const user = users.find(
      (u) =>
        u.email == email && u.password == password
    );
    return user;
  }

  static getAll() {
    return users;
  }
}

var users = [
  {
    id: 1,
    name: 'Seller User',
    email: 'seller@ecom.com',
    password: 'Password1',
    type: 'seller',
  },
  {
    id: 2,
    name: 'Customer User',
    email: 'customer@ecom.com',
    password: 'Password1',
    type: 'customer',
  },
];
