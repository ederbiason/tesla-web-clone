import React, { ReactNode } from 'react'

import  { Container } from './styles';

type Props = {
    children: ReactNode;
}

export const ModelsWrapper: React.FC<Props> = ({ children }) => {
    return <Container>{children}</Container>;
}