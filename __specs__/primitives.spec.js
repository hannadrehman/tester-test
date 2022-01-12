describe('passing cases for primitives',()=>{

  it('should test basic number',()=>{
     expect(2).toBe(2);
  })

  it('should test basic number evaluated',()=>{
     expect(2+2).toBe(4);
  })

  it('should test basic negative number ',()=>{
     expect(-2).toBe(-2);
  })

  it('should work on booleans',()=>{
   expect(true).toBe(true)
   expect(false).toBe(false)
  });

  it('should test truthy values',()=>{
    expect(true).toBeTruthy()
    expect(1).toBeTruthy()
  });

})

describe('passing cases for negating conditions in primitives primitives',()=>{

  it('should test basic number',()=>{
     expect(2).not.toBe(3);
  })

  it('should test basic number evaluated',()=>{
     expect(2+2).not.toBe(5);
  })

  it('should work on booleans',()=>{
   expect(false).not.toBe(true)
   expect(true).not.toBe(false)
  });

  it('should negate truthy values',()=>{
     expect(false).not.toBeTruthy()
  });

})

/*
 * uncomment to run all failing tests
 *
 * */


/*
describe('failing test cases',()=>{
  it('should test basic number',()=>{
     expect(2).toBe(3);
  })

  it('should work on booleans',()=>{
   expect(false).toBe(true)
  });

  it('should negate truthy values',()=>{
     expect(true).not.toBeTruthy()
  });
})
*/
