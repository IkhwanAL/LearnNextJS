import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ProductDetail: NextPage = () => {
	const { query } = useRouter();

	return <h1>ProductDetail Page {query.productId}</h1>;
};

export default ProductDetail;
