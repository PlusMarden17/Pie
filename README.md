# Graph.js

Graph.js - JavaScript бібліотека для створення алгебраїчних графіків.

## Використання

Ось приклад використання Graph.js:
```html
<!DOCTYPE html>
<html>
    <head>
        <script src="graph.js"></script>
    </head>
    <body>
        <div id="graphs"></div>
        <script>
            const graph = new Graph(600, 600);
            graph.add("graphs");
            graph.draw("6000 / x");
        </script>
    </body>
</html>
```
Цей код створює графік graph, додає його в контейнер графіків graphs і малює функцію 6000 / x на графіку (Гіпербола). Ось як це виглядає:

<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/113f02df-7cf9-4031-90bd-4cfd55adf121" />

## Документація

Ви можете прочитати як використовувати бібліотеку в файлі DOCUMENTATION.md в цьому GitHub репозиторії
