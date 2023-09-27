import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    console.log(`Connected to Database, ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error in Database ${error}`);
  }
};

export default connectDatabase;
