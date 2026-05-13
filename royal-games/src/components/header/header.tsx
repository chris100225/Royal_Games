import Link from "next/link";
import styles from "./header.module.css";


const Header = () => {

    return (
        <>
            <header id={styles.header}>
                <div id={styles.container}>
                    <img src="../imgs/Logo_Header.png" alt="Logo do Royal Games" id={styles.logo} />
                    
                    <nav id={styles.botoesAcesso}>
                        <a href="#catalogo" id={styles.catalogo}>Catálogo</a>
                        <Link href="/login" id={styles.login}>Login</Link>
                    </nav>
                </div>
            </header >
        </>
    )
}

export default Header;