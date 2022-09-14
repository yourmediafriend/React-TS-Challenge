import { useEffect, useState } from "react";
import { tmdbResponse } from "../types/tmdbResponse";

const useGetData = (url: string) => {
	const [fetchResponse, setFetchResponse] = useState<{
		data: tmdbResponse | null;
		error: Record<string, string> | null;
		loading: boolean;
	}>({
		data: null,
		error: null,
		loading: false,
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				return response.json();
			} catch (e) {
				console.log(e);
				return e;
			}
		};
		setFetchResponse((state) => ({ ...state, loading: true }));
		fetchData().then((data) => {
			setFetchResponse((state) => ({ ...state, data, loading: false }));
		});
	}, [url]);

	return fetchResponse;
};

export default useGetData;
