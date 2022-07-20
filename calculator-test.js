
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 0, years: 0, rate: 0 })).toEqual('NaN');
});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 12000, years: 3, rate: .15 })).toEqual('415.98');
});

/// etc
