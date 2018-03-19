import { Injectable } from '@angular/core';
import { AllElectron, IpcRenderer, DesktopCapturer, WebFrame, Remote, Clipboard, CrashReporter, NativeImage, Screen as screen, Shell } from 'electron';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

const ELECTRON_HOST = 'ELECTRON_BRIDGE_HOST';
const ELECTRON_CLIENT = 'ELECTRON_BRIDGE_CLIENT';

@Injectable()
export class ElectronService {
    private _electron: AllElectron = null;

    private listenerSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    listener$: Observable<any>;

    constructor() {
        this.listener$ = this.listenerSubject.asObservable();
        if (this.electron) {
            this.electron.ipcRenderer.on(ELECTRON_CLIENT, (event, msg) => {
                this.listenerSubject.next(msg);
            });
        }
    }

    send(data: any): void {
        this.ipcRenderer.send(ELECTRON_HOST, data);
    }

    get ipcRenderer(): IpcRenderer {
        return this.electron.ipcRenderer || null;
    }

    get desktopCapturer(): DesktopCapturer {
        return this.electron.desktopCapturer || null;
    }

    get webFrame(): WebFrame {
        return this.electron.webFrame || null;
    }

    get remote(): Remote {
        return this.electron.remote || null;
    }

    get clipboard(): Clipboard {
        return this.electron.clipboard || null;
    }

    get crashReporter(): CrashReporter {
        return this.electron.crashReporter || null;
    }

    get nativeImage(): NativeImage {
        return <any>this.electron.nativeImage || null;
    }

    get screen(): screen {
        return this.electron.screen || null;
    }

    get shell(): Shell {
        return this.electron.shell || null;
    }

    get electron() {
        if (!this._electron) {
            this._electron = window ? window['electron'] : null;
        }
        return this._electron;
    }
}
