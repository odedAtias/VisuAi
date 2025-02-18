// Third party libraries imports
import { styled, createGlobalStyle } from 'styled-components';
// FS imports
import { FlexContainerProps, ButtonProps, HeadingProps, TextProps, GridProps } from './styled-components-props';

export const DefaultStyleProvider = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
   font-family: "Atkinson Hyperlegible Next", serif;
   }
`;

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || 'row'};
  justify-content: ${(props) => props.$justifyContent || 'flex-start'};
  align-items: ${(props) => props.$alignItems || 'stretch'};
  gap: ${(props) => props.$gap || '0'};
  background: ${(props) => props.$background || 'transparent'};
  padding: ${(props) => props.$padding || '0'};
  margin: ${(props) => props.$margin || '0'};
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.$backgroundColor || '#6200ea'};
  color: ${(props) => props.$color || 'white'};
  padding: ${(props) => props.$padding || '12px 24px'};
  border: none;
  border-radius: ${(props) => props.$borderRadius || '8px'};
  font-size: ${(props) => props.$fontSize || '16px'};
  width: ${(props) => props.$width || 'auto'};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.$hoverBackgroundColor || 'transparent'};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;

export const Heading = styled.h1<HeadingProps>`
  font-size: ${(props) => props.$fontSize || '32px'};
  font-weight: ${(props) => props.$fontWeight || 'lighter'};
  color: ${(props) => props.$color || '#000'};
  line-height: ${(props) => props.$lineHeight || '1.2'};
  text-align: ${(props) => props.$textAlign || 'left'};
  font-family: ${(props) => props.$fontFamily || 'inherit'};
  margin: ${(props) => props.$margin || '0'};
`;

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.$fontSize || '16px'};
  color: ${(props) => props.$color || '#000'};
  margin: ${(props) => props.$margin || '0'};
  line-height: ${(props) => props.$lineHeight || '1.2'};
  text-align: ${(props) => props.$textAlign || 'left'};
  font-family: ${(props) => props.$fontFamily || 'inherit'};
`;

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => props.$gridTemplateColumns || 'auto'};
  grid-template-rows: ${(props) => props.$gridTemplateRows || 'auto'};
  grid-gap: ${(props) => props.$gridGap || '0'}
  grid-auto-flow: ${(props) => props.$gridAutoFlow || 'row'};
  grid-auto-rows: ${(props) => props.$gridAutoRows || 'auto'};
  grid-auto-columns: ${(props) => props.$gridAutoColumns || 'auto'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  background: ${(props) => props.$background || 'transparent'};
  justify-items: ${(props) => props.$justifyItems || 'normal'};
  align-items: ${(props) => props.$alignItems || 'normal'};
  justify-content: ${(props) => props.$justifyContent || 'normal'};
  align-content: ${(props) => props.$alignContent || 'normal'};
  overflow-x: ${(props) => props.$overflowX || 'auto'};
  overflow-y: ${(props) => props.$overflowY || 'auto'};
  gap: ${(props) => props.$gap || '0'};
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  `;