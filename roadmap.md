# V1

Hypothesis:
1000 reps in the 20% of wrestling that makes up 80% will get kids from novice to advanced

An overview of techniques
A way to quickly create practice plans
A way to visualize the hight level technique plan
A way to store content related to the technique

- [x] Type map.tsx
- [x] Add click on overlay to the panel component
- [x] Make practice plan boxed a fixed height for different areas
- [x] add a print/copy practice plan feature
- [x] make usable on mobile
- [x] deploy
- [x] stop the same item from the same position being added more than once to a practice plan
- [x] nx-ize the code
- [x] styling
- [x] make content adjust on resize
- [x] create github repo
- [x] remove from practice plan button
- [ ] add error handling

- [x] connect to firebase firestore

- [x] data migration

```js
// old model
type practicePlan = {
  top: string[],
  bottom: string[],
  neutral: string[],
};

{
  neutral: [{position: 'open', moves: ['double', 'single']}, {position: 'underhook', moves: ['single', 'fake and snap']}],
  top: [],
  bottom: []
}

type NewPracticePlan = {
  date: datetime,
  moves: moves[],
};

type moves = {
  name: string,
  position: 'open' | 'inside tie' | '...',
  area: 'top' | 'bottom' | 'neutral',
  level: 'JV' | 'Varsity' | 'State Qualifier' | 'State Placer',
};
```

- [x] add moves to db
- [x] make moves request in map
- [x] group practice plan by position
- [x] derive practice plan UI view data from model data
- [x] add save button to practice plan create
- [x] make positions in practice plan details components
- [x] practice plan index
- [x] practice plan create
- [x] practice plan update
- [x] practice plan delete
- [x] fix dates in practice plan index

---

# V2

- [x] update styling on practice plan page
- [x] add ability to set date on practice plan create/update
- [ ] prevent same move from being added twice
- [x] add a toast component that appears and tells user of following errors/events:

- adding a move that already exists to a practice plan
- deleting a practice plan
- creating a practice plan
- copying practice plan

- [ ] practice plan index search/scoping/filtering
- [x] add most recent review to moves (number of days since last reviewed)
- [ ] Quick add for moves that haven't been reviewed in x number of days

- [x] add CD to github actions
- [x] add CI checks to github actions

- [ ] consolidate duplicated functions (get moves data) (data fetching functions)
- [ ] add unit tests
- [ ] copy router to 404.html in build step so github pages can figure out where to route you or use hashRouter

- [ ] nx-ize the firebase config/init file

- [ ] make admin interface with ability to add moves (ts types dynamically created??)
- [ ] make filter system for move levels in create practice plan menu
- [ ] differentiate moves by level in create practice plan menu (stylistically)
- [ ] finish building out move levels
- [x] add e2e tests
- [ ] add msw mock handlers for e2e tests

Code refactor:

- [x] separate react components
- [ ] react components should follow the SRP principle
- [x] add map.tsx to map-items feature lib
- [ ] code should follow a functional paradigm
- [ ] code should follow dependency injection
- [ ] all functions should be pure

- content-map.tsx
- map.tsx
- svg-circle.tsx
- practice-plan.tsx

nice to have

- [x] make the panel transition out of view nicely
- [ ] Add curved lines between svg circles
- [x] panel animation
- [ ] modal animation
- [ ] toast animate in and out

---

# Modeling Wrestling Skill Acquisition

How do we model the skills, positions, knowledge, competencies,etc that you need to be good at for wrestling
How do we then turn that into a system?
What is the framework for building wrestling competency?
Wrestlers need to develop a set of skills, strength and conditioning, beliefs and attitudes

3 areas - top, bottom, neutral
positions make an area - bottom (base, belly, bottom, back)
move - a way to score points or change position

when someone does a move different than the way we teach it we say they have bad technique
when someone doesnt know the move they have no technique in that area
someone good at wrestling understands the following things in a position

1. what moves they have available
2. what options the opponent has available
3. what "look" they need for a certain move to be effective
4. How to defend the opponents moves from this position
5. What comes next from a certain move and all previous for what comes next

Fundamentals - 20% of wrestling that makes up 80% of the wrestling that you see
neutral -

handfighting:

- changing ties
- elbow pass
- pummel inside
- slide by
- duck under
- wrist snap

ties:

- inside tie
- outside tie
- collar tie
- russian tie
- underhook
- overhook
- under/over
- double unders

leg attacks:

- single leg
- double leg
- high c
- low single

finishes:

- high c
  - crackdown
  - corner and run
  - snake
- single
  - on feet
    - lift and sweep
    - turn knee down double
    - jump rope
    - run the pipe
  - on the mat
    - chase corner
    - waterfall
- double
  - blast double
  - corner and run
- low single
  - throw hand to hip and circle
  - waterfall
    - isolate one, swing to hip, scoop the leg, clear your head

throws:

- over under
- headlock

defense

- sprawl and square up
- whizzer

bottom

- base
  - hold a base
  - clear a cross wrist
  - clear a near wrist
  - chicken wing defense
  - half defense
  - cradle defense
  - leg ride defense
  - stand up
  - switch
  - sit out
- belly
  - base up
- back
  - arm across my belly (half)
  - arm to the hip pocket (headlock)
- butt
  - turn in
  - clear seal hip heist
  - head gizzoni
- feet
- break grip
- not get lifted

top:

## Icons

https://icones.js.org/collection/octicon
