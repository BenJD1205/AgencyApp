import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import {useState} from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <Link href="/">
                AV0CAD0
            </Link>
            <ul className={styles.list}> 
                <li className={styles.listItem}>
                    <Link href="/products/design">
                        DESIGNS
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/development">
                        DEVELOMENT
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/production">
                        PRODUCTION 
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/photography">
                        PHOTOGRAPHY
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/contact">
                        CONTACT
                    </Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <ul onClick={() => setOpen(false)} className={styles.menu} style={{right:open ? "0px" : "-50vw"}}>
                    <li className={styles.menuItem}>
                        <Link href="/products/design">
                            DESIGNS
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/products/development">
                            DEVELOMENT
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/products/production">
                            PRODUCTION 
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/products/photography">
                            PHOTOGRAPHY
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
