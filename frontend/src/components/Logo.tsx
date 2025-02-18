// React imports
import { FC } from 'react'
// Style imports
import { Heading, HeadingProps } from '../style'

interface Props {
    headingProps?: HeadingProps;
};

const Logo: FC<Props> = ({ headingProps = {} }: Props) => {
    return (
        <Heading $color='white' {...headingProps}>VisuAi</Heading>
    )
}

export default Logo