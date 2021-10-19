import { Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import "../styles/auth.scss"
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

function NewRoom() {
    const { user } = useAuth()

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;Ao vivo</strong>
                <p>Tire as dúvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form >
                        <input
                            type="text"
                            placeholder="Digite o nome da sala"
                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente?
                        <Link to="/">clique aqui</Link>

                    </p>
                </div>
            </main>
        </div>
    )
}

export default NewRoom