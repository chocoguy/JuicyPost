const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const busboy = require('busboy')

const pets = require('./models/pets');
const anime = require('./models/anime');
const gaming = require('./models/gaming');
const random = require('./models/random');
const gardening = require('./models/gardening');
const programing = require('./models/programing');
const current = require('./models/current');

const app = express();
require('dotenv').config()
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))
app.use(bodyParser.json());
app.use(cors());

//Connect to DB
const mongoURI = process.env.DB_URI

const conn = mongoose.createConnection(mongoURI);

const connectDB = async () => {
    try{
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Databse connected');
    }catch(err){
        console.error(err.message);
    }
}






//---------------------------------------------------------------------------
// START IMAGES
//---------------------------------------------------------------------------



app.post('/api/img', (req,res) => {
    if(req.files === null){
        return res.status(400).json({ msg: 'No file was uploaded' })
    }
    const file = req.files.file;

    file.mv(`${__dirname}/img/${file.name}`, err => {
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({ filename: file.name, filePath: `/api/get/img/${file.name}` });
    });
})

app.use('/api/get/img', express.static('img'))



//---------------------------------------------------------------------------
// END IMAGES
//---------------------------------------------------------------------------








//---------------------------------------------------------------------------
// START BOARDS
//---------------------------------------------------------------------------



//   /pets board
app.post('/api/pets', async (req, res) => {
    try{
        const newPetsPost = new pets({
            name: req.body.name,
            message: req.body.message,
            image: req.body.image
        });

        const Pets = await newPetsPost.save();

        res.json(Pets)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /pets')
    }
})

app.get('/api/pets/posts', async (req,res) => {
    try{
        const petss = await pets.find().sort({  date: -1 });
        res.json(petss)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /pets')
    }
})

app.post('/api/pets/comment/:id', async (req, res) => {
    try{
    const pet = await pets.findById(req.params.id);

    const newComment = {
        name: req.body.name,
        message: req.body.message,
        image: req.body.image
    };

    pet.comments.unshift(newComment);

    await pet.save()
    res.json(pet.comments)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at POST /pets')
    }
})












//   /anime board
app.post('/api/anime', async (req, res) => {
    try{
        const newAnimePost = new anime({
            name: req.body.name,
            message: req.body.message,
            image: req.body.image
        });

        const Animes = await newAnimePost.save();

        res.json(Animes)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /anime')
    }
})

app.get('/api/anime/posts', async (req,res) => {
    try{
        const animess = await anime.find().sort({  date: -1 });
        res.json(animess)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /animes')
    }
})

app.post('/api/anime/comment/:id', async (req, res) => {
    try{
    const anim = await anime.findById(req.params.id);

    const newComment = {
        name: req.body.name,
        message: req.body.message,
        image: req.body.image

    };

    anim.comments.unshift(newComment);

    await anim.save()
    res.json(anim.comments)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at POST /pets')
    }
})











//   /gaming board
app.post('/api/gaming', async (req, res) => {
    try{
        const newGamingPost = new gaming({
            name: req.body.name,
            message: req.body.message,
            image: req.body.image
        });

        const Gaming = await newGamingPost.save();

        res.json(Gaming)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /gaming')
    }
})

app.get('/api/gaming/posts', async (req,res) => {
    try{
        const gamings = await gaming.find().sort({  date: -1 });
        res.json(gamings)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /gaming')
    }
})

app.post('/api/gaming/comment/:id', async (req, res) => {
    try{
    const gamin = await gaming.findById(req.params.id);

    const newComment = {
        name: req.body.name,
        message: req.body.message,
        image: req.body.image
    };

    gamin.comments.unshift(newComment);

    await gamin.save()
    res.json(gamin.comments)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at POST /pets')
    }
})










//   /random board
app.post('/api/random', async (req, res) => {
    try{
        const newRandomPost = new random({
            name: req.body.name,
            message: req.body.message,
            image: req.body.image
        });

        const Random = await newRandomPost.save();

        res.json(Random)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /random')
    }
})

app.get('/api/random/posts', async (req,res) => {
    try{
        const randoms = await random.find().sort({  date: -1 });
        res.json(randoms)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /random')
    }
})

app.post('/api/random/comment/:id', async (req, res) => {
    try{
    const rando = await random.findById(req.params.id);

    const newComment = {
        name: req.body.name,
        message: req.body.message,
        image: req.body.image
    };

    rando.comments.unshift(newComment);

    await rando.save()
    res.json(rando.comments)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at POST /random')
    }
})









//   /gardening board
app.post('/api/gardening', async (req, res) => {
    try{
        const newGardeningPost = new gardening({
            name: req.body.name,
            message: req.body.message,
            image: req.body.image
        });

        const Gardening = await newGardeningPost.save();

        res.json(Gardening)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /gardening')
    }
})

app.get('/api/gardening/posts', async (req,res) => {
    try{
        const gardenings = await gardening.find().sort({  date: -1 });
        res.json(gardenings)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /gardening')
    }
})

app.post('/api/gardening/comment/:id', async (req, res) => {
    try{
    const gardenin = await gardening.findById(req.params.id);

    const newComment = {
        name: req.body.name,
        message: req.body.message,
        image: req.body.image
    };

    gardenin.comments.unshift(newComment);

    await gardenin.save()
    res.json(gardenin.comments)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at POST /gardening')
    }
})







//   /programing board   
app.post('/api/programing', async (req, res) => {
    try{
        const newProgramingPost = new programing({
            name: req.body.name,
            message: req.body.message,
            image: req.body.image
        });

        const Programing = await newProgramingPost.save();

        res.json(Programing)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /programing')
    }
})

app.get('/api/programing/posts', async (req,res) => {
    try{
        const programings = await programing.find().sort({  date: -1 });
        res.json(programings)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /programing')
    }
})

app.post('/api/programing/comment/:id', async (req, res) => {
    try{
    const programin = await programing.findById(req.params.id);

    const newComment = {
        name: req.body.name,
        message: req.body.message,
        image: req.body.image
    };

    programin.comments.unshift(newComment);

    await programin.save()
    res.json(programin.comments)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at POST /programing')
    }
})









//   //current board
app.post('/api/current', async (req, res) => {
    try{
        const newCurrentPost = new current({
            name: req.body.name,
            message: req.body.message,
            image: req.body.image
        });

        const Current = await newCurrentPost.save();

        res.json(Current)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /current')
    }
})

app.get('/api/current/posts', async (req,res) => {
    try{
        const currents = await current.find().sort({  date: -1 });
        res.json(currents)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at /current')
    }
})

app.post('/api/current/comment/:id', async (req, res) => {
    try{
    const curren = await current.findById(req.params.id);

    const newComment = {
        name: req.body.name,
        message: req.body.message,
        image: req.body.image
    };

    curren.comments.unshift(newComment);

    await curren.save()
    res.json(curren.comments)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error at POST /current')
    }
})


//---------------------------------------------------------------------------
// END BOARDS
//---------------------------------------------------------------------------






//Code below used for deployment


app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

//End delpoyment code



const port = 5000;
connectDB()
app.listen(port, () => console.log(`Server started on port ${port}`));


