var express = require("express")
var app = express()
var cors= require("cors")
let projectCollection;

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends: false}));
app.use(cors())

//mongoDb connection...
const MongoClient = require('mongodb').MongoClient;

//add database connections...
const uri = 'mongodb+srv://mahi:9989@cluster0.3w0bxzj.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

// insert project...​

const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}

// get project...​

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

const createCollection = (collectionName) => {
  client.connect((err,db) => {
      projectCollection = client.db().collection(collectionName);
      if(!err) {
          console.log('MongoDB Connected')
      }
      else {
          console.log("DB Error: ", err);
          process.exit(1);
      }
  })
}

const cardList = [
    {
        title: "DANE",
        image: "images/dane.jpg",
        link: "About DANE",
        desciption: "Demo desciption about DANE "
    },
    {
        title: "GREAT DANE",
        image: "images/GREAT DANE.jpg",
        link: "About GREAT DANE",
        desciption: "Description about GREAT DANE"
    }
]

app.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

//post api...
app.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
})

var port = process.env.port || 3000;

app.listen(port,()=>{

 console.log("App listening to: http://localhost:"+port)
 createCollection("PETS")
})