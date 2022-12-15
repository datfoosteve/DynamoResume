import React from 'react';  // Import React from the react package
import Head from 'next/head';  // Import Head from the next/head package


const AboutPage = () => {  // Create a functional component called AboutPage
    return (  // Return the following JSX
        <div>
            <Head>
                <title>About</title>
            </Head>
            <h1>About</h1>
            <p>About page body content</p>
        </div>
    );  // End return
};  // End AboutPage

export default AboutPage;  // Export AboutPage