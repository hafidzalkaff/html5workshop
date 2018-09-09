import * as Hammer from 'hammerjs';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class customHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      // override hammerjs default configuration
      'swipe': { direction: Hammer.DIRECTION_ALL  },
      'pan': { direction: Hammer.DIRECTION_ALL  }
      
  }
}

