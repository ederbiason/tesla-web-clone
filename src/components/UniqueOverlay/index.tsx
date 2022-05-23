/* eslint-disable jsx-a11y/anchor-is-valid */
import  { Burger, Container, Footer, Header, Logo } from './styles';

export const UniqueOverlay: React.FC = () => {
    return (
        <Container>
            <Header>
                <Logo/>
                <Burger/> 
            </Header>

            <Footer>
                <ul>
                    <li>
                        <a href="#">UI Clone</a>
                    </li>
                    <li>
                        <a href="#">made with ❤️</a>
                    </li>
                    <li>
                        <a href="#">by Eder Biason</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    )
}