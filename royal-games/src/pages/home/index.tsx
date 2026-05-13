import Header from "@/components/header/header";
import styles from "./home.module.css";
import ListaJogos from "@/components/listar-jogos/lista-jogos";
import Footer from "@/components/footer/footer";

const Home = () => {

    return (
        <>
            <Header />
            <main id={styles.main}>

                <section id={styles.banner}>
                    <div id={styles.conteudo}>
                        <div id={styles.containerTxt}>
                            <h1 className={styles.titulo}>Conheça nossos jogos!</h1>
                            <p className={styles.txt}>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua
                                próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                        </div>
                        <img src="../imgs/ImagemBannerHome.png" alt="Imagem de uma mulher com cabelos platinados e óculos cyberpunk" id={styles.imgBanner} />
                    </div>
                </section>

                <section id={styles.catalogo}>
                    <div className={styles.caixaTitulo}>
                        <h2 className={styles.titulo}>Catálogo de Jogos</h2>
                        <hr id={styles.linha} />
                    </div>
                    <ListaJogos />
                </section>

                <section id={styles.manchete}>
                    <div className={styles.caixaTitulo}>
                        <h2 className={styles.titulo}>Jogos online podem afetar o comportamento humano?</h2>
                        <hr id={styles.linha} />
                    </div>
                    <div id={styles.jogosImg}>
                        <img src="../imgs/lolHome.png" alt="Logotipo de League of Legends" id={styles.jogosManchete} />
                        <img src="../imgs/countersHome.png" alt="Logotipo de Counter Strike" id={styles.jogosManchete} />
                    </div>
                    <p className={styles.txt}> Estudos indicam que jogos podem alterar o comportamento humano… <br />
                        Principalmente quando o time resolve testar sua paciência em plena partida ranqueada.</p>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Home;