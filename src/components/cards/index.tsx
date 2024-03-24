import styles from '@/components/cards/style.module.scss';
import {
    defaultCard,
    cards as cardsData,
    ICards,
    shuffleCards
}
    from '@/helper/cards';

export default function Cards() {
    const cards: ICards[] = shuffleCards(cardsData);

    return (
        <div className={styles.container}>
            {
                cards.map((card) => (
                    <div className={styles.flipCard} key={card.id} >
                        <div className={styles.flipCardInner}>
                            <div className={`${styles.flipCardFront}`} style={{ backgroundImage: defaultCard }}></div>
                            <div className={`${styles.flipCardBack}`} style={{ backgroundImage: card.image }} ></div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};