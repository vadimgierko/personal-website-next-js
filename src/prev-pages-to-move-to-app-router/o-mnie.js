import { useRouter } from "next/router";
import { useEffect } from "react";

export default function About() {
	const router = useRouter();

	useEffect(() => {
		router.push("/");
	}, [router]);
}
