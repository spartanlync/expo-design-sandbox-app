import * as React from "react"
import { StyleSheet, Dimensions } from 'react-native';
import { View } from '@/components/Themed';
import Svg, { SvgProps, Defs, G, Path, Circle, Rect, Use } from "react-native-svg"

const TIRE_ALERT_OK = 1;
const TIRE_ALERT_AMBER = 2;
const TIRE_ALERT_RED = 3;

type TrailerAxleTiresComponentProps = SvgProps & {
  color?: string;
  width?: number;
  height?: number;
  doesAxle3Exist?: boolean;
};

const SVGstyles = StyleSheet.create({
  frontBumperFill: {
    color: "#9d9fa2",
  },
  frontBumperStroke: {
    color: "#333132",
  },
  frameStroke: {
    color: "#333132",
  },
  frameSupportFill: {
    color: "#dcddde",
  },
  frameSupportStroke: {
    color: "#333132",
  },
  axleFill: {
    color: "#9d9fa2",
  },
  axleStroke: {
    color: "#333132",
  },
  tireFill: {
    color: "#403e3e",
  },
  tireTreadFill: {
    color: "#333132",
  },
  tireAmberAlertStroke: {
    color: "#FBBD04",
  },
  tireAmberAlertIconFill: {
    color: "#453302",
  },
  tireRedAlertStroke: {
    color: "#BD2727",
  },
  tireRedAlertIconFill: {
    color: "#ce0000",
  },
  tireRedAlertIconShadowFill: {
    color: "#a50000",
  },
  tireRedAlertIconBorderStroke: {
    color: "#000000",
  },
});

const TrailerAxleTiresComponent: React.FC<TrailerAxleTiresComponentProps> = ({
  color = "black",
  width = 319,
  height = 651,
  doesAxle3Exist = false,
  ...props
}) => {

  let axle1Tire1Alert: number = TIRE_ALERT_RED;
  let axle1Tire2Alert: number = TIRE_ALERT_RED;
  let axle2Tire1Alert: number = TIRE_ALERT_AMBER;
  let axle2Tire2Alert: number = TIRE_ALERT_AMBER;
  let axle3Tire1Alert: number = TIRE_ALERT_AMBER;
  let axle3Tire2Alert: number = TIRE_ALERT_AMBER;

  const windowHeight = Dimensions.get("window").height;
  const marginPercentage = 0.21; // 21% margin

  // Maintain the original aspect ratio
  const originalWidth = width;
  const originalHeight = height;
  const aspectRatio = originalWidth / originalHeight;

  // Calculate the effective height by applying a 20% margin on the top and bottom
  const effectiveHeight = windowHeight * (1 - 2 * marginPercentage);
  const effectiveWidth = effectiveHeight * aspectRatio;
  return (
  <View style={{ width: effectiveWidth, aspectRatio }}>
  <Svg
    id="TrailerView"
    width="100%"
    height="100%"
    // Adjusted viewBox to match effective dimensions
    viewBox={`0 0 ${originalWidth} ${originalHeight}`}
    {...props}
    >
    <G
      id="TrailerAxle12"
      display="inline"
    >
      <Path
        id="path1"
        d="M116.3 152.921a4.1 4.1 0 0 1-3.41-1.82l-20.78-31a4.1 4.1 0 0 1-.69-2.28v-75.3a4.09 4.09 0 0 1 .61-2.15l1.44-2.35v-20.33a4.1 4.1 0 1 1 8.19 0v21.51a4.17 4.17 0 0 1-.6 2.15l-1.45 2.34v72.89l20.09 30a4.09 4.09 0 0 1-3.4 6.38z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="path2"
        d="M129.46 7.751v-.25a3.46 3.46 0 0 0-3.46-3.48h-15.48a3.46 3.46 0 0 0-3.46 3.46v.25h-1.84v5.29h-15a1.61 1.61 0 0 0-1.61 1.61v4.64a1.61 1.61 0 0 0 1.61 1.61h15v5.29h1.84v.25a3.46 3.46 0 0 0 3.46 3.46H126a3.46 3.46 0 0 0 3.47-3.46v-.25h4.29V7.751Z"
        fill={SVGstyles.frontBumperFill.color}
        stroke={SVGstyles.frontBumperStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="path4"
        d="M203.23 152.921a4.11 4.11 0 0 0 3.41-1.82l20.78-31a4.1 4.1 0 0 0 .69-2.28v-75.3a4.09 4.09 0 0 0-.61-2.15l-1.44-2.35v-20.33a4.1 4.1 0 0 0-8.2 0v21.51a4.09 4.09 0 0 0 .61 2.15l1.44 2.34v72.89l-20.08 30a4.1 4.1 0 0 0 1.12 5.69 4.06 4.06 0 0 0 2.28.65z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="path5"
        d="M190.07 7.751v-.25a3.46 3.46 0 0 1 3.46-3.48H209a3.46 3.46 0 0 1 3.46 3.46v.25h1.84v5.29h14.95a1.62 1.62 0 0 1 1.62 1.61v4.64a1.62 1.62 0 0 1-1.62 1.61h-14.94v5.29h-1.84v.25a3.46 3.46 0 0 1-3.47 3.48h-15.47a3.46 3.46 0 0 1-3.46-3.46v-.25h-4.3V7.751Z"
        fill={SVGstyles.frontBumperFill.color}
        stroke={SVGstyles.frontBumperStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="polygon6"
        d="M295.52 305.3H265.5v-2.41h-56.29v8.71h86.31z"
        transform="translate(0 -139.979)"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
			/>
      <Path
        id="polygon7"
        d="M24.27 305.3H54.3v-2.41h56.29v8.71H24.27Z"
        transform="translate(0 -139.979)"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
			/>
      <Path
        id="rect7"
        d="M133.75 10.731h52.02v12.48h-52.02z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect8"
        d="M17.818 26.466h288.237v616.283H17.818Z"
        fill="none"
        stroke={SVGstyles.frameStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
    />
      <Path
        id="rect13"
        d="M18.3 167.241h287.97v10.4H18.3Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
      />
      <Path
        id="rect16"
        d="M18.3 126.201h287.97v10.4H18.3Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
      />
      <Path
        id="rect17"
        d="M18.3 65.861h287.97v10.4H18.3Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
      />
      <Path
        id="rect18"
        d="M18.3 320.181h287.97v10.4H18.3Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
      />
      <Path
        id="rect23"
        d="M96.708 36.975h17.733v600.611H96.708Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect24"
        d="M204.797 36.984h17.715V640.88h-17.715z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect25"
        d="M131.99.431h55.25v16.43h-55.25z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
      />
      <Path
        id="rect26"
        d="M114.31 41.021h90.62v8.22h-90.62z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect27"
        d="M114.31 101.951h90.62v8.22h-90.62z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect28"
        d="M-101.951 120.35h52.71v8.22h-52.71z"
        transform="rotate(-90)"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
			/>
      <Path
        id="rect29"
        d="M-101.951 190.67h52.71v8.22h-52.71z"
        transform="rotate(-90)"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
			/>
      <Path
        id="rect30"
        d="M40.47 16.861h241.65v24.17H40.47Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="path30"
        d="M25.36 16.861a9.06 9.06 0 0 0-9.06 9.05v15.11h24.17v-24.16z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="path31"
        d="M306.28 25.911a9 9 0 0 0-9-9h-15.16v24.11h24.16z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect34"
        d="M16.3 441.141h24.22v28.19H16.3Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
      />
      <Path
        id="rect35"
        d="M40.52 441.141h239.53v28.19H40.52Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect36"
        d="M280.05 441.141h24.22v28.19h-24.22z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect37"
        d="M16.3 582.891h24.22v28.19H16.3Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
      />
      <Path
        id="rect38"
        d="M40.52 582.891h239.53v28.19H40.52Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect39"
        d="M280.05 582.891h24.22v28.19h-24.22z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect43"
        d="M96.85 611.082h125.52v40.23H96.85Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="path43"
        d="M4.92 627.351v7.67a16.26 16.26 0 0 0 16.26 16.27h276.87a16.27 16.27 0 0 0 16.27-16.27v-7.69z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect44"
        d="M4.92 619.491h309.4v7.87H4.92Z"
        fill={SVGstyles.frameSupportFill.color}
        stroke={SVGstyles.frameSupportStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
      />
      <Path
        id="rect238"
        d="M14.77 388.661h286.52v10.65H14.77Z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="path239"
        d="m192 384.531-8.88-4.27a4.38 4.38 0 0 0-1.88-.43h-46.46a4.31 4.31 0 0 0-1.87.43l-8.91 4.27a4.38 4.38 0 0 1-1.88.43H122a4.32 4.32 0 0 0-4.32 4.32v9.42a4.33 4.33 0 0 0 4.32 4.32h.15a4.37 4.37 0 0 1 1.88.42l8.88 4.28a4.3 4.3 0 0 0 1.87.42h46.49a4.37 4.37 0 0 0 1.88-.42l8.88-4.28a4.3 4.3 0 0 1 1.87-.42h.15a4.32 4.32 0 0 0 4.32-4.32v-9.42a4.31 4.31 0 0 0-4.32-4.32h-.15a4.31 4.31 0 0 1-1.9-.43z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <G id="Axle2Tire1" transform="matrix(1.65111 0 0 1 0 -631.979)"
          {...(
            axle2Tire1Alert === TIRE_ALERT_AMBER || axle2Tire1Alert === TIRE_ALERT_RED
          ? {
          stroke: axle2Tire1Alert === TIRE_ALERT_RED ? SVGstyles.tireRedAlertStroke.color : SVGstyles.tireAmberAlertStroke.color,
          strokeWidth: "2",
          opacity: "1",
          }
          : {})}>
        <Rect
          id="rect239"
          width={37.55}
          height={117.81}
          x={0}
          y={961.91}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
			  />
        <Rect
          id="rect240"
          width={37.55}
          height={117.81}
          x={0}
          y={961.91}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
			  />
        <Path
          id="path240"
          d="M17.94 1003.67a4.13 4.13 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .89-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path241"
          d="M17.94 1013.92a4.13 4.13 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path242"
          d="m.9 971.46 6-5.74a4.14 4.14 0 0 0 1.29-3v-.82H8a7.86 7.86 0 0 0-8 7.67v1.52a.53.53 0 0 0 .9.37z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path243"
          d="M17.94 1045.52a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.9.36v4.16a4.15 4.15 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .89-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path244"
          d="M17.94 1034.84a4.1 4.1 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path245"
          d="M17.94 982.74a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path246"
          d="m.9 981.71 6-5.75a4.1 4.1 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.74a4.18 4.18 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.37z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path247"
          d="M17.94 993a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.9.36v4.16a4.15 4.15 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .89-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path248"
          d="M17.94 961.91h-5.53l4.64 4.42a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path249"
          d="M10.64 1057.72a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path250"
          d="M17.94 972.06a4.1 4.1 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path251"
          d="M17.94 1024.59a4.1 4.1 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path252"
          d="M27.8 1026.47a.52.52 0 0 0-.89-.35l-6 5.74a4.11 4.11 0 0 0-1.3 3v4.14a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path253"
          d="M27.8 1037.15a.53.53 0 0 0-.89-.36l-6 5.75a4.11 4.11 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.74a4.14 4.14 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path254"
          d="M27.8 1016.22a.52.52 0 0 0-.89-.35l-6 5.74a4.11 4.11 0 0 0-1.3 3v4.17a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path255"
          d="M17.94 1055.77a4.14 4.14 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.36v4.16a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .89-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path256"
          d="m26.91 1057.72-6 5.74a4.14 4.14 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.35l6-5.74a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.34z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path257"
          d="M6.91 1070.35a4.14 4.14 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.75a4.14 4.14 0 0 0-1.29 3v.47a7.38 7.38 0 0 0 1.09 3.86z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path258"
          d="M27.8 974.37a.53.53 0 0 0-.89-.36l-6 5.75a4.11 4.11 0 0 0-1.3 3v4.17a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path259"
          d="M27.8 963.69a.52.52 0 0 0-.89-.35l-6 5.74a4.11 4.11 0 0 0-1.3 3v4.17a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path260"
          d="M27.8 984.62a.53.53 0 0 0-.89-.36l-6 5.75a4.11 4.11 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.74a4.14 4.14 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path261"
          d="M27.8 1005.54a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.35l6-5.74a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path262"
          d="M27.8 995.29a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path263"
          d="M27.8 1047.4a.53.53 0 0 0-.89-.36l-6 5.74a4.15 4.15 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path264"
          d="M30.24 1031.24a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .9-.36V1040a4.14 4.14 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path265"
          d="M19.6 966a.53.53 0 0 0 .9.35l4.63-4.42H19.6z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path266"
          d="m.9 992.38 6-5.74a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74a4.17 4.17 0 0 0-1.29 3V992a.53.53 0 0 0 .89.38z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path267"
          d="M30.24 1062.84a.53.53 0 0 0-.9.36v4.16a4.15 4.15 0 0 0 1.3 3l5.81 5.55a7.3 7.3 0 0 0 1.1-3.86v-.47a4.11 4.11 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path268"
          d="M30.24 1010.31a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.36V1019a4.11 4.11 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path269"
          d="M30.24 1052.17a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.17a4.11 4.11 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path270"
          d="M30.24 1041.92a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.16a4.14 4.14 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path271"
          d="M30.24 968.46a.53.53 0 0 0-.9.36V973a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .9-.36v-4.16a4.15 4.15 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path272"
          d="M29.51 961.91h-.17v.82a4.15 4.15 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.36v-1.52a7.86 7.86 0 0 0-8.03-7.68z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path273"
          d="M30.24 1000.06a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.17a4.11 4.11 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path274"
          d="M30.24 979.14a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.16a4.14 4.14 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path275"
          d="M30.24 989.39a.53.53 0 0 0-.9.35v4.17a4.13 4.13 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.16a4.14 4.14 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path276"
          d="M30.24 1021a.53.53 0 0 0-.9.36v4.16a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .9-.36v-4.16a4.15 4.15 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path277"
          d="m.9 1044.49 6-5.75a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74A4.17 4.17 0 0 0 0 1040v4.16a.53.53 0 0 0 .9.33z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path278"
          d="m.9 1034.24 6-5.75a4.1 4.1 0 0 0 1.29-3v-4.16a.52.52 0 0 0-.89-.36l-6 5.74a4.17 4.17 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.37z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path279"
          d="m.9 1023.56 6-5.74a4.13 4.13 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.75A4.14 4.14 0 0 0 0 1019v4.16a.53.53 0 0 0 .9.4z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path280"
          d="m35 1077.64-4.76-4.55a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 .58 2.09 8.17 8.17 0 0 0 5.08-2.06z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path281"
          d="m.9 1013.31 6-5.74a4.13 4.13 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.75a4.14 4.14 0 0 0-1.29 3v4.2a.53.53 0 0 0 .89.31z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path282"
          d="m.9 1002.63 6-5.74a4.12 4.12 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74a4.16 4.16 0 0 0-1.29 3v4.17a.53.53 0 0 0 .89.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path283"
          d="M17.94 1076.7a4.13 4.13 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l4.44 4.24h2.46z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path284"
          d="M26.51 1075.47a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.3 3v3h2.47z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path285"
          d="m.9 1055.16 6-5.74a4.13 4.13 0 0 0 1.29-3v-4.16a.52.52 0 0 0-.89-.35l-6 5.74a4.16 4.16 0 0 0-1.29 3v4.17a.53.53 0 0 0 .89.34z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path286"
          d="m.9 1065.41 6-5.74a4.13 4.13 0 0 0 1.29-3v-4.16a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.17a.53.53 0 0 0 .89.34z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path287"
          d="M8.2 1077.61v-4.16a.53.53 0 0 0-.89-.36l-4.76 4.55a8.15 8.15 0 0 0 5.07 2.06 4 4 0 0 0 .58-2.09z"
					fill={SVGstyles.tireTreadFill.color}
				/>
      </G>
      <G id="Axle2Tire2" transform="matrix(1.65066 0 0 1 -207.958 -631.979)"
          {...(
            axle2Tire2Alert === TIRE_ALERT_AMBER || axle2Tire2Alert === TIRE_ALERT_RED
          ? {
          stroke: axle2Tire2Alert === TIRE_ALERT_RED ? SVGstyles.tireRedAlertStroke.color : SVGstyles.tireAmberAlertStroke.color,
          strokeWidth: "2",
          opacity: "1",
          }
          : {})}>
        <Rect
          id="rect383"
          width={37.55}
          height={117.81}
          x={281.69}
          y={961.91}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
			  />
        <Rect
          id="rect384"
          width={37.55}
          height={117.81}
          x={281.69}
          y={961.91}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
        />
        <Path
          id="path384"
          d="M299.63 1003.67a4.13 4.13 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .9-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path385"
          d="M299.63 1013.92a4.13 4.13 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path386"
          d="m282.58 971.46 6-5.74a4.18 4.18 0 0 0 1.29-3v-.82h-.16a7.86 7.86 0 0 0-8 7.67v1.52a.53.53 0 0 0 .87.37z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path387"
          d="M299.63 1045.52a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.89.36v4.16a4.14 4.14 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path388"
          d="M299.63 1034.84a4.1 4.1 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path389"
          d="M299.63 982.74a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.89.36v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path390"
          d="m282.58 981.71 6-5.75a4.14 4.14 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.16a.53.53 0 0 0 .9.37z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path391"
          d="M299.63 993a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.89.36v4.16a4.14 4.14 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path392"
          d="M299.63 961.91h-5.53l4.63 4.42a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path393"
          d="M292.32 1057.72a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path394"
          d="M299.63 972.06a4.1 4.1 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path395"
          d="M299.63 1024.59a4.1 4.1 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path396"
          d="M309.49 1026.47a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.14a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path397"
          d="M309.49 1037.15a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.74a4.14 4.14 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path398"
          d="M309.49 1016.22a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path399"
          d="M299.63 1055.77a4.14 4.14 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.89.36v4.16a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .9-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path400"
          d="m308.59 1057.72-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.52.52 0 0 0 .89.35l6-5.74a4.1 4.1 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.89-.34z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path401"
          d="M288.6 1070.35a4.18 4.18 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v.47a7.38 7.38 0 0 0 1.09 3.86z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path402"
          d="M309.49 974.37a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path403"
          d="M309.49 963.69a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path404"
          d="M309.49 984.62a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.74a4.14 4.14 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path405"
          d="M309.49 1005.54a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.52.52 0 0 0 .89.35l6-5.74a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path406"
          d="M309.49 995.29a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path407"
          d="M309.49 1047.4a.53.53 0 0 0-.9-.36l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path408"
          d="M311.92 1031.24a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .89-.36V1040a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path409"
          d="M301.29 966a.52.52 0 0 0 .89.35l4.64-4.42h-5.53z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path410"
          d="m282.58 992.38 6-5.74a4.14 4.14 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3V992a.52.52 0 0 0 .9.38z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path411"
          d="M311.92 1062.84a.53.53 0 0 0-.89.36v4.16a4.14 4.14 0 0 0 1.29 3l5.82 5.55a7.38 7.38 0 0 0 1.09-3.86v-.47a4.1 4.1 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path412"
          d="M311.92 1010.31a.53.53 0 0 0-.89.36v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.36V1019a4.1 4.1 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path413"
          d="M311.92 1052.17a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.17a4.1 4.1 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path414"
          d="M311.92 1041.92a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path415"
          d="M311.92 968.46a.53.53 0 0 0-.89.36V973a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .89-.36v-4.16a4.14 4.14 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path416"
          d="M311.19 961.91H311v.82a4.14 4.14 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .89-.36v-1.52a7.86 7.86 0 0 0-7.99-7.68z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path417"
          d="M311.92 1000.06a.53.53 0 0 0-.89.36v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.17a4.1 4.1 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path418"
          d="M311.92 979.14a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path419"
          d="M311.92 989.39a.52.52 0 0 0-.89.35v4.17a4.12 4.12 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path420"
          d="M311.92 1021a.52.52 0 0 0-.89.36v4.16a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .89-.36v-4.16a4.14 4.14 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path421"
          d="m282.58 1044.49 6-5.75a4.14 4.14 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35L283 1037a4.13 4.13 0 0 0-1.29 3v4.16a.53.53 0 0 0 .87.33z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path422"
          d="m282.58 1034.24 6-5.75a4.14 4.14 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.53.53 0 0 0 .9.37z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path423"
          d="m282.58 1023.56 6-5.74a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.16a.52.52 0 0 0 .9.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path424"
          d="m316.69 1077.64-4.77-4.55a.53.53 0 0 0-.89.36v4.16a4 4 0 0 0 .58 2.09 8.2 8.2 0 0 0 5.08-2.06z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path425"
          d="m282.58 1013.31 6-5.74a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.2a.52.52 0 0 0 .9.31z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path426"
          d="m282.58 1002.63 6-5.74a4.16 4.16 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35l-6 5.74a4.12 4.12 0 0 0-1.29 3v4.17a.52.52 0 0 0 .9.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path427"
          d="M299.63 1076.7a4.13 4.13 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l4.45 4.24h2.46z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path428"
          d="M308.2 1075.47a4.1 4.1 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v3h2.46z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path429"
          d="m282.58 1055.16 6-5.74a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.35l-6 5.74a4.12 4.12 0 0 0-1.29 3v4.17a.52.52 0 0 0 .9.34z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path430"
          d="m282.58 1065.41 6-5.74a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .9.34z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path431"
          d="M289.89 1077.61v-4.16a.53.53 0 0 0-.9-.36l-4.76 4.55a8.17 8.17 0 0 0 5.08 2.06 4 4 0 0 0 .58-2.09z"
					fill={SVGstyles.tireTreadFill.color}
				/>
      </G>
      <Path
        id="path433"
        d="M95.83 373.021h15.47v41.85H95.83a6.3 6.3 0 0 1-6.3-6.3v-29.21a6.3 6.3 0 0 1 6.3-6.34z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="path434"
        d="M223.38 414.951h-15.47v-41.85h15.47a6.3 6.3 0 0 1 6.3 6.3v29.21a6.3 6.3 0 0 1-6.3 6.3z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="rect238-9"
        d="M14.77 254.911h286.52v10.65H14.77Z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
    />
      <Path
        id="path239-6"
        d="m192 250.781-8.88-4.27a4.38 4.38 0 0 0-1.88-.43h-46.46a4.31 4.31 0 0 0-1.87.43l-8.91 4.27a4.38 4.38 0 0 1-1.88.43H122a4.32 4.32 0 0 0-4.32 4.32v9.42a4.33 4.33 0 0 0 4.32 4.32h.15a4.37 4.37 0 0 1 1.88.42l8.88 4.28a4.3 4.3 0 0 0 1.87.42h46.49a4.37 4.37 0 0 0 1.88-.42l8.88-4.28a4.3 4.3 0 0 1 1.87-.42h.15a4.32 4.32 0 0 0 4.32-4.32v-9.42a4.31 4.31 0 0 0-4.32-4.32h-.15a4.31 4.31 0 0 1-1.9-.43z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
    />
      <G id="Axle1Tire1" transform="matrix(1.65111 0 0 1 0 -631.979)"
          {...(
            axle1Tire1Alert === TIRE_ALERT_AMBER || axle1Tire1Alert === TIRE_ALERT_RED
          ? {
          stroke: axle1Tire1Alert === TIRE_ALERT_RED ? SVGstyles.tireRedAlertStroke.color : SVGstyles.tireAmberAlertStroke.color,
          strokeWidth: "2",
          opacity: "1",
          }
          : {})}>
        <Rect
          id="rect239-5"
          width={37.55}
          height={117.81}
          x={0}
          y={828.16}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
			  />
        <Rect
          id="rect240-5"
          width={37.55}
          height={117.81}
          x={0}
          y={828.16}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
			  />
        <Path
          id="path240-4"
          d="M17.94 869.92a4.13 4.13 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .89-.36z"
          fill={SVGstyles.tireTreadFill.color}
			  />
        <Path
          id="path241-9"
          d="M17.94 880.17a4.13 4.13 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path242-2"
          d="m.9 837.71 6-5.74a4.14 4.14 0 0 0 1.29-3v-.82H8a7.86 7.86 0 0 0-8 7.67v1.52a.53.53 0 0 0 .9.37z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path243-2"
          d="M17.94 911.77a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.9.36v4.16a4.15 4.15 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .89-.36z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path244-4"
          d="M17.94 901.09a4.1 4.1 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path245-9"
          d="M17.94 848.99a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path246-4"
          d="m.9 847.96 6-5.75a4.1 4.1 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.74a4.18 4.18 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.37z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path247-2"
          d="M17.94 859.25a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.9.36v4.16a4.15 4.15 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .89-.36z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path248-1"
          d="M17.94 828.16h-5.53l4.64 4.42a.52.52 0 0 0 .89-.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path249-6"
          d="M10.64 923.97a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path250-3"
          d="M17.94 838.31a4.1 4.1 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path251-7"
          d="M17.94 890.84a4.1 4.1 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35Z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path252-8"
          d="M27.8 892.72a.52.52 0 0 0-.89-.35l-6 5.74a4.11 4.11 0 0 0-1.3 3v4.14a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path253-2"
          d="M27.8 903.4a.53.53 0 0 0-.89-.36l-6 5.75a4.11 4.11 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.74a4.14 4.14 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path254-3"
          d="M27.8 882.47a.52.52 0 0 0-.89-.35l-6 5.74a4.11 4.11 0 0 0-1.3 3v4.17a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path255-9"
          d="M17.94 922.02a4.14 4.14 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.36v4.16a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .89-.36z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path256-0"
          d="m26.91 923.97-6 5.74a4.14 4.14 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.35l6-5.74a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.34z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path257-4"
          d="M6.91 936.6a4.14 4.14 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.75a4.14 4.14 0 0 0-1.29 3v.47a7.38 7.38 0 0 0 1.09 3.86z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path258-8"
          d="M27.8 840.62a.53.53 0 0 0-.89-.36l-6 5.75a4.11 4.11 0 0 0-1.3 3v4.17a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path259-4"
          d="M27.8 829.94a.52.52 0 0 0-.89-.35l-6 5.74a4.11 4.11 0 0 0-1.3 3v4.17a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path260-4"
          d="M27.8 850.87a.53.53 0 0 0-.89-.36l-6 5.75a4.11 4.11 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.74a4.14 4.14 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path261-3"
          d="M27.8 871.79a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.35l6-5.74a4.1 4.1 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path262-4"
          d="M27.8 861.54a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path263-7"
          d="M27.8 913.65a.53.53 0 0 0-.89-.36l-6 5.74a4.15 4.15 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path264-2"
          d="M30.24 897.49a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .9-.36v-4.15a4.14 4.14 0 0 0-1.3-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path265-4"
          d="M19.6 832.25a.53.53 0 0 0 .9.35l4.63-4.42H19.6Z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path266-2"
          d="m.9 858.63 6-5.74a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74a4.17 4.17 0 0 0-1.29 3v4.14a.53.53 0 0 0 .89.38z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path267-2"
          d="M30.24 929.09a.53.53 0 0 0-.9.36v4.16a4.15 4.15 0 0 0 1.3 3l5.81 5.55a7.3 7.3 0 0 0 1.1-3.86v-.47a4.11 4.11 0 0 0-1.3-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path268-5"
          d="M30.24 876.56a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.36v-4.21a4.11 4.11 0 0 0-1.3-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path269-3"
          d="M30.24 918.42a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.17a4.11 4.11 0 0 0-1.3-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path270-2"
          d="M30.24 908.17a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.16a4.14 4.14 0 0 0-1.3-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path271-8"
          d="M30.24 834.71a.53.53 0 0 0-.9.36v4.18a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .9-.36v-4.16a4.15 4.15 0 0 0-1.3-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path272-0"
          d="M29.51 828.16h-.17v.82a4.15 4.15 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.36v-1.52a7.86 7.86 0 0 0-8.03-7.68z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path273-7"
          d="M30.24 866.31a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.17a4.11 4.11 0 0 0-1.3-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path274-8"
          d="M30.24 845.39a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.16a4.14 4.14 0 0 0-1.3-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path275-6"
          d="M30.24 855.64a.53.53 0 0 0-.9.35v4.17a4.13 4.13 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.16a4.14 4.14 0 0 0-1.3-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path276-6"
          d="M30.24 887.25a.53.53 0 0 0-.9.36v4.16a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .9-.36V896a4.15 4.15 0 0 0-1.3-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path277-5"
          d="m.9 910.74 6-5.75a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74a4.17 4.17 0 0 0-1.3 3.04v4.16a.53.53 0 0 0 .9.33z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path278-4"
          d="m.9 900.49 6-5.75a4.1 4.1 0 0 0 1.29-3v-4.16a.52.52 0 0 0-.89-.36l-6 5.74a4.17 4.17 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.37z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path279-5"
          d="m.9 889.81 6-5.74a4.13 4.13 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.75a4.14 4.14 0 0 0-1.3 2.95v4.16a.53.53 0 0 0 .9.4z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path280-2"
          d="m35 943.89-4.76-4.55a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 .58 2.09 8.17 8.17 0 0 0 5.08-2.06z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path281-6"
          d="m.9 879.56 6-5.74a4.13 4.13 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.75a4.14 4.14 0 0 0-1.29 3v4.2a.53.53 0 0 0 .89.31z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path282-4"
          d="m.9 868.88 6-5.74a4.12 4.12 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74a4.16 4.16 0 0 0-1.29 3v4.17a.53.53 0 0 0 .89.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path283-0"
          d="M17.94 942.95a4.13 4.13 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l4.44 4.24h2.46z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path284-0"
          d="M26.51 941.72a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.3 3v3h2.47z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path285-6"
          d="m.9 921.41 6-5.74a4.13 4.13 0 0 0 1.29-3v-4.16a.52.52 0 0 0-.89-.35l-6 5.74a4.16 4.16 0 0 0-1.29 3v4.17a.53.53 0 0 0 .89.34z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path286-4"
          d="m.9 931.66 6-5.74a4.13 4.13 0 0 0 1.29-3v-4.16a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.17a.53.53 0 0 0 .89.34z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path287-4"
          d="M8.2 943.86v-4.16a.53.53 0 0 0-.89-.36l-4.76 4.55a8.15 8.15 0 0 0 5.07 2.06 4 4 0 0 0 .58-2.09z"
          fill={SVGstyles.tireTreadFill.color}
				/>
      </G>
      <G id="Axle1Tire2" transform="matrix(1.65066 0 0 1 -207.958 -631.979)"
          {...(
            axle1Tire2Alert === TIRE_ALERT_AMBER || axle1Tire2Alert === TIRE_ALERT_RED
          ? {
          stroke: axle1Tire2Alert === TIRE_ALERT_RED ? SVGstyles.tireRedAlertStroke.color : SVGstyles.tireAmberAlertStroke.color,
          strokeWidth: "2",
          opacity: "1",
          }
          : {})}>
        <Rect
          id="rect383-6"
          width={37.55}
          height={117.81}
          x={281.69}
          y={828.16}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
				/>
        <Rect
          id="rect384-8"
          width={37.55}
          height={117.81}
          x={281.69}
          y={828.16}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
				/>
        <Path
          id="path384-0"
          d="M299.63 869.92a4.13 4.13 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .9-.36z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path385-8"
          d="M299.63 880.17a4.13 4.13 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path386-5"
          d="m282.58 837.71 6-5.74a4.18 4.18 0 0 0 1.29-3v-.82h-.16a7.86 7.86 0 0 0-8 7.67v1.52a.53.53 0 0 0 .87.37z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path387-3"
          d="M299.63 911.77a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.89.36v4.16a4.14 4.14 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.36z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path388-5"
          d="M299.63 901.09a4.1 4.1 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path389-5"
          d="M299.63 848.99a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.89.36v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path390-9"
          d="m282.58 847.96 6-5.75a4.14 4.14 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.16a.53.53 0 0 0 .9.37z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path391-5"
          d="M299.63 859.25a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.89.36v4.16a4.14 4.14 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.36z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path392-6"
          d="M299.63 828.16h-5.53l4.63 4.42a.53.53 0 0 0 .9-.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path393-8"
          d="M292.32 923.97a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path394-1"
          d="M299.63 838.31a4.1 4.1 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path395-0"
          d="M299.63 890.84a4.1 4.1 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path396-9"
          d="M309.49 892.72a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.14a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path397-8"
          d="M309.49 903.4a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.74a4.14 4.14 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path398-6"
          d="M309.49 882.47a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path399-2"
          d="M299.63 922.02a4.14 4.14 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.89.36v4.16a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .9-.36z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path400-1"
          d="m308.59 923.97-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.52.52 0 0 0 .89.35l6-5.74a4.1 4.1 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.89-.34z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path401-4"
          d="M288.6 936.6a4.18 4.18 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v.47a7.38 7.38 0 0 0 1.09 3.86z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path402-7"
          d="M309.49 840.62a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path403-9"
          d="M309.49 829.94a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path404-2"
          d="M309.49 850.87a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.74a4.14 4.14 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path405-6"
          d="M309.49 871.79a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.52.52 0 0 0 .89.35l6-5.74a4.1 4.1 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path406-5"
          d="M309.49 861.54a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path407-8"
          d="M309.49 913.65a.53.53 0 0 0-.9-.36l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path408-7"
          d="M311.92 897.49a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .89-.36v-4.15a4.13 4.13 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path409-8"
          d="M301.29 832.25a.52.52 0 0 0 .89.35l4.64-4.42h-5.53z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path410-5"
          d="m282.58 858.63 6-5.74a4.14 4.14 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.14a.52.52 0 0 0 .9.38z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path411-7"
          d="M311.92 929.09a.53.53 0 0 0-.89.36v4.16a4.14 4.14 0 0 0 1.29 3l5.82 5.55a7.38 7.38 0 0 0 1.09-3.86v-.47a4.1 4.1 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path412-8"
          d="M311.92 876.56a.53.53 0 0 0-.89.36v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.36v-4.21a4.1 4.1 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path413-2"
          d="M311.92 918.42a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.17a4.1 4.1 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path414-4"
          d="M311.92 908.17a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path415-9"
          d="M311.92 834.71a.53.53 0 0 0-.89.36v4.18a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .89-.36v-4.16a4.14 4.14 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path416-3"
          d="M311.19 828.16H311v.82a4.14 4.14 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .89-.36v-1.52a7.86 7.86 0 0 0-7.99-7.68z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path417-2"
          d="M311.92 866.31a.53.53 0 0 0-.89.36v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.17a4.1 4.1 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path418-6"
          d="M311.92 845.39a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path419-4"
          d="M311.92 855.64a.52.52 0 0 0-.89.35v4.17a4.12 4.12 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path420-4"
          d="M311.92 887.25a.52.52 0 0 0-.89.36v4.16a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .89-.36V896a4.14 4.14 0 0 0-1.29-3z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path421-6"
          d="m282.58 910.74 6-5.75a4.14 4.14 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35l-5.97 5.78a4.13 4.13 0 0 0-1.29 3v4.16a.53.53 0 0 0 .87.33z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path422-0"
          d="m282.58 900.49 6-5.75a4.14 4.14 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.53.53 0 0 0 .9.37z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path423-3"
          d="m282.58 889.81 6-5.74a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.16a.52.52 0 0 0 .9.35z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path424-1"
          d="m316.69 943.89-4.77-4.55a.53.53 0 0 0-.89.36v4.16a4 4 0 0 0 .58 2.09 8.2 8.2 0 0 0 5.08-2.06z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path425-1"
          d="m282.58 879.56 6-5.74a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.2a.52.52 0 0 0 .9.31z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path426-4"
          d="m282.58 868.88 6-5.74a4.16 4.16 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35l-6 5.74a4.12 4.12 0 0 0-1.29 3v4.17a.52.52 0 0 0 .9.35z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path427-2"
          d="M299.63 942.95a4.13 4.13 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l4.45 4.24h2.46z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path428-0"
          d="M308.2 941.72a4.1 4.1 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v3h2.46z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path429-7"
          d="m282.58 921.41 6-5.74a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.35l-6 5.74a4.12 4.12 0 0 0-1.29 3v4.17a.52.52 0 0 0 .9.34z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path430-7"
          d="m282.58 931.66 6-5.74a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .9.34z"
          fill={SVGstyles.tireTreadFill.color}
        />
        <Path
          id="path431-1"
          d="M289.89 943.86v-4.16a.53.53 0 0 0-.9-.36l-4.76 4.55a8.17 8.17 0 0 0 5.08 2.06 4 4 0 0 0 .58-2.09z"
          fill={SVGstyles.tireTreadFill.color}
      />
      </G>
      <Path
        id="path433-8"
        d="M95.83 239.271h15.47v41.85H95.83a6.3 6.3 0 0 1-6.3-6.3v-29.21a6.3 6.3 0 0 1 6.3-6.34z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
      />
      <Path
        id="path434-4"
        d="M223.38 281.201h-15.47v-41.85h15.47a6.3 6.3 0 0 1 6.3 6.3v29.21a6.3 6.3 0 0 1-6.3 6.3z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
      />
      <Use
        xlinkHref="#rect18"
        id="use635"
        x={0}
        y={0}
        transform="translate(0 200)"
      />
    </G>

    <G id="TrailerAxle12AlertIcons">

      {axle1Tire1Alert === TIRE_ALERT_RED && (
      <G
        id="AlertAxle1Tire1"
        opacity="1"
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="0"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray="none"
        transform="translate(-19.25 202.916) scale(1.11015)"
      >
        <Path
          id="path1-9"
          strokeLinecap="round"
          d="M45 66.364a5.565 5.565 0 0 1-5.56-5.321l-5.132-49.519C33.841 5.304 38.762 0 45 0s11.159 5.304 10.692 11.524L50.56 61.043A5.565 5.565 0 0 1 45 66.364z"
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Circle
          id="circle1"
          cx={44.998}
          cy={81.128}
          r={8.868}
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path2-0"
          strokeLinecap="round"
          d="M45 0c-1.045 0-2.048.161-3 .438 4.73 1.377 8.08 5.908 7.692 11.086L44.56 61.043a5.558 5.558 0 0 1-2.56 4.44 5.534 5.534 0 0 0 3 .881 5.565 5.565 0 0 0 5.56-5.321l5.132-49.519C56.159 5.304 51.238 0 45 0Z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path3"
          strokeLinecap="round"
          d="M45 72.264a8.848 8.848 0 0 0-3 .531c3.419 1.231 5.868 4.493 5.868 8.336S45.419 88.237 42 89.469A8.848 8.848 0 0 0 45 90a8.868 8.868 0 0 0 8.868-8.868A8.868 8.868 0 0 0 45 72.264z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
      </G>
      )}

      {axle1Tire2Alert === TIRE_ALERT_RED && (
      <G
        id="AlertAxle1Tire2"
        opacity="1"
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="0"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray="none"
        transform="translate(238.75 202.916) scale(1.11015)"
      >
        <Path
          id="path6"
          strokeLinecap="round"
          d="M45 66.364a5.565 5.565 0 0 1-5.56-5.321l-5.132-49.519C33.841 5.304 38.762 0 45 0s11.159 5.304 10.692 11.524L50.56 61.043A5.565 5.565 0 0 1 45 66.364z"
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Circle
          id="circle6"
          cx={44.998}
          cy={81.128}
          r={8.868}
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path7"
          strokeLinecap="round"
          d="M45 0c-1.045 0-2.048.161-3 .438 4.73 1.377 8.08 5.908 7.692 11.086L44.56 61.043a5.558 5.558 0 0 1-2.56 4.44 5.534 5.534 0 0 0 3 .881 5.565 5.565 0 0 0 5.56-5.321l5.132-49.519C56.159 5.304 51.238 0 45 0Z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path8"
          strokeLinecap="round"
          d="M45 72.264a8.848 8.848 0 0 0-3 .531c3.419 1.231 5.868 4.493 5.868 8.336S45.419 88.237 42 89.469A8.848 8.848 0 0 0 45 90a8.868 8.868 0 0 0 8.868-8.868A8.868 8.868 0 0 0 45 72.264z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
      </G>
      )}

      {axle2Tire1Alert === TIRE_ALERT_RED && (
      <G
        id="AlertAxle2Tire1"
        opacity="1"
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="0"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray="none"
        transform="translate(-19.263 336.257) scale(1.11015)"
      >
        <Path
          id="path9"
          strokeLinecap="round"
          d="M45 66.364a5.565 5.565 0 0 1-5.56-5.321l-5.132-49.519C33.841 5.304 38.762 0 45 0s11.159 5.304 10.692 11.524L50.56 61.043A5.565 5.565 0 0 1 45 66.364z"
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Circle
          id="circle9"
          cx={44.998}
          cy={81.128}
          r={8.868}
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path10"
          strokeLinecap="round"
          d="M45 0c-1.045 0-2.048.161-3 .438 4.73 1.377 8.08 5.908 7.692 11.086L44.56 61.043a5.558 5.558 0 0 1-2.56 4.44 5.534 5.534 0 0 0 3 .881 5.565 5.565 0 0 0 5.56-5.321l5.132-49.519C56.159 5.304 51.238 0 45 0Z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path11"
          strokeLinecap="round"
          d="M45 72.264a8.848 8.848 0 0 0-3 .531c3.419 1.231 5.868 4.493 5.868 8.336S45.419 88.237 42 89.469A8.848 8.848 0 0 0 45 90a8.868 8.868 0 0 0 8.868-8.868A8.868 8.868 0 0 0 45 72.264z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
      </G>
      )}

      {axle2Tire2Alert === TIRE_ALERT_RED && (
      <G
        id="AlertAxle2Tire2"
        opacity="1"
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="0"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray="none"
        transform="translate(238.737 336.257) scale(1.11015)"
      >
        <Path
          id="path12"
          strokeLinecap="round"
          d="M45 66.364a5.565 5.565 0 0 1-5.56-5.321l-5.132-49.519C33.841 5.304 38.762 0 45 0s11.159 5.304 10.692 11.524L50.56 61.043A5.565 5.565 0 0 1 45 66.364z"
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Circle
          id="circle12"
          cx={44.998}
          cy={81.128}
          r={8.868}
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path13"
          strokeLinecap="round"
          d="M45 0c-1.045 0-2.048.161-3 .438 4.73 1.377 8.08 5.908 7.692 11.086L44.56 61.043a5.558 5.558 0 0 1-2.56 4.44 5.534 5.534 0 0 0 3 .881 5.565 5.565 0 0 0 5.56-5.321l5.132-49.519C56.159 5.304 51.238 0 45 0Z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path14"
          strokeLinecap="round"
          d="M45 72.264a8.848 8.848 0 0 0-3 .531c3.419 1.231 5.868 4.493 5.868 8.336S45.419 88.237 42 89.469A8.848 8.848 0 0 0 45 90a8.868 8.868 0 0 0 8.868-8.868A8.868 8.868 0 0 0 45 72.264z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
      </G>
      )}

    </G>
    <G id="TrailerAxle12AmberIcons">
      {axle1Tire1Alert === TIRE_ALERT_AMBER && (
      <G
        id="AmberAxle1Tire1"
        fill={SVGstyles.tireAmberAlertIconFill.color}
        transform="matrix(1.46988 0 0 1.37548 -9.615 213.372)"
      >
        <Path
          id="path1-1"
          d="M25.129 53.512c8.25 0 14.039-4.477 17.156-13.266l4.125-11.602c1.031-2.93.094-5.343-2.344-6.234-2.18-.797-4.336.14-5.367 2.555l-1.523 3.75c-.047.094-.117.164-.211.164-.117 0-.164-.094-.164-.211V9.871c0-2.742-1.711-4.453-4.336-4.453-.961 0-1.828.328-2.485.938-.304-2.391-1.851-3.868-4.171-3.868-2.274 0-3.868 1.524-4.22 3.82-.585-.585-1.429-.89-2.273-.89-2.437 0-4.054 1.688-4.054 4.29v2.6c-.633-.656-1.57-1.007-2.578-1.007-2.438 0-4.125 1.805-4.125 4.43v20.132c0 10.969 6.656 17.649 16.57 17.649zm-.117-3.258c-8.297 0-13.36-5.32-13.36-14.766v-19.43c0-.984.633-1.687 1.618-1.687.96 0 1.664.703 1.664 1.688v11.976c0 .867.703 1.453 1.453 1.453.797 0 1.523-.586 1.523-1.453V10.13c0-1.008.633-1.688 1.594-1.688.984 0 1.664.68 1.664 1.688v16.71c0 .868.703 1.454 1.476 1.454.797 0 1.524-.586 1.524-1.453V7.223c0-.985.656-1.711 1.64-1.711.938 0 1.618.726 1.618 1.71V26.84c0 .82.656 1.453 1.476 1.453.797 0 1.5-.633 1.5-1.453V10.129c0-1.008.68-1.688 1.641-1.688.984 0 1.64.68 1.64 1.688V33.19c0 1.078.68 1.852 1.665 1.852.843 0 1.547-.375 2.086-1.547l3.187-7.125c.422-1.008 1.266-1.523 2.133-1.195.937.375 1.266 1.265.82 2.484l-4.148 11.578c-2.86 7.992-7.875 11.016-14.414 11.016z"
        />
      </G>
      )}

      {axle1Tire2Alert === TIRE_ALERT_AMBER && (
      <G
        id="AmberAxle1Tire2"
        fill={SVGstyles.tireAmberAlertIconFill.color}
        transform="matrix(1.46988 0 0 1.37548 248.385 213.372)"
      >
        <Path
          id="path21"
          d="M25.129 53.512c8.25 0 14.039-4.477 17.156-13.266l4.125-11.602c1.031-2.93.094-5.343-2.344-6.234-2.18-.797-4.336.14-5.367 2.555l-1.523 3.75c-.047.094-.117.164-.211.164-.117 0-.164-.094-.164-.211V9.871c0-2.742-1.711-4.453-4.336-4.453-.961 0-1.828.328-2.485.938-.304-2.391-1.851-3.868-4.171-3.868-2.274 0-3.868 1.524-4.22 3.82-.585-.585-1.429-.89-2.273-.89-2.437 0-4.054 1.688-4.054 4.29v2.6c-.633-.656-1.57-1.007-2.578-1.007-2.438 0-4.125 1.805-4.125 4.43v20.132c0 10.969 6.656 17.649 16.57 17.649zm-.117-3.258c-8.297 0-13.36-5.32-13.36-14.766v-19.43c0-.984.633-1.687 1.618-1.687.96 0 1.664.703 1.664 1.688v11.976c0 .867.703 1.453 1.453 1.453.797 0 1.523-.586 1.523-1.453V10.13c0-1.008.633-1.688 1.594-1.688.984 0 1.664.68 1.664 1.688v16.71c0 .868.703 1.454 1.476 1.454.797 0 1.524-.586 1.524-1.453V7.223c0-.985.656-1.711 1.64-1.711.938 0 1.618.726 1.618 1.71V26.84c0 .82.656 1.453 1.476 1.453.797 0 1.5-.633 1.5-1.453V10.129c0-1.008.68-1.688 1.641-1.688.984 0 1.64.68 1.64 1.688V33.19c0 1.078.68 1.852 1.665 1.852.843 0 1.547-.375 2.086-1.547l3.187-7.125c.422-1.008 1.266-1.523 2.133-1.195.937.375 1.266 1.265.82 2.484l-4.148 11.578c-2.86 7.992-7.875 11.016-14.414 11.016z"
        />
      </G>
      )}

      {axle2Tire1Alert === TIRE_ALERT_AMBER && (
      <G
        id="AmberAxle2Tire1"
        fill={SVGstyles.tireAmberAlertIconFill.color}
        transform="matrix(1.46988 0 0 1.37548 -9.615 345.372)"
      >
        <Path
          id="path22"
          d="M25.129 53.512c8.25 0 14.039-4.477 17.156-13.266l4.125-11.602c1.031-2.93.094-5.343-2.344-6.234-2.18-.797-4.336.14-5.367 2.555l-1.523 3.75c-.047.094-.117.164-.211.164-.117 0-.164-.094-.164-.211V9.871c0-2.742-1.711-4.453-4.336-4.453-.961 0-1.828.328-2.485.938-.304-2.391-1.851-3.868-4.171-3.868-2.274 0-3.868 1.524-4.22 3.82-.585-.585-1.429-.89-2.273-.89-2.437 0-4.054 1.688-4.054 4.29v2.6c-.633-.656-1.57-1.007-2.578-1.007-2.438 0-4.125 1.805-4.125 4.43v20.132c0 10.969 6.656 17.649 16.57 17.649zm-.117-3.258c-8.297 0-13.36-5.32-13.36-14.766v-19.43c0-.984.633-1.687 1.618-1.687.96 0 1.664.703 1.664 1.688v11.976c0 .867.703 1.453 1.453 1.453.797 0 1.523-.586 1.523-1.453V10.13c0-1.008.633-1.688 1.594-1.688.984 0 1.664.68 1.664 1.688v16.71c0 .868.703 1.454 1.476 1.454.797 0 1.524-.586 1.524-1.453V7.223c0-.985.656-1.711 1.64-1.711.938 0 1.618.726 1.618 1.71V26.84c0 .82.656 1.453 1.476 1.453.797 0 1.5-.633 1.5-1.453V10.129c0-1.008.68-1.688 1.641-1.688.984 0 1.64.68 1.64 1.688V33.19c0 1.078.68 1.852 1.665 1.852.843 0 1.547-.375 2.086-1.547l3.187-7.125c.422-1.008 1.266-1.523 2.133-1.195.937.375 1.266 1.265.82 2.484l-4.148 11.578c-2.86 7.992-7.875 11.016-14.414 11.016z"
        />
      </G>
      )}

      {axle2Tire2Alert === TIRE_ALERT_AMBER && (
      <G
        id="AmberAxle2Tire2"
        fill={SVGstyles.tireAmberAlertIconFill.color}
        transform="matrix(1.46988 0 0 1.37548 248.385 345.372)"
      >
        <Path
          id="path23"
          d="M25.129 53.512c8.25 0 14.039-4.477 17.156-13.266l4.125-11.602c1.031-2.93.094-5.343-2.344-6.234-2.18-.797-4.336.14-5.367 2.555l-1.523 3.75c-.047.094-.117.164-.211.164-.117 0-.164-.094-.164-.211V9.871c0-2.742-1.711-4.453-4.336-4.453-.961 0-1.828.328-2.485.938-.304-2.391-1.851-3.868-4.171-3.868-2.274 0-3.868 1.524-4.22 3.82-.585-.585-1.429-.89-2.273-.89-2.437 0-4.054 1.688-4.054 4.29v2.6c-.633-.656-1.57-1.007-2.578-1.007-2.438 0-4.125 1.805-4.125 4.43v20.132c0 10.969 6.656 17.649 16.57 17.649zm-.117-3.258c-8.297 0-13.36-5.32-13.36-14.766v-19.43c0-.984.633-1.687 1.618-1.687.96 0 1.664.703 1.664 1.688v11.976c0 .867.703 1.453 1.453 1.453.797 0 1.523-.586 1.523-1.453V10.13c0-1.008.633-1.688 1.594-1.688.984 0 1.664.68 1.664 1.688v16.71c0 .868.703 1.454 1.476 1.454.797 0 1.524-.586 1.524-1.453V7.223c0-.985.656-1.711 1.64-1.711.938 0 1.618.726 1.618 1.71V26.84c0 .82.656 1.453 1.476 1.453.797 0 1.5-.633 1.5-1.453V10.129c0-1.008.68-1.688 1.641-1.688.984 0 1.64.68 1.64 1.688V33.19c0 1.078.68 1.852 1.665 1.852.843 0 1.547-.375 2.086-1.547l3.187-7.125c.422-1.008 1.266-1.523 2.133-1.195.937.375 1.266 1.265.82 2.484l-4.148 11.578c-2.86 7.992-7.875 11.016-14.414 11.016z"
        />
      </G>
      )}
    </G>

    {doesAxle3Exist && (
    <G
      id="TrailerAxle3"
      display="inline"
    >
      <Path
        id="rect45"
        d="M14.77 519.641h286.52v10.65H14.77Z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="path45"
        d="m192 515.501-8.88-4.27a4.38 4.38 0 0 0-1.88-.43h-46.46a4.31 4.31 0 0 0-1.87.43l-8.88 4.27a4.38 4.38 0 0 1-1.88.43H122a4.32 4.32 0 0 0-4.32 4.32v9.42a4.33 4.33 0 0 0 4.32 4.35h.15a4.24 4.24 0 0 1 1.88.43l8.88 4.27a4.3 4.3 0 0 0 1.87.42h46.49a4.37 4.37 0 0 0 1.88-.42l8.88-4.27a4.17 4.17 0 0 1 1.87-.43h.15a4.32 4.32 0 0 0 4.32-4.32v-9.42a4.31 4.31 0 0 0-4.32-4.32h-.15a4.31 4.31 0 0 1-1.9-.46z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <G id="Axle3Tire1" transform="matrix(1.65113 0 0 1 0 -631.979)"
          {...(
            axle3Tire1Alert === TIRE_ALERT_AMBER || axle3Tire1Alert === TIRE_ALERT_RED
          ? {
          stroke: axle3Tire1Alert === TIRE_ALERT_RED ? SVGstyles.tireRedAlertStroke.color : SVGstyles.tireAmberAlertStroke.color,
          strokeWidth: "2",
          opacity: "1",
          }
          : {})}>
        <Rect
          id="rect46"
          width={37.55}
          height={117.81}
          x={0}
          y={1092.88}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
        />
        <Rect
          id="rect47"
          width={37.55}
          height={117.81}
          x={0}
          y={1092.88}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
        />
        <Path
          id="path47"
          d="M17.94 1134.64a4.14 4.14 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.36v4.16a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .89-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path48"
          d="M17.94 1144.89a4.13 4.13 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .89-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path49"
          d="m.9 1102.43 6-5.74a4.14 4.14 0 0 0 1.29-3v-.82H8a7.86 7.86 0 0 0-8 7.67v1.52a.53.53 0 0 0 .9.37z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path50"
          d="M17.94 1176.49a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path51"
          d="M17.94 1165.81a4.1 4.1 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path52"
          d="M17.94 1113.71a4.1 4.1 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path53"
          d="m.9 1112.68 6-5.74a4.14 4.14 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.74a4.18 4.18 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path54"
          d="M17.94 1124a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path55"
          d="M17.94 1092.88h-5.53l4.64 4.42a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path56"
          d="M10.64 1188.69a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .89-.36v-4.16a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path57"
          d="M17.94 1103a4.13 4.13 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path58"
          d="M17.94 1155.57a4.13 4.13 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.74a.52.52 0 0 0 .89-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path59"
          d="M27.8 1157.44a.52.52 0 0 0-.89-.35l-6 5.74a4.11 4.11 0 0 0-1.3 3v4.17a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path60"
          d="M27.8 1168.12a.53.53 0 0 0-.89-.36l-6 5.75a4.11 4.11 0 0 0-1.3 3v4.17a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path61"
          d="M27.8 1147.19a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.35l6-5.74a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path62"
          d="M17.94 1186.74a4.14 4.14 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.36v4.16a4.15 4.15 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .89-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path63"
          d="m26.91 1188.69-6 5.74a4.14 4.14 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.75a4.1 4.1 0 0 0 1.29-3v-4.2a.52.52 0 0 0-.89-.31z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path64"
          d="M6.91 1201.32a4.13 4.13 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.75a4.14 4.14 0 0 0-1.29 3v.47a7.38 7.38 0 0 0 1.09 3.86z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path65"
          d="M27.8 1105.34a.52.52 0 0 0-.89-.35l-6 5.74a4.11 4.11 0 0 0-1.3 3v4.17a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path66"
          d="M27.8 1094.66a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.35l6-5.74a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path67"
          d="M27.8 1115.59a.53.53 0 0 0-.89-.36l-6 5.75a4.11 4.11 0 0 0-1.3 3v4.17a.53.53 0 0 0 .9.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path68"
          d="M27.8 1136.51a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path69"
          d="M27.8 1126.27a.53.53 0 0 0-.89-.36l-6 5.74a4.15 4.15 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path70"
          d="M27.8 1178.37a.53.53 0 0 0-.89-.36l-6 5.74a4.15 4.15 0 0 0-1.3 3v4.16a.53.53 0 0 0 .9.36l6-5.74a4.14 4.14 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path71"
          d="M30.24 1162.21a.53.53 0 0 0-.9.36v4.16a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .9-.36v-4.16a4.14 4.14 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path72"
          d="M19.6 1097a.53.53 0 0 0 .9.35l4.63-4.42H19.6z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path73"
          d="m.9 1123.36 6-5.75a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74a4.17 4.17 0 0 0-1.29 3v4.17a.53.53 0 0 0 .89.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path74"
          d="M30.24 1193.81a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 1.3 3l5.81 5.55a7.3 7.3 0 0 0 1.1-3.86v-.47a4.11 4.11 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path75"
          d="M30.24 1141.28a.53.53 0 0 0-.9.36v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35V1150a4.11 4.11 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path76"
          d="M30.24 1183.14a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.17a4.11 4.11 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path77"
          d="M30.24 1172.89a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.16a4.14 4.14 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path78"
          d="M30.24 1099.43a.53.53 0 0 0-.9.36v4.21a4.15 4.15 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.36v-4.16a4.15 4.15 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path79"
          d="M29.51 1092.88h-.17v.82a4.15 4.15 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.36v-1.52a7.86 7.86 0 0 0-8.03-7.68z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path80"
          d="M30.24 1131a.53.53 0 0 0-.9.35v4.16a4.14 4.14 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.17a4.11 4.11 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path81"
          d="M30.24 1110.11a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.75a.53.53 0 0 0 .9-.36v-4.16a4.14 4.14 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path82"
          d="M30.24 1120.36a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.35v-4.16a4.14 4.14 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path83"
          d="M30.24 1152a.53.53 0 0 0-.9.36v4.16a4.15 4.15 0 0 0 1.3 3l6 5.74a.53.53 0 0 0 .9-.36v-4.16a4.15 4.15 0 0 0-1.3-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path84"
          d="m.9 1175.46 6-5.75a4.1 4.1 0 0 0 1.29-3v-4.16a.52.52 0 0 0-.89-.36l-6 5.74a4.17 4.17 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.37z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path85"
          d="m.9 1165.21 6-5.74a4.14 4.14 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.74a4.18 4.18 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path86"
          d="m.9 1154.53 6-5.74a4.13 4.13 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.89-.36l-6 5.75A4.14 4.14 0 0 0 0 1150v4.17a.53.53 0 0 0 .9.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path87"
          d="m35 1208.61-4.76-4.55a.53.53 0 0 0-.9.36v4.16a4.2 4.2 0 0 0 .58 2.1 8.24 8.24 0 0 0 5.08-2.07z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path88"
          d="m.9 1144.28 6-5.74a4.13 4.13 0 0 0 1.29-3v-4.16a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.17a.53.53 0 0 0 .89.34z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path89"
          d="m.9 1133.6 6-5.74a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74a4.17 4.17 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path90"
          d="M17.94 1207.67a4.13 4.13 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.9.35v4.17a4.11 4.11 0 0 0 1.3 3l4.44 4.25h2.46z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path91"
          d="M26.51 1206.44a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.3 3v3h2.47z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path92"
          d="m.9 1186.13 6-5.74a4.1 4.1 0 0 0 1.29-3v-4.17a.52.52 0 0 0-.89-.35l-6 5.74a4.17 4.17 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path93"
          d="m.9 1196.38 6-5.74a4.13 4.13 0 0 0 1.29-3v-4.16a.52.52 0 0 0-.89-.35l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.13a.53.53 0 0 0 .89.38z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path94"
          d="M8.2 1208.58v-4.16a.53.53 0 0 0-.89-.36l-4.76 4.55a8.21 8.21 0 0 0 5.07 2.07 4.1 4.1 0 0 0 .58-2.1z"
					fill={SVGstyles.tireTreadFill.color}
				/>
      </G>
      <G id="Axle3Tire2" transform="matrix(1.65066 0 0 1 -207.958 -631.979)"
          {...(
            axle3Tire2Alert === TIRE_ALERT_AMBER || axle3Tire2Alert === TIRE_ALERT_RED
          ? {
          stroke: axle3Tire2Alert === TIRE_ALERT_RED ? SVGstyles.tireRedAlertStroke.color : SVGstyles.tireAmberAlertStroke.color,
          strokeWidth: "2",
          opacity: "1",
          }
          : {})}>
        <Rect
          id="rect190"
          width={37.55}
          height={117.81}
          x={281.69}
          y={1092.88}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
        />
        <Rect
          id="rect191"
          width={37.55}
          height={117.81}
          x={281.69}
          y={1092.88}
          rx={7.86}
          fill={SVGstyles.tireFill.color}
        />
        <Path
          id="path191"
          d="M299.63 1134.64a4.14 4.14 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.89.36v4.16a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .9-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path192"
          d="M299.63 1144.89a4.13 4.13 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .9-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path193"
          d="m282.58 1102.43 6-5.74a4.18 4.18 0 0 0 1.29-3v-.82h-.16a7.86 7.86 0 0 0-8 7.67v1.52a.52.52 0 0 0 .87.37z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path194"
          d="M299.63 1176.49a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.89.36v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path195"
          d="M299.63 1165.81a4.1 4.1 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path196"
          d="M299.63 1113.71a4.1 4.1 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path197"
          d="m282.58 1112.68 6-5.74a4.18 4.18 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.16a.53.53 0 0 0 .9.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path198"
          d="M299.63 1124a4.1 4.1 0 0 0-1.29-3l-6-5.75a.53.53 0 0 0-.89.36v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path199"
          d="M299.63 1092.88h-5.53l4.63 4.42a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path200"
          d="M292.32 1188.69a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .9-.36v-4.16a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path201"
          d="M299.63 1103a4.13 4.13 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path202"
          d="M299.63 1155.57a4.13 4.13 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.35z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path203"
          d="M309.49 1157.44a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path204"
          d="M309.49 1168.12a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path205"
          d="M309.49 1147.19a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.52.52 0 0 0 .89.35l6-5.74a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path206"
          d="M299.63 1186.74a4.14 4.14 0 0 0-1.29-3l-6-5.74a.53.53 0 0 0-.89.36v4.16a4.14 4.14 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .9-.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path207"
          d="m308.59 1188.69-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.75a4.1 4.1 0 0 0 1.29-3v-4.2a.53.53 0 0 0-.89-.31z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path208"
          d="M288.6 1201.32a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v.47a7.38 7.38 0 0 0 1.09 3.86z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path209"
          d="M309.49 1105.34a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path210"
          d="M309.49 1094.66a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.52.52 0 0 0 .89.35l6-5.74a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path211"
          d="M309.49 1115.59a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .89.35l6-5.74a4.13 4.13 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path212"
          d="M309.49 1136.51a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path213"
          d="M309.49 1126.27a.53.53 0 0 0-.9-.36l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.75a4.1 4.1 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path214"
          d="M309.49 1178.37a.53.53 0 0 0-.9-.36l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.16a.53.53 0 0 0 .89.36l6-5.74a4.14 4.14 0 0 0 1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path215"
          d="M311.92 1162.21a.52.52 0 0 0-.89.36v4.16a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .89-.36v-4.16a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path216"
          d="M301.29 1097a.52.52 0 0 0 .89.35l4.64-4.42h-5.53z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path217"
          d="m282.58 1123.36 6-5.75a4.14 4.14 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.17a.53.53 0 0 0 .9.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path218"
          d="M311.92 1193.81a.53.53 0 0 0-.89.36v4.16a4.13 4.13 0 0 0 1.29 3l5.82 5.55a7.38 7.38 0 0 0 1.09-3.86v-.47a4.1 4.1 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path219"
          d="M311.92 1141.28a.53.53 0 0 0-.89.36v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35V1150a4.1 4.1 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path220"
          d="M311.92 1183.14a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.17a4.1 4.1 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path221"
          d="M311.92 1172.89a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path222"
          d="M311.92 1099.43a.53.53 0 0 0-.89.36v4.21a4.14 4.14 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .89-.36v-4.16a4.14 4.14 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path223"
          d="M311.19 1092.88H311v.82a4.14 4.14 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.36v-1.52a7.86 7.86 0 0 0-7.99-7.68z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path224"
          d="M311.92 1131a.52.52 0 0 0-.89.35v4.16a4.13 4.13 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.17a4.1 4.1 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path225"
          d="M311.92 1110.11a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.75a.53.53 0 0 0 .89-.36v-4.16a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path226"
          d="M311.92 1120.36a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l6 5.74a.52.52 0 0 0 .89-.35v-4.16a4.13 4.13 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path227"
          d="M311.92 1152a.53.53 0 0 0-.89.36v4.16a4.14 4.14 0 0 0 1.29 3l6 5.74a.53.53 0 0 0 .89-.36v-4.16a4.14 4.14 0 0 0-1.29-3z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path228"
          d="m282.58 1175.46 6-5.75a4.14 4.14 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.53.53 0 0 0 .9.37z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path229"
          d="m282.58 1165.21 6-5.74a4.18 4.18 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.74a4.14 4.14 0 0 0-1.29 3v4.16a.53.53 0 0 0 .9.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path230"
          d="m282.58 1154.53 6-5.74a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.36l-6 5.75a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .9.34z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path231"
          d="m316.69 1208.61-4.77-4.55a.53.53 0 0 0-.89.36v4.16a4.1 4.1 0 0 0 .58 2.1 8.26 8.26 0 0 0 5.08-2.07z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path232"
          d="m282.58 1144.28 6-5.74a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.17a.52.52 0 0 0 .9.34z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path233"
          d="m282.58 1133.6 6-5.74a4.14 4.14 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.52.52 0 0 0 .9.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path234"
          d="M299.63 1207.67a4.13 4.13 0 0 0-1.29-3l-6-5.74a.52.52 0 0 0-.89.35v4.17a4.1 4.1 0 0 0 1.29 3l4.45 4.25h2.46z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path235"
          d="M308.2 1206.44a4.1 4.1 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v3h2.46z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path236"
          d="m282.58 1186.13 6-5.74a4.14 4.14 0 0 0 1.29-3v-4.17a.53.53 0 0 0-.9-.35l-6 5.74a4.13 4.13 0 0 0-1.29 3v4.16a.52.52 0 0 0 .9.36z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path237"
          d="m282.58 1196.38 6-5.74a4.17 4.17 0 0 0 1.29-3v-4.16a.53.53 0 0 0-.9-.35l-6 5.74a4.1 4.1 0 0 0-1.29 3v4.13a.52.52 0 0 0 .9.38z"
					fill={SVGstyles.tireTreadFill.color}
				/>
        <Path
          id="path238"
          d="M289.89 1208.58v-4.16a.53.53 0 0 0-.9-.36l-4.76 4.55a8.24 8.24 0 0 0 5.08 2.07 4.1 4.1 0 0 0 .58-2.1z"
					fill={SVGstyles.tireTreadFill.color}
				/>
      </G>
      <Path
        id="path432"
        d="M95.83 504.021h15.47v41.85H95.83a6.3 6.3 0 0 1-6.3-6.3v-29.26a6.3 6.3 0 0 1 6.3-6.29z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />
      <Path
        id="path435"
        d="M223.38 545.901h-15.47v-41.85h15.47a6.3 6.3 0 0 1 6.3 6.3v29.26a6.3 6.3 0 0 1-6.3 6.29z"
        fill={SVGstyles.axleFill.color}
        stroke={SVGstyles.axleStroke.color}
        strokeWidth=".82px"
        strokeMiterlimit="10"
        />

      {axle3Tire1Alert === TIRE_ALERT_RED && (
      <G
        id="AlertAxle3Tire1"
        opacity="1"
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="0"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray="none"
        transform="translate(-19.263 468.257) scale(1.11015)"
      >
        <Path
          id="path15"
          strokeLinecap="round"
          d="M45 66.364a5.565 5.565 0 0 1-5.56-5.321l-5.132-49.519C33.841 5.304 38.762 0 45 0s11.159 5.304 10.692 11.524L50.56 61.043A5.565 5.565 0 0 1 45 66.364z"
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Circle
          id="circle15"
          cx={44.998}
          cy={81.128}
          r={8.868}
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path16"
          strokeLinecap="round"
          d="M45 0c-1.045 0-2.048.161-3 .438 4.73 1.377 8.08 5.908 7.692 11.086L44.56 61.043a5.558 5.558 0 0 1-2.56 4.44 5.534 5.534 0 0 0 3 .881 5.565 5.565 0 0 0 5.56-5.321l5.132-49.519C56.159 5.304 51.238 0 45 0Z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path17"
          strokeLinecap="round"
          d="M45 72.264a8.848 8.848 0 0 0-3 .531c3.419 1.231 5.868 4.493 5.868 8.336S45.419 88.237 42 89.469A8.848 8.848 0 0 0 45 90a8.868 8.868 0 0 0 8.868-8.868A8.868 8.868 0 0 0 45 72.264z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
      </G>
      )}

      {axle3Tire2Alert === TIRE_ALERT_RED && (
      <G
        id="AlertAxle3Tire2"
        opacity="1"
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="0"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray="none"
        transform="translate(238.737 468.257) scale(1.11015)"
      >
        <Path
          id="path18"
          strokeLinecap="round"
          d="M45 66.364a5.565 5.565 0 0 1-5.56-5.321l-5.132-49.519C33.841 5.304 38.762 0 45 0s11.159 5.304 10.692 11.524L50.56 61.043A5.565 5.565 0 0 1 45 66.364z"
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Circle
          id="circle18"
          cx={44.998}
          cy={81.128}
          r={8.868}
          fill={SVGstyles.tireRedAlertIconFill.color}
          opacity="1"
          fillRule="nonzero"
          stroke={SVGstyles.tireRedAlertIconBorderStroke.color}
          strokeWidth="2"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path19"
          strokeLinecap="round"
          d="M45 0c-1.045 0-2.048.161-3 .438 4.73 1.377 8.08 5.908 7.692 11.086L44.56 61.043a5.558 5.558 0 0 1-2.56 4.44 5.534 5.534 0 0 0 3 .881 5.565 5.565 0 0 0 5.56-5.321l5.132-49.519C56.159 5.304 51.238 0 45 0Z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
        <Path
          id="path20"
          strokeLinecap="round"
          d="M45 72.264a8.848 8.848 0 0 0-3 .531c3.419 1.231 5.868 4.493 5.868 8.336S45.419 88.237 42 89.469A8.848 8.848 0 0 0 45 90a8.868 8.868 0 0 0 8.868-8.868A8.868 8.868 0 0 0 45 72.264z"
          opacity="1"
          fill={SVGstyles.tireRedAlertIconShadowFill.color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray="none"
        />
      </G>
      )}

      {axle3Tire1Alert === TIRE_ALERT_AMBER && (
      <G
        id="AmberAxle3Tire1"
        fill={SVGstyles.tireAmberAlertIconFill.color}
        transform="matrix(1.46988 0 0 1.37548 -9.615 477.372)"
      >
        <Path
          id="path24"
          d="M25.129 53.512c8.25 0 14.039-4.477 17.156-13.266l4.125-11.602c1.031-2.93.094-5.343-2.344-6.234-2.18-.797-4.336.14-5.367 2.555l-1.523 3.75c-.047.094-.117.164-.211.164-.117 0-.164-.094-.164-.211V9.871c0-2.742-1.711-4.453-4.336-4.453-.961 0-1.828.328-2.485.938-.304-2.391-1.851-3.868-4.171-3.868-2.274 0-3.868 1.524-4.22 3.82-.585-.585-1.429-.89-2.273-.89-2.437 0-4.054 1.688-4.054 4.29v2.6c-.633-.656-1.57-1.007-2.578-1.007-2.438 0-4.125 1.805-4.125 4.43v20.132c0 10.969 6.656 17.649 16.57 17.649zm-.117-3.258c-8.297 0-13.36-5.32-13.36-14.766v-19.43c0-.984.633-1.687 1.618-1.687.96 0 1.664.703 1.664 1.688v11.976c0 .867.703 1.453 1.453 1.453.797 0 1.523-.586 1.523-1.453V10.13c0-1.008.633-1.688 1.594-1.688.984 0 1.664.68 1.664 1.688v16.71c0 .868.703 1.454 1.476 1.454.797 0 1.524-.586 1.524-1.453V7.223c0-.985.656-1.711 1.64-1.711.938 0 1.618.726 1.618 1.71V26.84c0 .82.656 1.453 1.476 1.453.797 0 1.5-.633 1.5-1.453V10.129c0-1.008.68-1.688 1.641-1.688.984 0 1.64.68 1.64 1.688V33.19c0 1.078.68 1.852 1.665 1.852.843 0 1.547-.375 2.086-1.547l3.187-7.125c.422-1.008 1.266-1.523 2.133-1.195.937.375 1.266 1.265.82 2.484l-4.148 11.578c-2.86 7.992-7.875 11.016-14.414 11.016z"
        />
      </G>
      )}

      {axle3Tire2Alert === TIRE_ALERT_AMBER && (
      <G
        id="AmberAxle3Tire2"
        fill={SVGstyles.tireAmberAlertIconFill.color}
        transform="matrix(1.46988 0 0 1.37548 -9.615 477.372)"
      >
        <Path
          id="path25"
          d="M200.653 53.512c8.25 0 14.039-4.477 17.156-13.266l4.125-11.602c1.031-2.93.094-5.343-2.344-6.234-2.18-.797-4.335.14-5.367 2.555l-1.523 3.75c-.047.094-.117.164-.211.164-.117 0-.164-.094-.164-.211V9.871c0-2.742-1.711-4.453-4.336-4.453-.961 0-1.828.328-2.484.938-.305-2.391-1.852-3.868-4.172-3.868-2.274 0-3.868 1.524-4.22 3.82-.585-.585-1.429-.89-2.273-.89-2.437 0-4.054 1.688-4.054 4.29v2.6c-.633-.656-1.57-1.007-2.578-1.007-2.438 0-4.125 1.805-4.125 4.43v20.132c0 10.969 6.656 17.649 16.57 17.649zm-.117-3.258c-8.297 0-13.36-5.32-13.36-14.766v-19.43c0-.984.633-1.687 1.618-1.687.96 0 1.664.703 1.664 1.688v11.976c0 .867.703 1.453 1.453 1.453.797 0 1.523-.586 1.523-1.453V10.13c0-1.008.633-1.688 1.594-1.688.984 0 1.664.68 1.664 1.688v16.71c0 .868.703 1.454 1.477 1.454.796 0 1.523-.586 1.523-1.453V7.223c0-.985.656-1.711 1.64-1.711.938 0 1.618.726 1.618 1.71V26.84c0 .82.656 1.453 1.476 1.453.797 0 1.5-.633 1.5-1.453V10.129c0-1.008.68-1.688 1.641-1.688.984 0 1.64.68 1.64 1.688V33.19c0 1.078.68 1.852 1.665 1.852.843 0 1.547-.375 2.086-1.547l3.187-7.125c.422-1.008 1.266-1.523 2.133-1.195.937.375 1.266 1.265.82 2.484l-4.148 11.578c-2.86 7.992-7.875 11.016-14.414 11.016z"
        />
      </G>
      )}
    </G>
    )}
  </Svg>
  </View>
  );
}
export default TrailerAxleTiresComponent