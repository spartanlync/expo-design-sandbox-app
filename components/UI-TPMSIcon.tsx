import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

type TPMSIconProps = SvgProps & {
    color?: string;
    width?: number;
    height?: number;
};

const TPMSIcon: React.FC<TPMSIconProps> = ({
    color = "black",
    width = 28,
    height = 21,
    ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    {...props}>
    <Path
      d="M163.686 161.858c0-7.55-6.11-13.69-13.686-13.69-7.533 0-13.644 6.14-13.644 13.69 0 7.508 6.11 13.647 13.644 13.647 7.575 0 13.686-6.14 13.686-13.647Zm-27.33-116.312v70.475c0 7.55 6.11 13.648 13.644 13.648 7.575 0 13.686-6.098 13.686-13.648V45.546c0-7.55-6.11-13.647-13.686-13.647-7.533 0-13.644 6.097-13.644 13.647Zm0 0"
      fillRule="nonzero"
      fill={color}
      fillOpacity="1"
      strokeWidth="0.0920221"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
      strokeOpacity="1"
      strokeMiterlimit="4"
      transform="scale(.09333 .09417)"
    />
    <Path
      d="M406.627 379.901c57.76-48.183 80.625-126.422 57.841-198.14-1.765-5.566-4.492-10.893-7.942-15.664l-45.005-61.064a53.726 53.726 0 0 1-10.59-32.043V56.611c0-3.896 3.29-7.156 7.22-7.156h27.437c4.653 0 8.503 3.578 8.985 8.19l3.128 35.064a53.578 53.578 0 0 0 10.67 27.67c23.345 31.009 37.866 67.822 41.877 106.464 2.647 50.33-12.756 99.945-43.401 140.018L440 420.928c-.562 1.75-2.166 3.022-4.011 3.18l-39.871 2.068v-22.263H365.23v22.263h-30.886v-22.263H303.54v22.263h-30.887v-22.263h-30.886v22.263h-30.806v-22.263h-30.886v22.263l-39.87-2.067c-1.846-.16-3.53-1.431-4.012-3.18l-16.847-54.068c-30.645-40.073-46.048-89.688-43.401-140.018 4.011-38.642 18.451-75.455 41.877-106.464a53.578 53.578 0 0 0 10.67-27.67l3.128-35.064c.401-4.612 4.332-8.19 8.985-8.19h27.437c3.93 0 7.14 3.26 7.14 7.236v16.3c0 11.528-3.69 22.74-10.51 32.042l-45.005 61.064c-3.45 4.77-6.177 10.098-7.942 15.664-22.784 71.718.08 149.957 57.841 198.14Zm0 0"
      fillRule="nonzero"
      fill={color}
      fillOpacity="1"
      strokeWidth="1"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke={color}
      strokeOpacity="1"
      strokeMiterlimit="4"
      transform="matrix(.0487 0 0 .04913 -.026 -.66)"
    />
  </Svg>
)
export default TPMSIcon