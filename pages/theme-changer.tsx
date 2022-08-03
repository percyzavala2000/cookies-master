import {ChangeEvent, FC, useEffect, useState} from "react";
import { GetServerSideProps } from 'next'
import {
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    Button
} from "@mui/material";
import Cookies from "js-cookie";
import {Layout} from "../components/layouts";

interface Props {
    theme: string;
}

const ThemesChangerPages:FC<Props>= ({theme}) => {


    const [currentThema,setCurrentThema] = useState(theme);

    const handleChange = (event : ChangeEvent < HTMLInputElement >) => {
        const selectThema = event.target.value;
        setCurrentThema(selectThema);
        localStorage.setItem("theme",selectThema);
        Cookies.set("theme",selectThema);
    }

    const handleClick = async() => {
        const resp = await fetch("/api/hello");
        const data = await resp.json();
    }

    useEffect(() => {

      //  console.log( "Desde LocalStorage:",localStorage.getItem("theme"));
       // console.log( "Desde Cookies:",Cookies.get("theme"));
        
        
        
    }, [currentThema]);

    return (
        <Layout title="themes changer">
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup value={currentThema} onChange={handleChange}>
                            <FormControlLabel value="light" control={< Radio />} label="light"/>
                            <FormControlLabel value="dark" control={< Radio />} label="dark"/>
                            <FormControlLabel value="custom" control={< Radio />} label="custom"/>
                        </RadioGroup>
                    </FormControl>
                    <Button onClick={handleClick} >
                        Solicitud
                    </Button>
                </CardContent>
            </Card>
        </Layout>
    );
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({req}) => {

    const {name="No Name",theme="light"}=req.cookies
    const isValid=["light","dark","custom"]

    return {
        props: {
            theme: isValid.includes(theme) ? theme : "light",
            name
        }
    }
}

export default ThemesChangerPages