import Link from "next/link";
import styles from "./footer.module.css";


const Footer = () => {

    return (
        <>
            <footer id={styles.footer}>
                <div id={styles.container}>
                    <img src="../imgs/Logo_Header.png" alt="Logo do Royal Games" id={styles.logo} />

                    <div id={styles.contato}>
                        <p className={styles.txt}>royalgames@email.com</p>
                        <p className={styles.txt}>(11) 99999-9999</p>
                        <p className={styles.txt}>@RoyalGames</p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer;