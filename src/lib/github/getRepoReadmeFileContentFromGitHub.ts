export default async function getRepoReadmeFileContentFromGitHub(repoName: string) {
	const { download_url } = await fetch(
		`https://api.github.com/repos/vadimgierko/${repoName}/readme`, {
		headers: {
			Authorization: `token ${process.env.GITHUB_TOKEN}`, // ❗❗❗ public_repo, read:user, user:email ❗❗❗
		},
	}
	).then((res) => res.json());
	const readmeMarkdown = await fetch(download_url).then((res) => res.text());
	console.log("readme markdown for", repoName, readmeMarkdown);
	return readmeMarkdown;
}
