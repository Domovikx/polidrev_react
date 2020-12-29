import { CloseReason } from 'notistack';
import { SyntheticEvent } from 'react';

import { Key } from '../notificationCreator/notificationCreator.types';

export interface NotificationType {
  key: string;
  message: string;
  options: {
    action(key: Key): JSX.Element;
    key?: string | undefined;
    variant?: 'warning' | 'default' | 'error' | 'success' | 'info' | undefined;
    autoHideDuration?: number | null | undefined;
    onClose(
      event: SyntheticEvent<any, Event> | null, // TODO: any=?
      reason: CloseReason,
      key: string | number | undefined,
    ): void;
  };
  dismissed: boolean;
}
