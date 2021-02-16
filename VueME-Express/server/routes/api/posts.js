const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get
router.get('/', async (req,res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});
//add
router.post('/', async (req,res) => {

    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

//delete

router.delete('/:id', async (req,res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

//update
router.put('/:id', async (req,res) =>{
    
        const posts = await loadPostsCollection();
        await posts.updateOne(
            {_id: new mongodb.ObjectID(req.params.id)},
            { $set: { text: req.body.text } },
            { upsert: true });
            
        res.status(200).send();    
});
    

async function loadPostsCollection () {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://gorkemozucar:gorkem1998@vueme.vnvut.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser : true ,
        useUnifiedTopology: true
    });
    return client.db('VueME-Express').collection('posts');
}

module.exports = router ;