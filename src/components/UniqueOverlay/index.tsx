/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTransform } from 'framer-motion';
import { useWrapperScroll } from '../../hooks/useWrapperScroll';
import  { Burger, Container, Footer, Header, Logo } from './styles';

export const UniqueOverlay: React.FC = () => {
    const { scrollYProgress } = useWrapperScroll()

    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

    return (
        <Container>
            <Header>
                <Logo/>
                <Burger/> 
            </Header>

            <Footer style={{ opacity }}>
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