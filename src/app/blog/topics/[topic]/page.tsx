import Image from "next/image";
import Link from "next/link";
import { VStack, HStack, Stack } from "@/styled-system/jsx";
import { css } from "@/styled-system/css";
import { getAllArticles, getAllTopics } from "@/libs/github";
import Badge from "@/components/Badge";

export async function generateStaticParams() {
	const article = await getAllArticles();
	const topics = getAllTopics(article);
	return topics.map((topic) => ({ topic: topic }));
}

const page = async ({ params }: { params: { topic: string } }) => {
	const article = await getAllArticles();
	const contents = article.filter((slug) =>
		slug.frontmatter.topics.includes(params.topic)
	);

	return (
		<VStack>
			{contents.map((content, i) => (
				<Link
					href={`/blog/${content.slug}`}
					key={i}
					className={css({
						h: { md: "10rem" },
						w: "100%",
					})}
				>
					<Stack
						direction={{ base: "column", md: "row" }}
						alignItems="start"
						gap="6"
					>
						<Image
							src={`https://raw.githubusercontent.com/449sabu/${process.env.GITHUB_REPO}/main/images/ogp/${content.frontmatter.image}`}
							width={1200}
							height={630}
							alt="ogp image"
							className={css({
								h: { md: "10rem" },
								w: "26rem",
								objectFit: "contain",
								borderRadius: "xl",
							})}
						/>
						<VStack alignItems="start" py={{ md: "1rem" }} w="100%">
							<p className={css({ fontSize: "xl" })}>
								{content.frontmatter.title}
							</p>
							<HStack>
								{content.frontmatter.topics.map((topic, index) => (
									<Badge text={topic} key={index} />
								))}
							</HStack>
						</VStack>
					</Stack>
				</Link>
			))}
		</VStack>
	);
};

export default page;
