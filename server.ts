import cors from 'cors';
import express from 'express';

import { FlashcardController, LanguageController } from './controllers';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;
app.use(express.json()) 
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

//console.log(pool);
app.use('/api/flashcards', FlashcardController);
app.use('/api/languages', LanguageController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});


// FlashCard.findAll().then(res=>{
//     console.log(res);
// })
