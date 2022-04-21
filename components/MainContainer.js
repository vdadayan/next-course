import React from 'react';
import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'ulbi tv,nextjs' + keywords}/>
                <title>Главная страница</title>
            </Head>
            <div className='navbar'>
                <A href={'/'} text={'Главная'}/>
                <A href={'/users'} text={'Список пользователей'}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: red;
                        padding: 20px;
                        }`
                }
            </style>
        </>
    );
};

export default MainContainer;
