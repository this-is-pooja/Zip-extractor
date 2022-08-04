import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "300px",
  md: "700px",
  lg: "1000px",
  xl: "1440px"
}
const theme = extendTheme({
	breakpoints,
	colors: {
		black: "#000",
		lblack: "#5E5E5E",
		gray: "#D3D3D3",
		white:"#fff",
		Navy:"#34425A"
	},
	fonts: {
		pri: "Josefin Sans",
		sec: "Adamina",
	},
});
export default theme;
