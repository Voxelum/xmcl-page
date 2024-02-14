import { loadTheme } from '../themeHelper';

const theme = loadTheme(__dirname, 'zh');

theme.themeConfig!.footer!.message = 'Minecraft, 启动！'

export default theme;
