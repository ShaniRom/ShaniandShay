import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json());

mongoose.connect('mongodb+srv://Michael:<password>.14!@cluster0.ctwuo.mongodb.net/bymySelf?retryWrites=true&w=majority');














// const User = mongoose.model('usersDb', UserSchema)



app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
