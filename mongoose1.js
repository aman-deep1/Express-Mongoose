//const { strictEqual } = require('assert');
const m=require('mongoose');

meowmeow().catch((err) => console.log(err));

async function meowmeow(){
    await m.connect('mongodb+srv://admin:password@cluster0.n74sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    const meowS =m.Schema({
        _id:Number,
        name:String,
        breed:String,
        star:Number
    });

    const meowModel=m.model('meow',meowS);

    const doc=new meowModel();

    doc._id =1;
    doc.name ="Cat";
    doc.breed="Cat1";
    doc.star=5;

    await doc.save();
}

