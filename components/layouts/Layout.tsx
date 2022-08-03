import Head from "next/head";
import {FC} from "react";
import {Navbar} from "../ui";

interface Props {
    children : React.ReactNode;
    title : string;
}

export const Layout : FC < Props > = ({children, title}) => {

    return (
        <div>
            <Head>
                <title>{title}
                </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <nav>
                {/* Navbar */}
                <Navbar/>
            </nav>

            <main style={{padding:"20px 50px"}} >
                {children}
            </main>
        </div>
    )
}
