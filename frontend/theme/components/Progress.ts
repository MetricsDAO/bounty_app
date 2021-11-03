function filledStyle({ colorScheme }: Record<string, any>) {
  const bgColor = `${colorScheme}.100`;
  return { bgColor };
}

function trackStyle({ colorScheme }: Record<string, any>) {
  const borderColor = `${colorScheme}.600`;
  const border = `1px solid`;
  return { bg: "white", border, borderColor };
}

const baseStyle = (props: Record<string, any>) => ({
  track: trackStyle(props),
  filledTrack: filledStyle(props),
});

export const Progress = {
  baseStyle,
};
