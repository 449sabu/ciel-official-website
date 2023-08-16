import { Octokit } from 'octokit';

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const getArticle = async () => {
  const owner = '449sabu';
  const repository = 'zenn-posts';
  const repo = await octokit.request(
    `GET /repos/${owner}/${repository}/contents/articles`,
    {
      owner: owner,
      repo: repository,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  );
  // console.log(repo.data);
  return repo.data;
};

export const getArticleList = async (): Promise<string[]> => {
  const a = await getArticle();
  const b = a.filter((e: any) => {
    if (e.name !== '.keep') return e;
  });
  const c = b.map((e: any) => {
    return e.name;
  });
  return c;
};

export const getMainText = async (e: string) => {
  const a = fetch(
    `https://raw.githubusercontent.com/449sabu/zenn-posts/main/articles/${e}`,
    {
      method: 'GET',
    },
  )
    .then((res) => res.text())
    .then((data) => {
      return data;
    });
  // .catch(error => {console.log(error)})
  return a;
};