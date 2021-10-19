import { useHistory } from 'react-router'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import "../styles/auth.scss"
import { Button } from '../components/Button'
import {useAuth} from '../hooks/useAuth'

function Home() {

    const history = useHistory()
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }

        history.push('/rooms/new')

    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;Ao vivo</strong>
                <h1>{user?.name}</h1>
                <p>Tire as dúvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form >
                        <input
                            type="text"
                            placeholder="Digite o codigo da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Home