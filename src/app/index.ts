import { ipcMain } from 'electron'
import { mcLauncher } from './services/launcher.js'
import { Auth } from "msmc";
export async function launcherMain(): void {
  const authManager = new Auth("select_account");
  const xboxManager = await authManager.launch("raw");
  const token = await xboxManager.getMinecraft();
  ipcMain.on('play', () => mcLauncher(token))
  ipcMain.on('gen', () => console.log(token))

}
