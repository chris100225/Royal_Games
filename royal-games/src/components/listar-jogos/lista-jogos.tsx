import Link from "next/link";
import styles from "./lista-jogos.module.css";
import CardJogo from "../card-jogo/card-jogo";


const ListaJogos = () => {

    return (
        <>
            <div id={styles.lista}>

                <input type="text" name="pesquisa" placeholder="Pesquise..." id={styles.pesquisa} />

                <select name="filtro" className={styles.filtro}>Preço
                    <option className={styles.opcoes} value="todos">Preço</option>
                    <option value="menor_valor" className={styles.opcoes}>Menor Preço</option>
                    <option value="maior_valor" className={styles.opcoes}>Maior Preço</option>
                </select>

                <select name="filtro" className={styles.filtro}>Categoria
                    <option value="todos" className={styles.opcoes}>Categoria</option>
                    <option value="menor_valor" className={styles.opcoes}>Categoria 1</option>
                    <option value="maior_valor" className={styles.opcoes}>Categoria 2</option>
                </select>
            </div>
            <div id={styles.cards}>
                <CardJogo />
                <CardJogo />
                <CardJogo />
                <CardJogo />
                <CardJogo />
                <CardJogo />
            </div>
        </>
    )
}

export default ListaJogos;