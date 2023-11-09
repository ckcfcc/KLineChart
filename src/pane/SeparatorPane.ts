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

import Nullable from '../common/Nullable'
import { UpdateLevel } from '../common/Updater'
import Bounding from '../common/Bounding'
import { merge } from '../common/utils/typeChecks'

import Chart from '../Chart'

import DrawPane from './DrawPane'
import Pane from './Pane'
import { PaneNameConstants } from './types'

import SeparatorWidget from '../widget/SeparatorWidget'

export default class SeparatorPane extends Pane {
  private _topPane: DrawPane
  private _bottomPane: DrawPane

  private readonly _separatorWidget: SeparatorWidget

  constructor (rootContainer: HTMLElement, afterElement: Nullable<HTMLElement>, chart: Chart, id: string, topPane: DrawPane, bottomPane: DrawPane) {
    super(rootContainer, afterElement, chart, id)
    this.getContainer().style.overflow = ''
    this._topPane = topPane
    this._bottomPane = bottomPane
    this._separatorWidget = new SeparatorWidget(this.getContainer(), this)
  }

  override setBounding (rootBounding: Partial<Bounding>): Pane {
    merge(this.getBounding(), rootBounding)
    return this
  }

  getTopPane (): DrawPane {
    return this._topPane
  }

  setTopPane (pane: DrawPane): Pane {
    this._topPane = pane
    return this
  }

  getBottomPane (): DrawPane {
    return this._bottomPane
  }

  setBottomPane (pane: DrawPane): Pane {
    this._bottomPane = pane
    return this
  }

  getWidget (): SeparatorWidget { return this._separatorWidget }

  override getImage (_includeOverlay: boolean): HTMLCanvasElement {
    throw new Error('Method not implemented.')
  }

  override updateImp (level: UpdateLevel, container: HTMLElement, bounding: Bounding): void {
    if (level === UpdateLevel.All || level === UpdateLevel.Separator) {
      const styles = this.getChart().getStyles().separator
      const fill = styles.fill
      container.style.backgroundColor = styles.color
      container.style.height = `${styles.size}px`
      container.style.marginLeft = `${fill ? 0 : bounding.left}px`
      container.style.width = fill ? '100%' : `${bounding.width}px`
      this._separatorWidget.update(level)
    }
  }

  override getName (): string {
    return PaneNameConstants.SEPARATOR
  }
}
