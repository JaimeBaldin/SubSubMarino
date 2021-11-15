export const Pesquisa = () => {
    return(
        <>
            <h1 className="text-center">SEO no React</h1>

            <div className="container">
                <h2 className="text-center">React-Router</h2>
                <p>
                Para quem usa o React, conhece muito bem o React Router que é uma biblioteca para tratar com o roteamento de um aplicativo React. E com ele pode ser usado duas maneiras o HashRouter e BrowserRouter.
                O HashRouter é mais compatível com as versões anteriores e, historicamente, ele não da ao Google um novo URI para indexar como uma nova página (ou visualização) para cada rota.
                <p>
                    <a href="https://reactrouter.com/">Para saber um pouco mais sobre o React-Router</a>
                </p>
                </p>
                <h2 className="text-center">Gatsby.JS</h2>
                <p>
                O Gatsby é um framework que reúne as melhores funcionalidades do React  e outras diversas ferramentas modernas em um mesmo pacote, facilitando a criação de sites e aplicações web incrivelmente rápidos e poderosos.
                Com o Gatsby.js você pode desenvolver em React e quando fizer o “build” de seu código ele irá gerar arquivos estáticos que serão acessados pelos usuários. Isto traz diversas vantagens para seus sites como suporte a SEO, uma velocidade incrível, sistema de cache, e diversos outros itens que você pode comparar nesta página. A comunidade do Gatsby oferece diversos plugins e sites pré-desenvolvidos para que você possa iniciar seu projeto com meio caminho andado.
                <p>
                <a href="https://www.gatsbyjs.com/">Para saber um pouco mais sobre o Gatsby.JS</a>
                </p>
                </p>
                <h2 className="text-center">Next.JS</h2>
                <p>
                Next.js é um framework para React. E ele trabalha quase que do mesmo jeito que o Gatsby.JS, cada um tem sua particularidade porém os dois facilitam quando o assunto é o SEO.
                Para gerar toda a página para o browser, o Next utiliza um servidor Node.js. Usa-se Node.js nesse cenário apenas por entender Javascript nativamente.
                Dessa forma, o Next consegue entregar a página pronta para o Browser, ou seja, todo o HTML, CSS e Javascript.
                Com essa funcionalidade, a página é retornada para o usuário toda montada. Pensando que esse usuário seja um motor de busca, todo o conteúdo da página retorna, dispondo conteúdo para ser indexado.
                    <p>
                        <a href="https://nextjs.org/">Para saber um pouco mais sobre o Next.JS</a>
                    </p>
                </p>

            </div>
            
        </>
    )
}