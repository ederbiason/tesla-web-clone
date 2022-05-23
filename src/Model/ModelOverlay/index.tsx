import { useTransform } from 'framer-motion';
import React, { ReactNode, useCallback, useLayoutEffect, useState } from 'react';

import { CarModel } from '../../contexts/ModelsContext';
import { useWrapperScroll } from '../../hooks/useWrapperScroll';

import { Container } from './styles';

interface Props {
    children: ReactNode;
    model: CarModel;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetHeight' | 'offsetTop'>

const ModelOverlay: React.FC<Props> = ({ children, model }) => {

    const getSectionDimensions = useCallback(() => {
        return { 
            offsetTop: model.sectionRef.current?.offsetTop,
            offsetHeight: model.sectionRef.current?.offsetHeight
        } as SectionDimensions
    }, [model.sectionRef])

    const [dimensions, setDimensions] = useState<SectionDimensions>(
        getSectionDimensions()
    )

    // Trabalha melhor com responsividade
    useLayoutEffect(() => {
        function onResize() {
            window.requestAnimationFrame(() =>setDimensions(getSectionDimensions()))
        }

        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, [getSectionDimensions])

    const { scrollY } = useWrapperScroll()

    const sectionScrollProgress = useTransform(scrollY, y => (y - dimensions.offsetTop) / dimensions.offsetHeight)

    const opacity = useTransform(sectionScrollProgress, [-0.42, -0.05, 0.05, 0.42], [0, 1, 1, 0])

    return (
        <Container style={{ opacity }}>
            {children}
        </Container>
    )
}

export default ModelOverlay;