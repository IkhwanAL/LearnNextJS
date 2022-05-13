import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#E4F9F5",
			light: "#FFFFFF",
			dark: "#b2c6c2",
		},
		secondary: {
			main: "#30E3CA",
			light: "#76fffd",
			dark: "#00b099",
		},
		text: {
			primary: "#000000",
			secondary: "#000000",
		},
		success: {
			main: "#11999E",
			light: "#59cacf",
			dark: "#006a70",
		},
		error: {
			main: "#40514E",
		},
	},
});

export default theme;
