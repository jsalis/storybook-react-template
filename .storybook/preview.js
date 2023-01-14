import { storybookTheme } from "./theme";

export const parameters = {
    docs: {
        theme: storybookTheme,
    },
    actions: {
        argTypesRegex: "^on[A-Z].*",
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
