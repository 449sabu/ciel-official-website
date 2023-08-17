import { NextPage } from "next";
import { VStack } from "@/styled-system/jsx";
import { fetchArticleList } from '@/libs/github'
import Link from "next/link";

const Blog: NextPage = async () => {
  const data = await fetchArticleList();

	return (
		<main>
			<VStack>
				{data.map((e,i) => (
					<Link href={`/blog/${e}`} key={i}>{e}</Link>
				))}
			</VStack>
		</main>
	);
};

export default Blog;
