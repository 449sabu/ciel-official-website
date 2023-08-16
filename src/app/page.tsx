import { css } from "@/styled-system/css";
import { Center } from "@/styled-system/jsx";
import { fetchKoiosPoolInformation } from '@/libs/axios'
import Status from '@/components/Status'

export default async function Home() {
	const pool_id = [process.env.NEXT_PUBLIC_POOL_ID || ""];
	const initialData = await fetchKoiosPoolInformation(pool_id);

	return (
		<main>
			<Center>
				<div
					className={css({
						textAlign: "center",
						fontWeight: "bold",
						pt: "4rem"
					})}
				>
					<p
						className={css({
							fontSize: { md: "14rem" },
							lineHeight: { base: "10rem" },
						})}
					>
						CIEL
					</p>
					<p
						className={css({
							fontSize: { md: "6rem" },
							lineHeight: { base: "12rem" },
						})}
					>
						Stake Pool
					</p>
					<p
						className={css({
							fontSize: { base: "2rem" },
						})}
					>
						New Official Website Coming Soon
					</p>
			<Status pool={initialData}/>
				</div>
			</Center>
		</main>
	);
}
