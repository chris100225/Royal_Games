import styles from './login.module.css'
import Link from 'next/link'

const Login = () => {
    return (
        <>
            <main id={styles.main}>
                <img src="../imgs/imagemLogin.png" alt="" id={styles.imagem} />
                <section id={styles.login}>
                    <div id={styles.conteudo}>

                        <img src="../imgs/Logo_Header.png" alt="Logo da Royal Games" id={styles.logo} />
                        <div className={styles.informacoes}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input className={styles.input} type="email" name="email" id="email" placeholder="Digite seu email" />
                        </div>

                        <div className={styles.informacoes}>
                            <label htmlFor="senha" className={styles.label}>Senha</label>
                            <input className={styles.input} type="password" name="senha" id="senha" placeholder="Digite sua senha" />
                        </div>
                        
                        <button id={styles.botaoLogin}>Entrar</button>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Login       