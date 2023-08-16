import { NextPage } from "next";
import Status from "@/components/Status";
import { Center } from "@/styled-system/jsx";
// import { fetchKoiosPoolInformation } from '@/libs/axios'

const Blog: NextPage = async () => {
	// const pool_id = [process.env.NEXT_PUBLIC_POOL_ID || ""];
	// const initialData = await fetchKoiosPoolInformation(pool_id);

	return (
		<main>
			Blog Page
			<Center></Center>
		</main>
	);
};

export default Blog;
