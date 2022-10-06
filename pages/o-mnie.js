import Head from "next/head";
import Home from ".";
import getEssentialFieldsData from "../lib/getEssentialFieldData";

export default function About({ bio, fieldsOfInterests }) {
	return (
		<>
			<Head>
				<title>Vadim Gierko | O mnie</title>
				<meta
					name="description"
					content="Dowiedz się więcej o moich zainteresowaniach i obszarach, w których działam!"
				/>
			</Head>
			<Home bio={bio} fieldsOfInterests={fieldsOfInterests} />
		</>
	);
}

export async function getStaticProps() {
	const bio = {
		img: "vadim-gerko-zdjecie-cv.jpg",
		title: "Cześć!",
		description: `
Nazywam się Vadim Gierko.

Jestem osobą o wielu zainteresowaniach i kompetencjach twórczo-intelektualnych,
którym poświęciłem dłuższe okresy mojego życia.

W każdym z tych obszarów dążę do osiągnięcia najwyższego poziomu w zakresie
wiedzy, umiejętności, kreatywności i wartości, którą mogę dać innym poprzez moje projekty.

Scrolluj dalej i poznaj mnie lepiej!
		`,
	};

	return {
		props: {
			bio,
			fieldsOfInterests: getEssentialFieldsData(),
		},
	};
}
