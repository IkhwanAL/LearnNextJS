import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Home: NextPage = () => {
	const router = useRouter();

	const ChangePage = () => {
		router.push("/product");
	};

	return (
		<div>
			<h1>Home Page</h1>
			<Button variant="contained" LinkComponent={Link} href="/blog">
				Go To Blog
			</Button>
			<Button
				variant="contained"
				LinkComponent={Link}
				href="/product"
				color="secondary"
			>
				Go To Product
			</Button>
			<Button onClick={ChangePage}>Place Order</Button>
		</div>
	);
};

export default Home;
