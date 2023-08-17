import { VStack } from "@/styled-system/jsx";
import Link from "next/link";
import { getAllArticles, getAllTopics } from "@/libs";
import Box from "@/recipes/box.css";

interface Props {
	topicList: string[];
}

const Topics = async () =>
	// { topicList }: Props
	{
		const article = await Promise.all(await getAllArticles());
		const topicList = getAllTopics(article);

		return (
			<Box >
				<VStack py="1rem">
				<Link href="/blog/page/1">全ての記事</Link>
				{topicList.map((e, i) => (
				<Link
					key={i}
					href={`/blog/topics/${e}`}
				>
					{e}
				</Link>
			))}
				</VStack>
			</Box>
		);
	};

export default Topics;
