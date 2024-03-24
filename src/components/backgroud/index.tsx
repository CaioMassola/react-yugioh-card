import styles from '@/components/backgroud/style.module.scss';

type IProps = {
    children: React.ReactNode;
}

export default function Backgroud({ children }: IProps) {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
