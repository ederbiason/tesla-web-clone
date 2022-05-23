import React, { ReactNode } from 'react';
import { useWrapperScroll } from '../../hooks/useWrapperScroll';
import { Container } from './styles';

type Props = {
    children: ReactNode;
}

const ModelOverlay: React.FC<Props> = ({ children }) => {
    const { scrollY } = useWrapperScroll()

    return (
        <Container>
            {children}
        </Container>
    )
}

export default ModelOverlay;