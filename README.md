# tester-test

## implement folowing functionality from jest in runner/index.js

```
describe
it
expect
toBe
toBeTruthy
not
```

example
```
decribe('define what test does in this string', ()=>{

     it('define what exactly you are testing',()=>{

     })
})
```

test cases are in `__specs__` directory

All tests should pass with local test runner.
all failing tests should also fail with local test runner

jest adds alot of cosmetics to the tests, we can ignore it.
we should be able to see what tests passed, and what failed.
if we can tell why a test failed. its a bonus point
we are only testing primitive data types. number,string,booleans.
it should work on other examples too which are not mentioned in the spec files.

run `yarn test:jest` to run jest test runner
run `yarn test:local` to run local test runner
