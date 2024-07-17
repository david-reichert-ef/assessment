This set of files acts as all the static content needed to run a leadership type assessment for desktop and mobile.

## Usage
To play with this locally, simply double click the `index.html` file to run the assessment in a web browser.
Question text can easily be modified by opening up the same file in Notepad and modifying the associated questions and answers.

## Modification
Questions can be added or removed within the index.html file as long as you keep to the format below. 
In this case you can modify the values of `MY VERY GOOD QUESTION`, `THOUGHTFUL ANSWER A`, `THOUGHTFUL ANSWER B`, `THOUGHTFUL ANSWER C` and `THOUGHTFUL ANSWER D`.
As long as you keep all the divs and stuff that are between `<div class="question">` and the final `</div>` it will automatically work regardless of number of questions.

```
<div class="question">
    <h2>MY VERY GOOD QUESTION</h2>
        <div class="sortable-container">
        <div class="sortable-item" data-category="A">THOUGHTFUL ANSWER A</div>
        <div class="sortable-item" data-category="B">THOUGHTFUL ANSWER B</div>
        <div class="sortable-item" data-category="C">THOUGHTFUL ANSWER C</div>
        <div class="sortable-item" data-category="D">THOUGHTFUL ANSWER D</div>
    </div>
</div>
```

## Deployment
These are all static pages so they don't need any complicated hosting environments to be useful. As long as these four files are available in a publicly accessible folder online it will just work.

## Potential enhancements
1. If a person navigated away from the page it would reset their sorted order and score. This could be enhanced by adding a cookie to maintain the state.
2. It might be nice to take people to another web page that would show the different attributes of each leadership type.
3. Right now the choices are always listed in a DOER - THINKER - FEELER - PLANNER ordered format. These could either be randomly ordered each time, or for simplicity, simply swapped around in the original index.html file. It will all automatically work regardless of order as long as the data-category letter isn't changed.

