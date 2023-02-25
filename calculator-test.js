
it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {amount: 25000, years: 5, rate: 5.5};
    expect(calculateMonthlyPayment(values)).toEqual('477.53');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    // ..
    const values = {amount: 100000, years: 5, rate: 8.2};
    expect(calculateMonthlyPayment(values)).toEqual('2037.22');
  });
  
  it ("should throw an error if string is entered", function(){
    const values = NaN;
    expect(calculateMonthlyPayment(values)).toThrow(new Error( "Please enter a number"));
  })
  