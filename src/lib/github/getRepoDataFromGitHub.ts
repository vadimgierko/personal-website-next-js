export default async function getRepoDataFromGitHub(repoName: string) {
	const data = await fetch(
		"https://api.github.com/repos/vadimgierko/" + repoName, {
		headers: {
			Authorization: `token ${process.env.GITHUB_TOKEN}`, // ❗❗❗ public_repo, read:user, user:email ❗❗❗
		},
	}
	)
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});
	console.log("repo data for", repoName, data);
	return data;
}
