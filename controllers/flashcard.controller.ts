import camelcaseKeys from 'camelcase-keys';
import { Router, Request, Response } from 'express';
import { FlashCardLocalize } from '../models/flashcard-localize';
import { FlashCard } from '../models/flashcards';
import { Language } from '../models/languages';

const router: Router = Router();

const bulkCreateLocalizedCards = async (data: any) => {
    return await FlashCardLocalize.bulkCreate(data);
}

const getAllFlashcards = async () => {
    let flashcards: Array<any> = await FlashCard.findAll({
        raw: true,
    });
    for (let item of flashcards) {
        item.flashcardLocalize = await FlashCardLocalize.findAll({
            raw: true, where: { flashcard_id: item.flashcardId },
            include: [{
                model: Language,
                attributes: [['language_code', 'Code'], ['language_name', 'Name']],
            }]
        });
    }
    return flashcards;
    
}

router.get('/', async (req: Request, res: Response) => {
    res.send('api/flashcard get api');
});

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    
    res.send(`api/flashcard/${id} get api`);
});

router.post('/', async (req: Request, res: Response) => {
    const payload = req.body;
    // let response = (await FlashCard.create({
    //     flashcardTemplate: payload.flashcardTemplate,
    // })).get({ plain: true });
    // console.log(response);
    // let data: any = [];
    // payload.flashcards.forEach((item: any) => {
    //     data.push({ 'term': item.term, 'description': item.description, 'language_id': item.languageId, 'flashcard_id': response.flashcardId })
    // });
    // response = bulkCreateLocalizedCards(data);
    res.send(`api/flashcard post api`);
});

router.put('/:id', async (req: Request, res: Response) => {
    const payload = req.body;
    const { id } = req.params;
    res.send(`api/flashcard/${id} put api`);
});

router.delete('/:id', async (req: Request, res: Response) => {
    let { id } = req.params;
    res.send(`api/flashcard/${id} delete api`);
});

export const FlashcardController: Router = router;