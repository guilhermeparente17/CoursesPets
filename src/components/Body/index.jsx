import React from 'react'
import {
    Body,
    BodyContainer,
    BodyP,
    BodyTitle,
    BodySection,
    BodyHR
} from './BodyElements'
const index = () => {
    return (
        <Body>
            <BodyContainer>
                <BodyP>Your pets should also learn</BodyP>
                <BodyTitle>Training courses for your animals</BodyTitle>
                <BodySection>
                    <BodyHR />
                    <BodyP>Your pets should also learn</BodyP>
                </BodySection>
            </BodyContainer>

        </Body>
    )
}

export default index
