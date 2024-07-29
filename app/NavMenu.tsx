import Link from "next/link";
import Image from "next/image";
import css from './NavMenu.module.css';

export default function NavMenu() {
	return (
		<nav className={css.nav}>
			<Link href={'/'}>
				<Image src="/next.svg" alt="NextSpace Logo" width={216} height={30}/>
			</Link>
			<ul className={css.links}>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li>
					<Link href="/users">Users</Link>
				</li>
			</ul>
		</nav>
	)
}