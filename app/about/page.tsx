import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
	title: 'About Us',
	description: 'We are company',

};

export default async function About() {
	return (
		<main>
			<h1>About</h1>
			<p>Some info about</p>
		</main>
	);
}