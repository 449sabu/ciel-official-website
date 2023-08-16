"use client";

import { useQuery } from "@tanstack/react-query";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { css } from "@/styled-system/css";
import { fetchKoiosPoolInformation } from "@/libs/axios";
import { calculateADA } from "@/libs";
import type { PoolInformationType } from "@/types/";
import { HStack } from "@/styled-system/jsx";

type StatusProps = {
	pool: PoolInformationType[];
};

const Status = ({ pool }: StatusProps) => {
	const pool_id = process.env.NEXT_PUBLIC_POOL_ID || "";
	const { data, isError, isFetching } = useQuery<PoolInformationType[]>({
		queryKey: ["koios_pool_information", { pool_id }],
		queryFn: () => fetchKoiosPoolInformation([pool_id]),
		initialData: pool,
	});

	if (isError) {
		return <p>Now Reloading Error.</p>;
	}

	return (
		<HStack gap="0" my="3rem">
			<div
				className={css({
					padding: "0 2rem",
					margin: "0.5rem 0",
					fontSize: "1.5rem",
					lineHeight: { base: "2.5rem" },
					textAlign: "center",
					w: "16rem",
				})}
			>
				<p
					className={css({
						fontSize: "3rem",
						fontWeight: "bold",
					})}
				>
					{isFetching ? "..." : data[0].live_delegators}
				</p>
				<p>Delegators</p>
			</div>

			<div
				className={css({
					padding: "0 2rem",
					margin: "0.5rem 0",
					fontSize: "1.5rem",
					borderX: "1px solid",
					lineHeight: { base: "2.5rem" },
					textAlign: "center",
					w: "16rem",
				})}
			>
				<p
					className={css({
						fontSize: "3rem",
						fontWeight: "bold",
					})}
				>
					{isFetching
						? "..."
						: calculateADA(data[0].active_stake as string, 2, true)}
				</p>
				<p>Active Stake</p>
			</div>

			<div
				className={css({
					padding: "0 2rem",
					margin: "0.5rem 0",
					fontSize: "1.5rem",
					lineHeight: { base: "2.5rem" },
					textAlign: "center",
					w: "16rem",
				})}
			>
				<p
					className={css({
						fontSize: "3rem",
						fontWeight: "bold",
					})}
				>
					{isFetching
						? "..."
						: calculateADA(data[0].live_pledge as string, 2, true)}
				</p>
				<HStack gap="2" justifyContent="center">
					<p>Live Pledge</p>
					<CheckBadgeIcon
						className={css({
							h: "1.5rem",
							textAlign: "center",
							justifyContent: "center",
							alignItems: "center",
							color: "green.600",
						})}
					/>
				</HStack>
			</div>
		</HStack>
	);
};

export default Status;
