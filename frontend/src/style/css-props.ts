// Box model properties
export type Width = string | number;
export type Height = string | number;
export type Padding = string | number;
export type Margin = string | number;
export type Border = string | number;
export type BorderRadius = string | number;

// Flexbox properties
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type Gap = string | number;

// Typography properties
export type FontSize = string | number;
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'normal' | 'bold' | 'lighter' | 'bolder';
export type Color = string;
export type LineHeight = string | number;
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type FontFamily = string;

// Grid properties
export type GridTemplateColumns = string;
export type GridTemplateRows = string;
export type GridGap = string | number;
export type GridAutoFlow = 'row' | 'column' | 'row-dense' | 'column-dense';
export type GridAutoRows = string | number;
export type GridAutoColumns = string | number;

// Layout properties
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type Top = string | number;
export type Right = string | number;
export type Bottom = string | number;
export type Left = string | number;
export type ZIndex = string | number;