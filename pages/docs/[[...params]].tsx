import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Docs: NextPage = () => {
	const router = useRouter();
	const { params = [] } = router.query;
	return <h1>Docs Page {(params as string[]).map((x) => `${x} / `)} </h1>;
};

export default Docs;
