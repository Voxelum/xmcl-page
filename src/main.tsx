import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log(`
██╗  ██╗███╗   ███╗ ██████╗ ██╗     
╚██╗██╔╝████╗ ████║██╔════╝ ██║     
 ╚███╔╝ ██╔████╔██║██║      ██║     
 ██╔██╗ ██║╚██╔╝██║██║      ██║     
██╔╝ ██╗██║ ╚═╝ ██║╚██████╗ ███████╗ 
╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝

THE BEST LAUNCHER !
`);

// Easter egg: make a global function for developer
(window as any).baneronetwo = () => {
  console.log('%cBANERONETWO IS THE DEVELOPER! This is not an official website yet.', 'color: #8b5cf6; font-weight: bold; font-size: 16px;');
  console.log('You can also use: window.baneronetwo()');
};

// Easter egg: animate XMCL in console
(window as any).x_minecraft_launcher = () => {
  const text = 'XMCL';
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      process.stdout.write(text[index]);
      index++;
    } else {
      clearInterval(interval);
      console.log('\n\nThe modern Minecraft launcher!');
    }
  }, 200);
};

createRoot(document.getElementById("root")!).render(<App />);