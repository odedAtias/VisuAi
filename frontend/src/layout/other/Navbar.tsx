// React imports
import { FC } from 'react'
import Logo from '../../components/Logo'
import { Button, FlexContainer } from '../../style'

const Navbar: FC = () => {
    return (
        <FlexContainer justifyContent='space-between' alignItems='center' padding='20px'>
            {/* Logo */}
            <Logo />
            {/* Button */}
            <Button>Generate Image</Button>
        </FlexContainer>
    )
}

export default Navbar