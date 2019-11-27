/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import 'px-demo/px-demo-code-editor.js';
import '../px-simple-bar-chart.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-simple-bar-chart" description="Use this component to visualize a series or multiple series of numeric values as a bar chart or stacked bar chart.
            Each series is represented by a sequence of horizontally aligned rectangle bars, the height of each proportionally
            representing a value.
             It uses the data visualization color palette by default, but this can be overridden with configuration. The height and
             width are configurable, as are the legend labels – if none are provided, the legend will not be shown.
             We recommend using the default settings as they are designed for proper performance." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Code Editor -->
      <px-demo-code-editor slot="px-demo-code-editor" props="{{props}}"></px-demo-code-editor>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component" class="flex__item flex__item--msfix">

        <px-simple-bar-chart chart-data="{{props.chartData.value}}" width="{{props.width.value}}" height="{{props.height.value}}" legend-labels="{{props.legendLabels.value}}" colors="{{props.colors.value}}" legend-order="{{props.legendOrder.value}}">
        </px-simple-bar-chart>

      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-simple-bar-chart" scripts-includes="[[scriptsIncludes]]">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-simple-bar-chart"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-simple-bar-chart-demo',

  properties: {


    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return [


          {
            configName: "One Series",
            configReset: true
          },
          {
            configName: "Multi Series",
            width : '500',
            height : '350',
            chartData : [
              [1,2,3,4,5,6,7],
              [2,6,5,4,3,2,7],
              [2,4,6,7,5,3,6],
              [3,3,3,3,3,3,4],
              [5,5,5,5,5,5,5]
            ],
            colors : [],
            legendLabels : ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
            legendOrder : "sequential"
          },
        ]
      }
    },

    scriptsIncludes:{
      type: Array,
      value: ['https://d3js.org/d3.v3.min.js']
    }
  },

  /**
   * A reference for `this.props`. Read the documentation there.
   */
  demoProps: {
    width: {
      type: String,
      defaultValue: 'auto',
      inputType: 'text'
    },

    height: {
      type: String,
      defaultValue: '300',
      inputType: 'text'
    },

    chartData: {
      type: Array,
      defaultValue: [[112,  57,  53, 122, 128, 120,  56,  94, 102]],
      inputType: 'code:JSON'
    },

    colors: {
      type: Array,
      defaultValue: ["#6FC9FA"],
      inputType: 'code:JSON'
    },

    legendLabels: {
      type: Array,
      defaultValue: [],
      inputType: 'code:JSON'
    },

    legendOrder: {
      type: String,
      value: 'reverse',
      inputType: 'dropdown',
      inputChoices: ['sequential', 'reverse']
    },
  }
});
