import { Subject } from 'rxjs';

export class TerminatorService {
  onDestroy: Subject<boolean>;

  constructor() {
    this.onDestroy = new Subject();
  }

  destroy(): void {
    this.onDestroy.next(true);
  }
}
