import { useEffect, useState } from 'react';

const key = 'mf_theme';

export default function ThemeToggle() {
	const [theme, setTheme] = useState(() => localStorage.getItem(key) || 'dark');

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem(key, theme);
	}, [theme]);

	return (
		<button aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
			{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
		</button>
	);
}


