export default async function checkGithubApiTokenRateLimits() {
    const res = await fetch('https://api.github.com/rate_limit', {
        headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
    });
    const data = await res.json();
    console.log("Github API token rate limits data:", data);
}