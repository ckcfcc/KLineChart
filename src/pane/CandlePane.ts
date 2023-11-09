/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import DrawWidget from '../widget/DrawWidget'
import CandleWidget from '../widget/CandleWidget'

import DrawPane from './DrawPane'
import IndicatorPane from './IndicatorPane'
import YAxis from '../component/YAxis'

import { PaneNameConstants } from './types'

export default class CandlePane extends IndicatorPane {
  override getName (): string {
    return PaneNameConstants.CANDLE
  }

  override createMainWidget (container: HTMLElement): DrawWidget<DrawPane<YAxis>> {
    return new CandleWidget(container, this)
  }
}
