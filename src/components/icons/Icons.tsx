import React from 'react';
import {ColorValue} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type IconProps = {
  color: ColorValue;
  size: number;
};

const BackArrowIcon = ({color = '#000000', size = 30}: IconProps) => (
  <Svg
    height={size}
    width={size}
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 26.676 26.676">
    <Path
      d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59
      c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815
      C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029
      c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562
      C26.18,21.891,26.141,21.891,26.105,21.891z"
      fill={color}
    />
  </Svg>
);

const SearchIcon = ({color = '#000000', size = 30}: IconProps) => (
  <Svg viewBox="0 0 30 30" width={size} height={size}>
    <Path
      fill="none"
      stroke={color}
      stroke-miterlimit="10"
      stroke-width="2"
      d="M13 4A9 9 0 1 0 13 22A9 9 0 1 0 13 4Z"
    />
    <Path
      fill="none"
      stroke={color}
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="2"
      d="M26 26L19.437 19.437"
    />
  </Svg>
);

type IconsProps = {
  BackArrowIcon: ({color, size}: IconProps) => JSX.Element;
  SearchIcon: ({color, size}: IconProps) => JSX.Element;
};

export const Icons: IconsProps = {
  BackArrowIcon,
  SearchIcon,
};
