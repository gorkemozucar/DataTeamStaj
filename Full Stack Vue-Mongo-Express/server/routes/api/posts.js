const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get
router.get('./api/posts', async (req,res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});
//add

//delete

async function loadPostsCollection () {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://gorkemozucar:serkangorkem1998@expressvuemongo.vnvut.mongodb.net/ExpressVueMongo?retryWrites=true&w=majority',{
        useNewUrlParser : true
    });
    return client.db('ExpressVueMongo').collection('posts');
}

module.exports = router ;