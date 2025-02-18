import {
    AlignItems, BorderRadius, Color, FlexDirection, FontFamily, FontSize, FontWeight, Gap,
    GridAutoColumns, GridAutoFlow, GridAutoRows, GridGap, GridTemplateColumns, GridTemplateRows,
    Height, JustifyContent, LineHeight, Margin, Padding, TextAlign, Width
}
    from "./css-props";

export interface FlexContainerProps {
    $flexDirection?: FlexDirection;
    $justifyContent?: JustifyContent;
    $alignItems?: AlignItems;
    $gap?: Gap;
    $background?: Color;
    $padding?: Padding;
    $margin?: Margin;
}

export interface ButtonProps {
    $backgroundColor?: Color;
    $color?: Color;
    $padding?: Padding;
    $borderRadius?: BorderRadius;
    $fontSize?: FontSize;
    $width?: Width;
    $hoverBackgroundColor?: Color;
}

export interface HeadingProps {
    $fontSize?: FontSize;
    $fontWeight?: FontWeight;
    $color?: Color;
    $lineHeight?: LineHeight;
    $textAlign?: TextAlign;
    $fontFamily?: FontFamily;
    $margin?: Margin;
}

export interface TextProps {
    $fontSize?: FontSize;
    $color?: Color;
    $margin?: Margin;
    $lineHeight?: LineHeight;
    $textAlign?: TextAlign;
    $fontFamily?: FontFamily;
}

export interface GridProps {
    $gridTemplateColumns?: GridTemplateColumns;
    $gridTemplateRows?: GridTemplateRows;
    $gridGap?: GridGap;
    $gridAutoFlow?: GridAutoFlow;
    $gridAutoRows?: GridAutoRows;
    $gridAutoColumns?: GridAutoColumns;
    $margin?: Margin;
    $padding?: Padding;
    $background?: Color;
    $justifyItems?: string;
    $alignItems?: string;
    $justifyContent?: JustifyContent;
    $alignContent?: string;
    $overflowX?: string;
    $overflowY?: string;
    $gap?: Gap;
    $width?: Width;
    $height?: Height;
}