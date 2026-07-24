export type ColorScheme = "light" | "dark";

/** Color primitives */
export const palette = {
  light: {
    primary: "oklch(0.476 0.119 124.531)",
    onPrimary: "oklch(1 0 0)",
    primaryContainer: "oklch(0.9 0.199 124.009)",
    onPrimaryContainer: "oklch(0.221 0.056 125.017)",
    primaryFixed: "oklch(0.9 0.199 124.009)",
    onPrimaryFixed: "oklch(0.221 0.056 125.017)",
    primaryFixedDim: "oklch(0.814 0.193 124.34)",
    onPrimaryFixedVariant: "oklch(0.39 0.097 124.246)",

    secondary: "oklch(0.477 0.112 119.331)",
    onSecondary: "oklch(1 0 0)",
    secondaryContainer: "oklch(0.905 0.14 117.59)",
    onSecondaryContainer: "oklch(0.221 0.052 119.723)",
    secondaryFixed: "oklch(0.905 0.14 117.59)",
    onSecondaryFixed: "oklch(0.221 0.052 119.723)",
    secondaryFixedDim: "oklch(0.82 0.137 118.171)",
    onSecondaryFixedVariant: "oklch(0.392 0.093 119.524)",

    tertiary: "oklch(0.496 0.124 38.592)",
    onTertiary: "oklch(1 0 0)",
    tertiaryContainer: "oklch(0.919 0.043 37.6)",
    onTertiaryContainer: "oklch(0.231 0.076 37.803)",
    tertiaryFixed: "oklch(0.919 0.043 37.6)",
    onTertiaryFixed: "oklch(0.231 0.076 37.803)",
    tertiaryFixedDim: "oklch(0.837 0.093 38.695)",
    onTertiaryFixedVariant: "oklch(0.41 0.115 38.783)",

    error: "oklch(0.506 0.193 27.694)",
    onError: "oklch(1 0 0)",
    errorContainer: "oklch(0.918 0.042 25.137)",
    onErrorContainer: "oklch(0.236 0.096 27.184)",

    surface: "oklch(0.99 0.011 95.258)",
    surfaceDim: "oklch(0.887 0.011 100.968)",
    surfaceBright: "oklch(0.981 0.011 95.259)",
    surfaceContainerLowest: "oklch(1 0 0)",
    surfaceContainerLow: "oklch(0.966 0.011 100.963)",
    surfaceContainer: "oklch(0.948 0.011 95.26)",
    surfaceContainerHigh: "oklch(0.93 0.011 95.261)",
    surfaceContainerHighest: "oklch(0.914 0.011 100.966)",
    onSurface: "oklch(0.223 0.01 116.429)",
    onSurfaceVariant: "oklch(0.395 0.02 118.787)",

    outline: "oklch(0.567 0.02 114.202)",
    outlineVariant: "oklch(0.827 0.022 112.753)",

    inverseSurface: "oklch(0.31 0.009 116.199)",
    inverseOnSurface: "oklch(0.957 0.011 100.963)",
    inversePrimary: "oklch(0.814 0.193 124.34)",

    shadow: "oklch(0 0 0)",
    scrim: "oklch(0 0 0)",
  },
  dark: {
    primary: "oklch(0.814 0.193 124.34)",
    onPrimary: "oklch(0.305 0.076 124.254)",
    primaryContainer: "oklch(0.39 0.097 124.246)",
    onPrimaryContainer: "oklch(0.9 0.199 124.009)",
    primaryFixed: "oklch(0.9 0.199 124.009)",
    onPrimaryFixed: "oklch(0.221 0.056 125.017)",
    primaryFixedDim: "oklch(0.814 0.193 124.34)",
    onPrimaryFixedVariant: "oklch(0.39 0.097 124.246)",

    secondary: "oklch(0.82 0.137 118.171)",
    onSecondary: "oklch(0.306 0.072 119.725)",
    secondaryContainer: "oklch(0.392 0.093 119.524)",
    onSecondaryContainer: "oklch(0.905 0.14 117.59)",
    secondaryFixed: "oklch(0.905 0.14 117.59)",
    onSecondaryFixed: "oklch(0.221 0.052 119.723)",
    secondaryFixedDim: "oklch(0.82 0.137 118.171)",
    onSecondaryFixedVariant: "oklch(0.392 0.093 119.524)",

    tertiary: "oklch(0.837 0.093 38.695)",
    onTertiary: "oklch(0.322 0.105 37.983)",
    tertiaryContainer: "oklch(0.41 0.115 38.783)",
    onTertiaryContainer: "oklch(0.919 0.043 37.6)",
    tertiaryFixed: "oklch(0.919 0.043 37.6)",
    onTertiaryFixed: "oklch(0.231 0.076 37.803)",
    tertiaryFixedDim: "oklch(0.837 0.093 38.695)",
    onTertiaryFixedVariant: "oklch(0.41 0.115 38.783)",

    error: "oklch(0.838 0.089 26.722)",
    onError: "oklch(0.328 0.134 27.313)",
    errorContainer: "oklch(0.417 0.17 27.372)",
    onErrorContainer: "oklch(0.918 0.042 25.137)",

    surface: "oklch(0.223 0.01 116.429)",
    surfaceDim: "oklch(0.188 0.01 116.603)",
    surfaceBright: "oklch(0.345 0.01 114.709)",
    surfaceContainerLowest: "oklch(0.165 0.01 116.768)",
    surfaceContainerLow: "oklch(0.223 0.01 116.429)",
    surfaceContainer: "oklch(0.241 0.009 116.367)",
    surfaceContainerHigh: "oklch(0.283 0.009 107.022)",
    surfaceContainerHighest: "oklch(0.326 0.009 116.173)",
    onSurface: "oklch(0.914 0.011 100.966)",
    onSurfaceVariant: "oklch(0.827 0.022 112.753)",

    outline: "oklch(0.654 0.02 113.644)",
    outlineVariant: "oklch(0.395 0.02 118.787)",

    inverseSurface: "oklch(0.914 0.011 100.966)",
    inverseOnSurface: "oklch(0.31 0.009 116.199)",
    inversePrimary: "oklch(0.476 0.119 124.531)",

    shadow: "oklch(0 0 0)",
    scrim: "oklch(0 0 0)",
  },
} as const;

export type PaletteColors = (typeof palette)[ColorScheme];

function toSemantic(colors: PaletteColors) {
  return {
    background: colors.surface,
    foreground: colors.onSurface,
    card: colors.surfaceContainerLowest,
    cardForeground: colors.onSurface,
    popover: colors.surfaceContainerLow,
    popoverForeground: colors.onSurface,
    primary: colors.primary,
    primaryForeground: colors.onPrimary,
    secondary: colors.secondaryContainer,
    secondaryForeground: colors.onSecondaryContainer,
    muted: colors.surfaceContainer,
    mutedForeground: colors.onSurfaceVariant,
    accent: colors.tertiaryContainer,
    accentForeground: colors.onTertiaryContainer,
    destructive: colors.error,
    border: colors.outlineVariant,
    input: colors.outlineVariant,
    ring: colors.primary,
    radius: "0.625rem",
  } as const;
}

/** Semantic tokens derived from the palette */
export const theme = {
  light: toSemantic(palette.light),
  dark: toSemantic(palette.dark),
} as const;

export type ThemeColors = (typeof theme)[ColorScheme];

/** Alias matching previous mobile `THEME` export */
export const THEME = theme;
