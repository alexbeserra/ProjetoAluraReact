import './estilo.css'
import Input from "../Input"

function Pesquisa() {
    return (
        <section className='pesquisacontainer'>
            <h2 className='titulo'>Já sabe por onde começar?</h2>
            <h3 className='subtitulo'>Encontre seu livro em nossa estante.</h3>
            <Input
                placeholder="Escreva sua próxima leitura"
            />
        </section>
    )
    
}

export default Pesquisa