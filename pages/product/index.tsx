import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../../src/Link";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
// import Link from "next/link";

interface ProductListProps {
	productId: number;
}

const ProductList: NextPage<ProductListProps> = ({ productId = 100 }) => {
	return (
		<>
			<Container>
				<h1>ProductList Page</h1>
				<div>
					<List>
						<ListItem disablePadding button role={"link"}>
							<ListItemButton
								LinkComponent={Link}
								component="a"
								href="/product/1"
							>
								<ListItemText primary="Priduct 1" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding button role={"link"}>
							<ListItemButton
								LinkComponent={Link}
								component="a"
								href="/product/2"
							>
								<ListItemText primary="Priduct 2" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding button role={"link"}>
							<ListItemButton
								// LinkComponent={Link}
								component={Link}
								href="/product/3"
							>
								<ListItemText primary="Priduct 3" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding button role={"link"}>
							<ListItemButton
								LinkComponent={Link}
								component="a"
								href={`/product/${productId}`}
							>
								<ListItemText
									primary={`Priduct ${productId}`}
								/>
							</ListItemButton>
						</ListItem>
					</List>
				</div>

				<Button variant="contained" LinkComponent={Link} href="/">
					Go To Home
				</Button>
			</Container>
		</>
	);
};

export default ProductList;
