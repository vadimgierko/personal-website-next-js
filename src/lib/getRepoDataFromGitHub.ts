export default async function getRepoDataFromGitHub(repoName: string) {
	const data = await fetch(
		"https://api.github.com/repos/vadimgierko/" + repoName
	)
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});
	console.log("repo data for", repoName, data);
	return data;
}
