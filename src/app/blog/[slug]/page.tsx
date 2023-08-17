import { fetchArticle, fetchMainText } from "@/libs/github";

export async function generateStaticParams() {
	const repo = await fetchArticle();
	return repo.filter((data: any) => {
		if (data.name !== ".keep")
			return {
				slug: data.name,
			};
	});
}

const page = async ({ params }: { params: { slug: string } }) => {
  const text = await fetchMainText(params.slug);

	return <div>My Post: {JSON.stringify(params)}
  <p>
    {text}
  </p>
  </div>;
};

export default page;
