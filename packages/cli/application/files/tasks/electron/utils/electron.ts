import * as path from 'path';
import * as electronConnect from 'electron-connect';
/**
 * Sets up the default electron server instance from the dist directory
 */
export const electron = electronConnect.server.create({
    path: path.join(process.cwd(), 'dist', 'electron-app.js')
});
