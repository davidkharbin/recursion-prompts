(function() {
  'use strict';

  describe('More Exercises in Recursion', function() {

    describe('32. Count tags', function() {

      it('should be a function', function() {
        expect(tagCount).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(tagCount(input, 'r'))).to.equal('number');
        expect(typeof(tagCount(input, 'e'))).to.equal('number');
        expect(typeof(tagCount(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(tagCount(input, 'e')).to.eql(1);
        expect(tagCount(input, 'x')).to.eql(0);
        expect(tagCount(input, 'y')).to.eql(1);
        expect(tagCount(input, 't')).to.eql(0);
        expect(tagCount(input, 'r')).to.eql(2);
        expect(tagCount(input, 'p')).to.eql(0);
      });
    });



    describe('33. Binary Search', function() {

      it('should be a function', function() {
        expect(binarySearch).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = [1,2,3,4,5];
        expect(typeof(binarySearch(input, 3))).to.eql('number');
      });

      it('should not mutate the input array', function() {
        var input = [1,2,3,4,5];
        var result = binarySearch(input, 4);
        expect(input).to.eql([1,2,3,4,5]);
      });

      it('should return null if target not found', function() {
        var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
        expect(binarySearch([1,2,3,4,5], 6)).to.eql(null);
        expect(binarySearch(primes, 32)).to.eql(null);
      });

      it('should return index of target', function() {
        var input1 = [1,2,3,4,5,6];
        var input2 = [1,2,3,4,5,6,7];
        var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
        expect(binarySearch(input1, 1)).to.eql(0);
        expect(binarySearch(input1, 2)).to.eql(1);
        expect(binarySearch(input1, 3)).to.eql(2);
        expect(binarySearch(input1, 4)).to.eql(3);
        expect(binarySearch(input1, 5)).to.eql(4);
        expect(binarySearch(input1, 6)).to.eql(5);
        expect(binarySearch(input2, 1)).to.eql(0);
        expect(binarySearch(input2, 2)).to.eql(1);
        expect(binarySearch(input2, 3)).to.eql(2);
        expect(binarySearch(input2, 4)).to.eql(3);
        expect(binarySearch(input2, 5)).to.eql(4);
        expect(binarySearch(input2, 6)).to.eql(5);
        expect(binarySearch(input2, 7)).to.eql(6);
        expect(binarySearch(primes,19)).to.eql(7);
        expect(binarySearch(primes,59)).to.eql(16);
      });
    });



    describe('34. Merge Sort', function() {

      it('should be a function', function() {
        expect(mergeSort).to.be.an.instanceOf(Function);
      });

      it('should return an array', function() {
        var numbers = [8,2,20,1,15];
        var sortedNumbers = mergeSort(numbers);
        expect(Array.isArray(sortedNumbers)).to.equal(true);
      });

      it('should not mutate the input array', function() {
        var numbers = [8,2,20,1,15];
        var sortedNumbers = mergeSort(numbers);
        expect(numbers).to.eql([8,2,20,1,15]);
      });

      it('should sort an array of numbers in order of least to greatest', function() {
        var numbers = [8,2,20,1,15];
        var sortedNumbers = mergeSort(numbers);
        expect(sortedNumbers).to.eql([1,2,8,15,20]);
      });

      it('should be able to handle negative numbers', function() {
        var numbers = [8,-2,20,1,-15];
        var sortedNumbers = mergeSort(numbers);
        expect(sortedNumbers).to.eql([-15,-2,1,8,20]);
      });
    });

  });
}());
