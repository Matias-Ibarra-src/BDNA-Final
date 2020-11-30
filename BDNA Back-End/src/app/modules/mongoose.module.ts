import mongoose,{ConnectionOptions} from "mongoose";

function connect(): Promise<typeof mongoose>{
    const mongoUri: string = 'mongodb+srv://matias:Zkas19981998@bdna.sk3uq.mongodb.net/'
    const databasename: String = 'BDNA'
    const options: ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology :true,
        useCreateIndex: true,
        useFindAndModify: false
    }

    return mongoose.connect(mongoUri+databasename, options);
}

export default {connect};