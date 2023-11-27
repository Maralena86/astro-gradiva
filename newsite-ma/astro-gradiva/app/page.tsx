"use client";

import { VideoYoutube } from "./components/VideoYoutube";
import videos from "./lib/videos.json";
import { Access } from "./components/Access";
import { useState } from "react";

export default function Home() {
	const [access, setAccess] = useState(false);
	return (
		<main className="flex min-h-screen flex-col p-4">
			{access ? (
				<div>
					<h1 className="p-4 text-center uppercase text-white">Videos</h1>
					<div className="flex flex-wrap justify-center gap-4">
						{videos.map((video) => (
							<VideoYoutube
								key={video.name}
								name={video.name}
								linky={video.link}
							/>
						))}
					</div>
				</div>
			) : (
				<Access setAccess={setAccess} />
			)}
		</main>
	);
}
