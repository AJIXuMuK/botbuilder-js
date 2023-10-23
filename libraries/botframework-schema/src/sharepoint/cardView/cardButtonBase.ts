// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import type { CardAction } from '../actions/cardAction';

/**
 * Base properties for the buttons used in different ACE card view components, such as Text Input and Search Box and Card Button.
 */
export interface CardButtonBase {
  /**
   * The type of the button.
   */
  action: CardAction;
  /**
   * Unique Id of the button.
   *
   */
  id?: string;
}
