// React imports
import { FC } from 'react'
// Style imports
import { Button, FlexContainer } from '../../style'
// FS imports
import Logo from '../../components/Logo'

const Navbar: FC = () => {
    return (
        <FlexContainer $padding='20px' $justifyContent='space-between' $alignItems='center'>
            {/* Logo */}
            <Logo />
            {/* Button */}
            <Button $hoverBackgroundColor='red'>Generate Image</Button>
        </FlexContainer>
    )
}

export default Navbar