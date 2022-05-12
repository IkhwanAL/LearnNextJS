import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Review: NextPage = () => {
	const { query } = useRouter();
	const { productId, reviewId } = query;

	return (
		<h1>
			Review Page {productId} Review {reviewId}
		</h1>
	);
};

export default Review;
