import { getAllArticles, getAllTopics } from "@/libs";

export async function generateStaticParams() {
	const article = await Promise.all(await getAllArticles());
	const topics = getAllTopics(article);
	return topics.map((topic) => ({ slug: topic  }));
}

const page = async ({ params }: { params: { slug: string } }) => {
	return <div>{JSON.stringify(params)}</div>;
};

export default page;
