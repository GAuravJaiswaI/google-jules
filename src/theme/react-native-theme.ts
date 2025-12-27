/**
 * React Native Theme
 * Shared design tokens adapted for React Native
 * 
 * Usage:
 * import { reactNativeTheme } from '@/theme/react-native-theme';
 * 
 * In React Native components:
 * <View style={{ backgroundColor: reactNativeTheme.colors.background.DEFAULT }}>
 *   <Text style={{ color: reactNativeTheme.colors.text.primary }}>
 *     Hello
 *   </Text>
 * </View>
 */

import { designTokens } from './tokens';

export const reactNativeTheme = {
  colors: {
    primary: designTokens.colors.primary.DEFAULT,
    primaryDark: designTokens.colors.primary.dark,
    background: designTokens.colors.background.DEFAULT,
    backgroundMuted: designTokens.colors.background.muted,
    accent: designTokens.colors.accent.DEFAULT,
    accentHover: designTokens.colors.accent.hover,
    textPrimary: designTokens.colors.text.primary,
    textSecondary: designTokens.colors.text.secondary,
    textMuted: designTokens.colors.text.muted,
    border: designTokens.colors.border.DEFAULT,
    borderDark: designTokens.colors.border.dark,
    surface: designTokens.colors.surface.DEFAULT,
    surfaceHover: designTokens.colors.surface.hover,
  },
  spacing: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 96,
  },
  borderRadius: {
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    full: 9999,
  },
  typography: {
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
    },
    fontWeight: {
      normal: '400' as const,
      medium: '500' as const,
      semibold: '600' as const,
      bold: '700' as const,
    },
    lineHeight: {
      tight: 20,
      normal: 24,
      relaxed: 28,
    },
  },
  shadows: {
    soft: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};

/**
 * Example React Native Components using the shared theme
 * 
 * Button Component:
 * ```tsx
 * import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 * import { reactNativeTheme } from '@/theme/react-native-theme';
 * 
 * export const Button = ({ title, onPress, variant = 'primary' }) => {
 *   return (
 *     <TouchableOpacity
 *       style={[
 *         styles.button,
 *         variant === 'primary' ? styles.primary : styles.secondary
 *       ]}
 *       onPress={onPress}
 *     >
 *       <Text style={styles.buttonText}>{title}</Text>
 *     </TouchableOpacity>
 *   );
 * };
 * 
 * const styles = StyleSheet.create({
 *   button: {
 *     paddingHorizontal: reactNativeTheme.spacing.lg,
 *     paddingVertical: reactNativeTheme.spacing.md,
 *     borderRadius: reactNativeTheme.borderRadius.md,
 *   },
 *   primary: {
 *     backgroundColor: reactNativeTheme.colors.accent,
 *   },
 *   secondary: {
 *     backgroundColor: reactNativeTheme.colors.surface,
 *     borderWidth: 1,
 *     borderColor: reactNativeTheme.colors.border,
 *   },
 *   buttonText: {
 *     fontSize: reactNativeTheme.typography.fontSize.base,
 *     fontWeight: reactNativeTheme.typography.fontWeight.medium,
 *     color: reactNativeTheme.colors.textPrimary,
 *   },
 * });
 * ```
 * 
 * Section Container:
 * ```tsx
 * import { View, StyleSheet } from 'react-native';
 * import { reactNativeTheme } from '@/theme/react-native-theme';
 * 
 * export const Section = ({ children }) => {
 *   return <View style={styles.section}>{children}</View>;
 * };
 * 
 * const styles = StyleSheet.create({
 *   section: {
 *     paddingVertical: reactNativeTheme.spacing['2xl'],
 *     paddingHorizontal: reactNativeTheme.spacing.lg,
 *   },
 * });
 * ```
 */

