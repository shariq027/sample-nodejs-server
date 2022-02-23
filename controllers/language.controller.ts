import { Router, Request, Response } from 'express';
import { Language } from '../models/languages';
import camelcaseKeys from 'camelcase-keys';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.send('api/languages get api');
});

router.get('/active', async (req: Request, res: Response) => {
    res.send('api/languages/active get api');
});

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    res.send(`api/languages/${id} get api`);
});

router.post('/', async (req: Request, res: Response) => {
    const { languageName, active, languageCode } = req.body;
    let response = await Language.create({
        LanguageName: languageName,
        LanguageCode: languageCode,
        Active: active
    });
    res.send(camelcaseKeys(response, { deep: true }));
});

router.put('/', async (req: Request, res: Response) => {
    const { languageName, active, languageCode, languageId } = req.body;
    let response = await Language.update({
        LanguageName: languageName,
        LanguageCode: languageCode,
        Active: active
    }, {
        where: {
            LanguageId: languageId
        }
    });

    res.send(camelcaseKeys(response, { deep: true }));
});

export const LanguageController: Router = router;