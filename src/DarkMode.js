import {useState} from 'react'
import Splashscreen from "./SplashScreen";
import { ThemeProvider} from "styled-components";
import Header from "./Header"


const DarkTheme = {
    pageBackground: "black",
    titleColor: "white",
    borderColor:"white"
}

const LightTheme = {
    pageBackground:"white",
    titleColor: "black",
    borderColor:"black"
}

const themes ={
    light: LightTheme,
    dark: DarkTheme,
}
function DarkMode() {
    const[theme, setTheme] = useState("light")
    return (
        <ThemeProvider theme={themes[theme]}>
            <Header theme={theme} setTheme={setTheme} />
        </ThemeProvider>
    )
}

export default DarkMode

