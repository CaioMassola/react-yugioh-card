import cardBack from '@/assets/card.svg';
import slifer from '@/assets/slifer.svg';
import obelisk from '@/assets/obelisk.svg';
import ra from '@/assets/ra.svg';

export interface ICards {
    id: number;
    name: string;
    image: string;
    music: string;
};

export const cards: ICards[] = [
    {
        id: 1,
        name: 'Slifer The Sky Dragon',
        image: `url(${slifer.src})`,
        music: '/yugioh.mp3',
    },
    {
        id: 2,
        name: 'Obelisk The Tormentor',
        image: `url(${obelisk.src})`,
        music: '/yugioh.mp3',
    },
    {
        id: 3,
        name: 'The Winged Dragon of Ra',
        image: `url(${ra.src})`,
        music: '/yugioh.mp3',
    }
];

export const defaultCard = `url(${cardBack.src})`;

export const shuffleCards = (array: ICards[]) => {
    const cards = [...array];

    for (let currentIndex = cards.length - 1; currentIndex > 0; currentIndex--) {
        const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }

    return cards;
};