import type { Preview, SvelteRenderer } from '@storybook/svelte';
import { withThemeByClassName } from '@storybook/addon-themes';

import './styles.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [
		withThemeByClassName<SvelteRenderer>({
			themes: {
				light: '',
				dark: 'dark'
			},
			defaultTheme: 'light'
		})
	]
};

export default preview;
