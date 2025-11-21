# Pie

Pie - JavaScript library for creating graphs (In development)

## Usage

Here is an example of how to use Pie:
```html
<!DOCTYPE html>
<html>
    <head>
        <script src="pie.js"></script> <!-- Importing library file -->
    </head>
    <body>
        <div id="graphs"> <!-- Graphs container -->

        </div>
        <script>
            const g1 = newGraph("test", 500, 500); // Creating a new graph
            const ctx1 = g1.ctx; // Creating the graphs context
            addGraph("test", "graphs"); // Adding graph to container
            const n1 = newNode("gg", 250, 250); // Creating new line
            drawNode("gg", "test"); // Drawing line on the screen
        </script>
    </body>
</html>
```
This code will draw a black line that starts in the top left corner of browser tab and ends in center of the graph

## Pie documentation

You can read how to use Pie in the DOCUMENTATION.md file in the repository
