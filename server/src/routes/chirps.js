import { Router } from 'express';

let chirps = [
    {
        user: "chrundlethegreat",
        text: "Yes, my good man, I'll have the milk steak, boiled over hard, and your finest jelly beans...raw.",
    },
    {
        user: 'anustart12',
        text: ' Michael, you are quite the cupid. You can stick an arrow in my buttocks any time.',
    },
    {
        user: 'titussss',
        text: "Pinot Noir Caviar, Myanmar Mid-sized car You don't have to be popu-lar Find out who your true friends are",
    }
  ];

let router = Router();

router.get('/', (req, res) => {
    res.json(chirps);
});

export default router;