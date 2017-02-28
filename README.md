#Px-Simple-Bar-Chart [![Build Status](https://travis-ci.org/PredixDev/px-simple-bar-chart.svg?branch=master)](https://travis-ci.org/PredixDev/px-simple-bar-chart)

[![px-simple-bar-chart demo](px-simple-bar-chart.png?raw=true)](https://predixdev.github.io/px-simple-bar-chart/px-simple-bar-chart)

## Overview

Px-Simple-Bar-Chart is a Predix UI component.

Use this component to visualize a series or multiple series of numeric values as a bar chart or stacked bar chart. Each series is represented by a sequence of horizontally aligned rectangle bars, the height of each proportionally representing a value. If multiple series are passed to the component then a stacked sequence of rectangle bars will be drawn using a different color to represent each series and a legend to identify them will be drawn above the bars.

The bar colors and legend labels are configurable. The width and height of the component are also configurable. We recommend viewing the demo.html page to become aware of the configuration possibilities. We also recommend using the default settings as they are designed for proper performance.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line.

```
bower install px-simple-bar-chart --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-simple-bar-chart/px-simple-bar-chart.html"/>
```

Finally, use the component in your application:

```
<px-simple-bar-chart chart-data="[ [1,2,3] ]">
</px-simple-bar-chart>

<px-simple-bar-chart chart-data="[ [1,2,3], [1,2,3], [1,2,3] ]">
</px-simple-bar-chart>
```

<br />
<hr />

## Documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-simple-bar-chart/).

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.



### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-simple-bar-chart/issues) to submit any bugs you might find.
