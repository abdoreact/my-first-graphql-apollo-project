const express=require("express")
const {graphqlHTTP}=require("express-graphql")
const schema=require("./schema/schema.js")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors())
const {uri} = require("./config.json")
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("success"))
.catch(err => console.log(err))
app.use("/graphql", graphqlHTTP({
    schema
}))
app.listen(4000, () => {
    console.log("Listening...")
})