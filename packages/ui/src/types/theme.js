// @flow

type ThemeValueType = string | number;

export type ThemeType = {
	[key: string]: ThemeValueType,
	spacing: {
		[key: string]: ThemeValueType,
		unit: number,
	},
	transitions: {
		[key: string]: ThemeValueType,
		easing: {
			sharp: ThemeValueType,
			easeOut: ThemeValueType,
			easeOut: ThemeValueType,
		},
		duration: {
			leavingScreen: ThemeValueType,
			enteringScreen: ThemeValueType,
		},
		create: (Array<string> | string, Object) => ThemeValueType,
	},
	mixins: {
		toolbar: {
			[key: string]: ThemeValueType,
		},
	},
	palette: {
		background: {
			[key: string]: ThemeValueType,
		},
	},
	breakpoints: {
		up: (value: string) => ThemeValueType,
	},
};