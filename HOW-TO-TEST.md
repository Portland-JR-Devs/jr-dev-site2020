# HOW TO TEST

Using Example.js as an example I'll describe how to do test driven development.

In a perfect world [Example.js](./src/components/example/Example.js) would be written after first planning the component and then writing tests for the component.

## TESTING FOR EXPECTED CONTENT

In planning, we know we want the component to have a title. Our first test checks that the title is rendered.

First we **arrange** the test by using the React Testing Library's `render()` method to create an instance of the component.

Next we **act** by getting the element we are expecting to be in the component, finding by the text we expect it to have.

Then we can **assert** that:

- the element has the correct text.

Run `npm test`. If you haven't created the component yet, it will fail. Now you can write a component that will make the tests pass.

All you need is a component that has an element like:

```
<h2>Zombie Apocalyse</h2>
```

## TESTING FOR EXPECTED BEHAVIOR

In planning, we know we want a button. When the button is clicked we want to:

- display a message to the user
- change the button text

We have decided that:

1. there will be no message until the button is clicked;
2. that the button will say "Dead Inside" when the component is first instantiated.
3. that there will be a message after the button is clicked.
4. that the button will say "ZOMBIES!!!"
5. that the button will be disabled after it is clicked

We **arrange** the test by rendering the component. `render()` has a bunch of methods and here we are destructing it to get the specific methods we want.

We **assert** that our first two criteria are met when the component is instantiated.

We **act** by clicking the button.

We **assert** that our last three criteria are met after the button is clicked.

Run `npm test` and these will fail because there is no logic to make this happen.

I mimicked the logic used in the React Testing Library's example in the ExampleComponent, but you might write the logic to make these tests pass in some other way.
