// Third party libraries imports
import { styled, createGlobalStyle } from 'styled-components';
// FS imports
import { FlexContainerProps, ButtonProps, HeadingProps } from './styled-components-props';

export const DefaultStyleCleaner = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Atkinson Hyperlegible Next', sans-serif;
   }
`;

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  gap: ${(props) => props.gap || '0'};
  background: ${(props) => props.background || 'transparent'};
  padding: ${(props) => props.padding || '0'};
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || '#6200ea'};
  color: ${(props) => props.color || 'white'};
  padding: ${(props) => props.padding || '12px 24px'};
  border: none;
  border-radius: ${(props) => props.borderRadius || '8px'};
  font-size: ${(props) => props.fontSize || '16px'};
  width: ${(props) => props.width || 'auto'};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || '#3700b3'};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;

// Define the HeadingProps interface to allow customization for different heading levels


// Create a generic heading component that can be used for any heading tag (h1, h2, etc.)
export const Heading = styled.h1<HeadingProps>`
  font-size: ${(props) => props.fontSize || '32px'};
  font-weight: ${(props) => props.fontWeight || 'lighter'};
  color: ${(props) => props.color || '#000'};
  line-height: ${(props) => props.lineHeight || '1.2'};
  text-align: ${(props) => props.textAlign || 'left'};
  font-family: ${(props) => props.fontFamily || 'Arial, sans-serif'};
  margin: ${(props) => props.margin || '0'};
`;


