import * as Electron from "electron";
import * as fs from "fs-extra";
import * as path from "path";
import IPC from "../../typings/IPC";

const Methods: IPC.Backend.Handlers["filter"] = {
  async load(): Promise<string | void> {
    const folder_paths = Electron.dialog.showOpenDialog(Electron.BrowserWindow.fromId(this.frameId), {
      title:       "Select folder to add",
      defaultPath: path.resolve(Electron.app.getPath("documents"), "My Games", "Path of Exile"),
      properties:  [],
    }) || [""];
    if (!folder_paths[0]) return undefined;
    return (await fs.readFile(folder_paths[0])).toString("utf8")
  },
};

export default Methods;
