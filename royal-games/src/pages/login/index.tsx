import { useState } from 'react';
import styles from './login.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { login } from '../api/AuthService';

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const router = useRouter();
    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(email, senha);
            notificacao("Login realizado com sucesso!");
            router.push("/home");
        } catch (error: any) {
            erro(error.message);
        }
    }


    return (
        <>
            <main id={styles.main}>
                <img src="../imgs/imagemLogin.png" alt="" id={styles.imagem} />
                <section id={styles.login}>
                    <form id={styles.conteudo} onSubmit={autenticar}>

                        <img src="../imgs/Logo_Header.png" alt="Logo da Royal Games" id={styles.logo} />
                        <div className={styles.informacoes}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input className={styles.input} type="email" name="email" id="email" placeholder="Digite seu email"
                                required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className={styles.informacoes}>
                            <label htmlFor="senha" className={styles.label}>Senha</label>
                            <input className={styles.input} type="password" name="senha" id="senha" placeholder="Digite sua senha"
                                required value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        <button id={styles.botaoLogin}>Entrar</button>

                    </form>
                </section>
            </main>
        </>
    )
}
export default Login       