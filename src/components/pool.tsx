"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchKoiosPoolInformation } from "@/libs/axios";
import { css } from "@/styled-system/css";
import { useState } from "react";

export default function PoolInformation(props: { pool: any }) {
	const pool_id = process.env.NEXT_PUBLIC_POOL_ID || "";

	const [poolId, setPoolId] = useState<string>("");
	const [poolIds, setPoolIds] = useState<Array<string>>([pool_id]);

	const { data, isError, isFetching } = useQuery<any[]>({
		queryKey: ["koios_pool_information", { poolIds }],
		queryFn: () => fetchKoiosPoolInformation(poolIds),
		initialData: props.pool,
	});

  if(isFetching){
    return (
      <p className={css({
        textAlign: "center",
        fontSize: "3rem",
        fontWeight: "bold"
      })}>Loading...</p>
    )
  }

	// data の中からデータを取得する
	return (
		<section>
			<form action="">
				<label>
					Text input:{" "}
					<input
						name="myInput"
            className={css({
              border: "1px solid",
              borderRadius: "50px"
            })}
						onChange={(e) => {
							e.preventDefault();
							setPoolId(e.target.value);
						}}
					/>
				</label>

				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						setPoolIds([...poolIds, poolId]);
					}}
				>
					SET
				</button>
			</form>

			<p
				className={css({
					fontSize: "2rem",
					fontWeight: "bold",
					bgColor: "cyan.200",
				})}
			>
				initialData によるプリフェッチ Koios Pool Information
			</p>

			<p>POOL List</p>
			{poolIds.map((e, i) => (
				<p key={i}>{e}</p>
			))}

			{data?.map((e, i) => (
				<div
					key={i}
					className={css({
						border: "2px solid",
						margin: "2rem",
						padding: "1rem",
					})}
				>
					<p>{JSON.stringify(e)}</p>
				</div>
			))}
		</section>
	);
}
