# Pie documentation

---

The content of documentation:

* [What is Pie](#what-is-pie)
* [Installation](#install-library)
* [Getting started](#getting-started)
    * [Graph arguments](#graph-arguments)
    * [Drawing lines](#drawing-lines)

---

## What is Pie

Pie - is the JavaScript graph library

[Back to content ->](#graph.js-documentation)

---

## Installation

To install Pie you need:
1. **Download** `pie.js` file on github
2. **Place** it in your project (Better create /libs folder in your project and put `pie.js` file into there)
3. **Add** script usage to your HTML file (If you placed the library file into the /libs folder, add this line to the `<head>` section of your HTML: `<script src="/libs/pie.js"></script>`)

**Done!** Now you can use library...

[Back to content ->](#graph.js-documentation)

---

## Getting started

To start working with Pie you need to create graphs container in your HTML file, example:
`<div id="graphs"></div>`
You can choose ID what ever you want.
Now let's create a new graph and add it to graphs container, example:

> const g1 = newGraph("test", 100, 200); <br>
> const ctx1 = g1.ctx; <br>
> addGraph("test", "graphs"); <br>

In first line we created new graph with name test and ID g1, then we created ctx and assigned that to our graph. And in last line we added graph to graphs container.

### Graph arguments

When we created a new graph we entered 3 arguments "test", 100 and 200, this is what it means:
`"test"` - Graphs name <br>
`100` - Graphs height <br>
`200` - Graphs width <br>
Then in third line we added graph to containe, this is what the arguments means:
`"test"` - Graphs name <br>
`"graphs"` - Container name <br>
You can enter different values of arguments but this is an example.

### Drawing lines

Now you can draw lines in your graph. Do to that you need to create a new node and then draw it, example:

> const n1 = newNode("testNode", 50, 100);
> drawNode("testNode", "test");

Where "testNode" is the node name, 50 - y value and 100 - x value


---
