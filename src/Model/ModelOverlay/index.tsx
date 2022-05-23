import React, { ReactNode } from 'react';
import { Container } from './styles';

type Props = {
    children: ReactNode;
}

const ModelOverlay: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ModelOverlay;