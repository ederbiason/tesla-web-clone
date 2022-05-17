import React from 'react'
import { ModelSection, ModelsWrapper } from '../../Model';
import { DefaultOverlayContent } from '../DefaultOverlayContent';

import  { Container } from './styles';

export const Page: React.FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    <ModelSection
                        className="colored"
                        modelName="Model One"
                        overlayNode={
                            <DefaultOverlayContent
                                label="Model One"
                                description="Order Online for Delivery"
                            />
                        }
                    />
                </div>
            </ModelsWrapper>
        </Container>
    )
}