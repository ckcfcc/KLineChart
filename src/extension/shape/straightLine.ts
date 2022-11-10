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

import ExcludePickPartial from '../../common/ExcludePickPartial'

import { getLinearYFromCoordinates } from '../figure/line'

import { Shape } from '../../componentl/Shape'

const straightLine: ExcludePickPartial<Shape, 'name' | 'totalStep' | 'createFigures'> = {
  name: 'straightLine',
  totalStep: 3,
  createFigures: ({ coordinates, bounding }) => {
    if (coordinates.length === 2) {
      if (coordinates[0].x === coordinates[1].x) {
        return [
          {
            type: 'line',
            attrs: {
              coordinates: [
                {
                  x: coordinates[0].x,
                  y: 0
                }, {
                  x: coordinates[0].x,
                  y: bounding.height
                }
              ]
            }
          }
        ]
      }
      return [
        {
          type: 'line',
          attrs: {
            coordinates: [
              {
                x: 0,
                y: getLinearYFromCoordinates(coordinates[0], coordinates[1], { x: 0, y: coordinates[0].y })
              }, {
                x: bounding.width,
                y: getLinearYFromCoordinates(coordinates[0], coordinates[1], { x: bounding.width, y: coordinates[0].y })
              }
            ]
          }
        }
      ]
    }
    return []
  }
}

export default straightLine
