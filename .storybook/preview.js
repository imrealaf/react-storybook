import ThemeWrapper from "theme/ThemeWrapper";

export const decorators = [
  // (Story) => (
  //   <ThemeWrapper>
  //     <Story />
  //   </ThemeWrapper>
  // ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
