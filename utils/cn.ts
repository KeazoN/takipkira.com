/**
 * Combines multiple class names into a single string
 * Handles conditional classes, undefined, null, and boolean values
 */
export function cn(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
