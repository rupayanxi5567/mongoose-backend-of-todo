import mongoose from "mongoose";

const user_schema = new mongoose.Schema(
    {
        name: 'John Doe',
        dob: new Date('1990-05-15'),
        phone: '123-456-7890',
        address: '123 Main St, Cityville, USA',
      },
      {
        name: 'Jane Smith',
        dob: new Date('1985-09-22'),
        phone: '987-654-3210',
        address: '456 Oak Ave, Townsville, USA',
      },
      {
        name: 'Bob Johnson',
        dob: new Date('1995-02-10'),
        phone: '555-123-4567',
        address: '789 Elm Blvd, Villagetown, USA',
      },{timestamp: true}
)
export const User = mongoose.model("User", user_schema )