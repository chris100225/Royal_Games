import styles from './card-jogo.module.css'
import Link from 'next/link'

const Cardjogo = () => {
    return (
        <>
            <article id={styles.card}>
                <div id={styles.alinhamento}>
                    <img src="/imgs/StardewCard.png" alt="Imagem promocional do jogo Stardew Valley" />
                    <p id={styles.titulo}>Stardew Valley</p>
                    <p id={styles.preco}>R$30,00</p>
                    <Link href="/detalhe" id={styles.botaoDetalhe}>Detalhes</Link>
                    <div id={styles.botoes}>
                        <button className={styles.botoesCard}>Excluir</button>
                        <button className={styles.botoesCard}>Editar</button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Cardjogo       