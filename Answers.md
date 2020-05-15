1. What problem does the context API help solve?

`It helps to make initial state be immutable so that there is and application state vs component state`

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`Actions create new state, reducers take initial state copy it and produce state that can be updated, the store is how you pass state from the reducer to the application.`

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

`Applicaton state provides an intial state that never changes but through reducers can be copied and updated to return new state. Component State allows you to change state directly. I believe Application state is best when building a whole application so the back-end and front-end work together to create new state without changing old state, component state is best used only when you need a fast answer but would be worth checking things out before updating to application state.`

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`Redux thunk is a middleware program that helps us be able to tell application state when to update through async actions.`

1. What is your favorite state management system you've learned and this sprint? Please explain why!

`Last month I really hated redux but after diving deep into it and really taking the time to use it, I think i like redux the most. I can see how it can be useful however it can be frustrating at times`
