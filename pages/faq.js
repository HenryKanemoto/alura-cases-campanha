import Head from "next/head";
import Link from "../src/components/Link";
import PageTitle from "../src/components/PageTittle";

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((resposta) => {
            return resposta.json()
        })
    return {
        props: {
            faq
        },
    };
}


export default function FAQPage({ faq }) {
    console.log(faq);
    

    return (
        <div>
            <Head>
                <PageTitle>FAQ - Alura Cases Perguntas</PageTitle>
            </Head>
            <h1>Alura Cases Perguntas</h1>
            <Link href={'/'}>
                Ir para Home
            </Link>
            <ul>
                {faq.map(({ question, answer }) => (
                    <li key={question}>
                        <article>
                            <h2>
                                {question}
                            </h2>
                            <p>
                                {answer}
                            </p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}