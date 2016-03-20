(function() {
  'use strict';

  describe('Exercises in Recursion in Recursion in Recursion in...', function() {

    describe('1. Factorial', function() {

      it('should be a function', function() {
        expect(factorial).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(factorial(5))).to.equal('number');
      });

      it('should return factorial for non-negative integers', function() {
        expect(factorial(0)).to.equal(1);
        expect(factorial(1)).to.equal(1);
        expect(factorial(4)).to.equal(24);
        expect(factorial(5)).to.equal(120);
      });

      it('should return null for negative integers', function() {
        expect(factorial(-5)).to.equal(null);
      });

      it('should use recursion', function () {
        var originalFactorial = factorial;
        factorial = sinon.spy(factorial);
        factorial(4);
        expect(factorial.callCount).to.be.above(1);
        factorial = originalFactorial;
      });

    });



    describe('2. Sum of Integers', function() {

      it('should be a function', function() {
        expect(sum).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(sum([1,2,3,4,5,6]))).to.eql('number');
      });

      it('should return the sum of an array of non-negative integers', function() {
        expect(sum([1,2,3,4,5,6])).to.eql(21);
        expect(sum([12,34,56,78])).to.eql(180);
        expect(sum([3,0,34,7,18])).to.eql(62);
      });

      it('should return the sum of an array of negative integers', function() {
        expect(sum([-1,-2,-3,-4,-5,-6])).to.eql(-21);
        expect(sum([-12,-34,-56,-78])).to.eql(-180);
        expect(sum([-3,-0,-34,-7,-18])).to.eql(-62);
      });

      it('should return the sum of an array of mixed non-negative and negative integers', function() {
        expect(sum([1,-2,3,-4,5,-6])).to.eql(-3);
        expect(sum([-12,34,-56,78])).to.eql(44);
        expect(sum([3,0,-34,-7,18])).to.eql(-20);
      });

      it('should return undefined for an empty array', function() {
        expect(sum([])).to.eql(undefined);
      });

      it('should accept an array with a single integer', function() {
        expect(sum([4])).to.eql(4);
        expect(sum([0])).to.eql(0);
        expect(sum([-37])).to.eql(-37);
      });

      it('should not mutate the input array', function() {
        var input = [1,2,3,4,5];
        var result = sum(input);
        expect(input).to.eql([1,2,3,4,5]);
      });

      it('should use recursion', function () {
        var originalSum = sum;
        sum = sinon.spy(sum);
        sum([1,2,3,4,5,6]);
        expect(sum.callCount).to.be.above(1);
        sum = originalSum;
      });

    });



    describe('3. Sum Integers in Array', function() {

      it('should be a function', function() {
        expect(arraySum).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(arraySum([[1],[2,3],[[4]],5,6]))).to.eql('number');
      });

      it('should return the sum of an array with nested arrays of non-negative integers', function() {
        expect(arraySum([[1],[2,3],[[4]],5,6])).to.eql(21);
        expect(arraySum([[12,[[34],[56]],78]])).to.eql(180);
        expect(arraySum([3,[0,[34,[7,[18]]]]])).to.eql(62);
      });

      it('should return the sum of an array with nested arrays of negative integers', function() {
        expect(arraySum([[-1],[-2,-3],[[-4]],-5,-6])).to.eql(-21);
        expect(arraySum([[-12,[[-34],[-56]],-78]])).to.eql(-180);
        expect(arraySum([-3,[0,[-34,[-7,[-18]]]]])).to.eql(-62);
      });

      it('should return the sum of an array with nested arrays of mixed non-negative and negative integers', function() {
        expect(arraySum([[1],[-2,3],[[-4]],5,-6])).to.eql(-3);
        expect(arraySum([[-12,[[34],[-56]],78]])).to.eql(44);
        expect(arraySum([3,[0,[-34,[-7,[18]]]]])).to.eql(-20);
      });

      it('should return undefined for an empty array', function() {
        expect(arraySum([])).to.eql(0);
      });

      it('should accept an array with a single integer', function() {
        expect(arraySum([4])).to.eql(4);
        expect(arraySum([0])).to.eql(0);
        expect(arraySum([-37])).to.eql(-37);
      });

      it('should not mutate the input array', function() {
        var input = [[1],[2,3],[[4]],5,6];
        var result = arraySum(input);
        expect(input).to.eql([[1],[2,3],[[4]],5,6]);
      });

      it('should use recursion', function () {
        var originalArraySum = arraySum;
        arraySum = sinon.spy(arraySum);
        arraySum([[1],[2,3],[[4]],5,6]);
        expect(arraySum.callCount).to.be.above(1);
        arraySum = originalArraySum;
      });

    });



    describe('4. Check if Even', function() {

      it('should be a function', function() {
        expect(isEven).to.be.an.instanceOf(Function);
      });

      it('should return a boolean', function() {
        expect(typeof(isEven(5))).to.equal('boolean');
        expect(typeof(isEven(8))).to.equal('boolean');
        expect(typeof(isEven(-4))).to.equal('boolean');
      });

      it('should return true for even numbers', function() {
        expect(isEven(118)).to.equal(true);
        expect(isEven(10)).to.equal(true);
        expect(isEven(0)).to.equal(true);
        expect(isEven(-34)).to.equal(true);
      });

      it('should return false for odd numbers', function() {
        expect(isEven(117)).to.equal(false);
        expect(isEven(9)).to.equal(false);
        expect(isEven(1)).to.equal(false);
        expect(isEven(-33)).to.equal(false);
      });

      it('should work with negative integers', function() {
        expect(isEven(-14)).to.equal(true);
        expect(isEven(-81)).to.equal(false);
      });

      it('should use recursion', function () {
        var originalIsEven = isEven;
        isEven = sinon.spy(isEven);
        isEven(118);
        expect(isEven.callCount).to.be.above(1);
        isEven = originalIsEven;
      });

    });



    describe('5. Integer Range', function() {

      it('should be a function', function() {
        expect(range).to.be.an.instanceOf(Function);
      });

      it('should return an array', function() {
        expect(Array.isArray(range(2, 7))).to.equal(true);
      });

      it('should return the integers between two numbers', function() {
        expect(range(3,8)).to.eql([4,5,6,7]);
        expect(range(127,131)).to.eql([128,129,130]);
      });

      it('should return empty array if no integers in range', function() {
        expect(range(5,5)).to.eql([]);
        expect(range(2,3)).to.eql([]);
      });

      it('should accept negative integers', function() {
        expect(range(-9,-4)).to.eql([-8,-7,-6,-5]);
        expect(range(-3,2)).to.eql([-2,-1,0,1]);
        expect(range(-3,-2)).to.eql([]);
        expect(range(-2,-2)).to.eql([]);
      });

      it('should accept starting integer that\'s larger than ending', function() {
        expect(range(7,2)).to.eql([6,5,4,3]);
        expect(range(3,-3)).to.eql([2,1,0,-1,-2]);
        expect(range(-9,-4)).to.eql([-8,-7,-6,-5]);
      });

      it('should use recursion', function () {
        var originalRange = range;
        range = sinon.spy(range);
        range(3,8);
        expect(range.callCount).to.be.above(1);
        range = originalRange;
      });

    });



    describe('6. Compute Exponent', function() {

      it('should be a function', function() {
        expect(exponent).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(exponent(4,3))).to.eql('number');
      });

      it("should not use complex math", function() {
        expect(exponent.toString()).to.not.contain('Math');
      });

      it('should compute exponent of non-negative integers', function() {
        expect(exponent(3,4)).to.equal(81);
        expect(exponent(12,5)).to.equal(248832);
        expect(exponent(7,2)).to.equal(49);
      });

      it('returns 1 when exponent is 0', function() {
        expect(exponent(8,0)).to.equal(1);
        expect(exponent(244,0)).to.equal(1);
      });

      it('returns base when exponent is 1', function() {
        expect(exponent(9,1)).to.equal(9);
        expect(exponent(2300,1)).to.equal(2300);
      });

      // it('BONUS: should accept negative integer for base', function() {
      //   expect(exponent(-3,4)).to.equal(-81);
      //   expect(exponent(-12,5)).to.equal(-248832);
      //   expect(exponent(-7,2)).to.equal(-49);
      //   expect(exponent(-7,4)).to.equal(-2401);
      // });

      it('should accept negative integer for exponent', function() {
        expect(exponent(4,-2)).to.equal(0.0625);
        expect(exponent(5,-4)).to.equal(0.0016);
        expect(exponent(2,-5)).to.equal(0.03125);
      });

      it('should use recursion', function () {
        var originalExponent = exponent;
        exponent = sinon.spy(exponent);
        exponent(3,4);
        expect(exponent.callCount).to.be.above(1);
        exponent = originalExponent;
      });

    });



    describe('7. Reverse String', function() {

      it('should be a function', function() {
        expect(reverse).to.be.an.instanceOf(Function);
      });

      it('should return a string', function() {
        expect(typeof(reverse('orangutan'))).to.equal('string');
      });

      it('should return a string in reverse', function() {
        var poem = 'Roses are red, violets are blue, all my base are belong to you.';

        expect(reverse('Racecar')).to.equal('racecaR');
        expect(reverse(poem)).to.equal('.uoy ot gnoleb era esab ym lla ,eulb era steloiv ,der era sesoR');
      });

      it('should not mutate the input string', function() {
        var input = 'orangutan';
        var result = reverse(input);
        expect(input).to.eql('orangutan');
      });

      it('should use recursion', function () {
        var originalReverse = reverse;
        reverse = sinon.spy(reverse);
        reverse('orangutan');
        expect(reverse.callCount).to.be.above(1);
        reverse = originalReverse;
      });

    });



    describe('8. Palindrome', function() {

      it('should be a function', function() {
        expect(palindrome).to.be.an.instanceOf(Function);
      });

      it('should return a boolean', function() {
        expect(typeof(palindrome('rotor'))).to.equal('boolean');
        expect(typeof(palindrome('motor'))).to.equal('boolean');
      });

      it('should return true for palindromes', function() {
        expect(palindrome('rotor')).to.eql(true);
        expect(palindrome('racecar')).to.eql(true);
        expect(palindrome('saippuakivikauppias')).to.eql(true);
      });

      it('should return false for non-palindromes', function() {
        expect(palindrome('motor')).to.eql(false);
        expect(palindrome('orangutan')).to.eql(false);
        expect(palindrome('antidisestablishmentarianism')).to.eql(false);
      });

      it('should ignore spaces and capital letters', function() {
        expect(palindrome('Rotor')).to.eql(true);
        expect(palindrome('race caR')).to.eql(true);
        expect(palindrome('sAip puaki v iKaup Pias')).to.eql(true);
      });

      it('should use recursion', function () {
        var originalPalindrome = palindrome;
        palindrome = sinon.spy(palindrome);
        palindrome('saippuakivikauppias');
        expect(palindrome.callCount).to.be.above(1);
        palindrome = originalPalindrome;
      });

    });



    describe('9. Modulo', function() {

      it('should be a function', function() {
        expect(modulo).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(modulo(5,2))).to.equal('number');
        expect(typeof(modulo(8,4))).to.equal('number');
      });

      it("should not use complex math", function() {
        expect(modulo.toString()).to.not.contain('*');
        expect(modulo.toString()).to.not.contain('/');
        expect(modulo.toString()).to.not.contain('%');
        expect(modulo.toString()).to.not.contain('Math');
      });

      it('should return the remainder of two integers', function() {
        expect(modulo(2, 1)).to.equal(2 % 1);
        expect(modulo(17, 5)).to.equal(17 % 5);
        expect(modulo(78, 453)).to.equal(78 % 453);
        expect(modulo(-79, 82)).to.equal(-79 % 82);
        expect(modulo(-275, -502)).to.equal(-275 % -502);
        expect(modulo(0, 32)).to.equal(0 % 32);
        expect(modulo(0, 0).toString()).to.equal('NaN');
      });

      it('should use recursion', function () {
        var originalModulo = modulo;
        modulo = sinon.spy(modulo);
        modulo(5,2);
        expect(modulo.callCount).to.be.above(1);
        modulo = originalModulo;
      });

    });



    describe('10. Multiply', function() {

      it('should be a function', function() {
        expect(multiply).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(multiply(5,2))).to.equal('number');
        expect(typeof(multiply(8,4))).to.equal('number');
      });

      it("should not use complex math", function() {
        expect(multiply.toString()).to.not.contain('*');
        expect(multiply.toString()).to.not.contain('/');
        expect(multiply.toString()).to.not.contain('%');
        expect(multiply.toString()).to.not.contain('Math');
      });

      it('should return the product of two integers', function() {
        expect(multiply(2, 1)).to.equal(2 * 1);
        expect(multiply(17, 5)).to.equal(17 * 5);
        expect(multiply(78, 453)).to.equal(78 * 453);
        expect(multiply(-79, 82)).to.equal(-79 * 82);
        expect(multiply(-275, -502)).to.equal(-275 * -502);
        expect(multiply(0, 32)).to.equal(0 * 32);
        expect(multiply(0, 0)).to.equal(0 * 0);
      });

      it('should use recursion', function () {
        var originalMultiply = multiply;
        multiply = sinon.spy(multiply);
        multiply(8,4);
        expect(multiply.callCount).to.be.above(1);
        multiply = originalMultiply;
      });

    });



    describe('11. Divide', function() {

      it('should be a function', function() {
        expect(divide).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(divide(5,2))).to.equal('number');
        expect(typeof(divide(8,4))).to.equal('number');
      });

      it("should not use complex math", function() {
        expect(divide.toString()).to.not.contain('*');
        expect(divide.toString()).to.not.contain('/');
        expect(divide.toString()).to.not.contain('%');
        expect(divide.toString()).to.not.contain('Math');
      });

      it('should return the quotient of two integers', function() {
        expect(divide(2, 1)).to.equal(~~(2 / 1));
        expect(divide(17, 5)).to.equal(~~(17 / 5));
        expect(divide(78, 453)).to.equal(~~(78 / 453));
        expect(divide(-79, 82)).to.equal(~~(-79 / 82));
        expect(divide(-275, -582)).to.equal(~~(-275 / -582));
        expect(divide(0, 32)).to.equal(~~(0 / 32));
        expect(divide(0, 0).toString()).to.equal('NaN');
      });

      it('should use recursion', function () {
        var originalDivide = divide;
        divide = sinon.spy(divide);
        divide(17, 5);
        expect(divide.callCount).to.be.above(1);
        divide = originalDivide;
      });

    });



    describe('12. Greatest Common Divisor', function() {

      it('should be a function', function() {
        expect(gcd).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(gcd(4,36))).to.equal('number');
      });

      it('should return greatest common divisor of two positive integers', function() {
        expect(gcd(4,36)).to.equal(4);
        expect(gcd(24,88)).to.equal(8);
        expect(gcd(339,17)).to.equal(1);
        expect(gcd(126,900)).to.equal(18);
      });

      it('should return null for negative integers', function() {
        expect(gcd(-4, 2)).to.equal(null);
        expect(gcd(-5, 5)).to.equal(null);
        expect(gcd(5, -5)).to.equal(null);
        expect(gcd(7, -36)).to.equal(null);
        expect(gcd(-10, -58)).to.equal(null);
        expect(gcd(-92, -5)).to.equal(null);
        // expect(gcd(0, 0)).to.equal(null);
        // expect(gcd(0, 5)).to.equal(null);
        // expect(gcd(5, 0)).to.equal(null);
        // expect(gcd(-5, 0)).to.equal(null);
        // expect(gcd(0, -5)).to.equal(null);
      });

      it('should use recursion', function () {
        var originalGcd = gcd;
        gcd = sinon.spy(gcd);
        gcd(17, 5);
        expect(gcd.callCount).to.be.above(1);
        gcd = originalGcd;
      });

    });



    describe('13. Compare Strings', function() {

      it('should be a function', function() {
        expect(cmpStr).to.be.an.instanceOf(Function);
      });

      it('should return a boolean', function() {
        expect(typeof(cmpStr('house', 'houses'))).to.equal('boolean');
        expect(typeof(cmpStr('', ''))).to.equal('boolean');
        expect(typeof(cmpStr('tomato', 'tomato'))).to.equal('boolean');
      });

      it('should return true for identical strings', function() {
        expect(cmpStr('house', 'houses')).to.eql(false);
        expect(cmpStr('', '')).to.eql(true);
        expect(cmpStr('tomato', 'tomato')).to.eql(true);
        expect(cmpStr('', 'pop')).to.eql(false);
        expect(cmpStr('foot', '')).to.eql(false);
        expect(cmpStr('big dog', 'big dog')).to.eql(true);
      });

      it('should use recursion', function () {
        var originalCmpStr = cmpStr;
        cmpStr = sinon.spy(cmpStr);
        cmpStr('house', 'houses');
        expect(cmpStr.callCount).to.be.above(1);
        cmpStr = originalCmpStr;
      });

    });



    describe('14. Create array from string', function() {

      it('should be a function', function() {
        expect(createArray).to.be.an.instanceOf(Function);
      });

      it('should return an array', function() {
        expect(Array.isArray(createArray('hello'))).to.equal(true);
      });

      it('should return an array where each index is a letter of the string', function() {
        expect(createArray('hello')).to.eql(['h','e','l','l','o']);
        expect(createArray('this is not a pipe')).to.eql(['t','h','i','s',' ','i','s',' ','n','o','t',' ','a',' ','p','i','p','e']);
        expect(createArray('hologram')).to.eql(['h','o','l','o','g','r','a','m']);
        expect(createArray('i')).to.eql(['i']);
      });

      it('should use recursion', function () {
        var originalCreateArray = createArray;
        createArray = sinon.spy(createArray);
        createArray('hello');
        expect(createArray.callCount).to.be.above(1);
        createArray = originalCreateArray;
      });

    });



    describe('15. Reverse an array', function() {

      it('should be a function', function() {
        expect(reverseArr).to.be.an.instanceOf(Function);
      });

      it('should return an array', function() {
        expect(Array.isArray(reverseArr([5,4,3,2,1]))).to.equal(true);
      });

      it('should return array in reversed order', function() {
        expect(reverseArr([1,2,3,4,5])).to.eql([5,4,3,2,1]);
        expect(reverseArr([5,4,3,2,1])).to.eql([1,2,3,4,5]);
        expect(reverseArr([2,4,6,8])).to.eql([8,6,4,2]);
        expect(reverseArr([8,6,4,2])).to.eql([2,4,6,8]);
      });

      it('should use recursion', function () {
        var originalReverseArr = reverseArr;
        reverseArr = sinon.spy(reverseArr);
        reverseArr([5,4,3,2,1]);
        expect(reverseArr.callCount).to.be.above(1);
        reverseArr = originalReverseArr;
      });

    });



    describe('16. Build an array with a given value and length', function() {

      it('should be a function', function() {
        expect(buildList).to.be.an.instanceOf(Function);
      });

      it('should return an array', function() {
        expect(Array.isArray(buildList(0,5))).to.equal(true);
      });

      it('should return array of given length with given value at each index', function() {
        expect(buildList(0, 5)).to.eql([0,0,0,0,0]);
        expect(buildList('banana', 3)).to.eql(['banana','banana','banana']);
        expect(buildList(NaN, 4)).to.eql([NaN, NaN, NaN, NaN]);
        expect(buildList(undefined, 1)).to.eql([undefined]);
        expect(buildList([], 2)).to.eql([[],[]]);
        expect(buildList({}, 4)).to.eql([{},{},{},{}]);
        expect(buildList(true, 3)).to.eql([true,true,true]);
        expect(buildList(5+5, 3)).to.eql([10,10,10]);
      });

      it('should use recursion', function () {
        var originalBuildList = buildList;
        buildList = sinon.spy(buildList);
        buildList(2,7);
        expect(buildList.callCount).to.be.above(1);
        buildList = originalBuildList;
      });

    });



    describe('17. Count value in array', function() {

      it('should be a function', function() {
        expect(countOccurrence).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(countOccurrence([2,7,4,4,1,4], 4))).to.equal('number');
        expect(typeof(countOccurrence([2,'banana',4,4,1,'banana'], 'banana'))).to.equal('number');
      });

      it('should return the number of occurrences of the value', function() {
        expect(countOccurrence([2,7,4,4,1,4], 4)).to.eql(3);
        expect(countOccurrence([2,'banana',4,4,1,'banana'], 'banana')).to.eql(2);
        expect(countOccurrence([undefined,7,undefined,4,1,4], undefined)).to.eql(2);
        expect(countOccurrence(['',7,null,0,'0',false], 0)).to.eql(1);
        expect(countOccurrence(['',7,null,0,'0',false], false)).to.eql(1);
        expect(countOccurrence(['',7,null,0,'0',false], null)).to.eql(1);
        expect(countOccurrence(['',7,null,0,'0',false], '')).to.eql(1);
        // expect(countOccurrence(['',7,null,0,NaN,'0',false], NaN)).to.eql(1);
      });

      it('should use recursion', function () {
        var originalCountOccurrence = countOccurrence;
        countOccurrence = sinon.spy(countOccurrence);
        countOccurrence([2,7,4,4,1,4], 4);
        expect(countOccurrence.callCount).to.be.above(1);
        countOccurrence = originalCountOccurrence;
      });

    });



    describe('18. Count key in object', function() {
      var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};

      it('should be a function', function() {
        expect(countKeysInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(countKeysInObj(input, 'r'))).to.equal('number');
        expect(typeof(countKeysInObj(input, 'e'))).to.equal('number');
        expect(typeof(countKeysInObj(input, 'p'))).to.equal('number');
      });

      it('should return the number of occurrences of the property', function() {
        expect(countKeysInObj(input, 'e')).to.eql(2);
        expect(countKeysInObj(input, 'x')).to.eql(1);
        expect(countKeysInObj(input, 'y')).to.eql(2);
        expect(countKeysInObj(input, 't')).to.eql(1);
        expect(countKeysInObj(input, 'r')).to.eql(1);
        expect(countKeysInObj(input, 'p')).to.eql(1);
      });

      it('should use recursion', function () {
        var originalCountKeysInObj = countKeysInObj;
        countKeysInObj = sinon.spy(countKeysInObj);
        countKeysInObj(input, 'e');
        expect(countKeysInObj.callCount).to.be.above(1);
        countKeysInObj = originalCountKeysInObj;
      });

    });



    describe('19. Count value in object', function() {
      var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });

      it('should use recursion', function () {
        var originalCountValuesInObj = countValuesInObj;
        countValuesInObj = sinon.spy(countValuesInObj);
        countValuesInObj(input, 'r');
        expect(countValuesInObj.callCount).to.be.above(1);
        countValuesInObj = originalCountValuesInObj;
      });

    });



    describe('20. Replace keys in object', function() {

      it('should be a function', function() {
        expect(replaceKeysInObj).to.be.an.instanceOf(Function);
      });

      it('should return an object', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(replaceKeysInObj(input, 'r', 'a'))).to.equal('object');
        expect(typeof(replaceKeysInObj(input, 'e', 0))).to.equal('object');
      });

      it('should return object containing renamed keys', function() {
        var input  = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}}, 'y':'e'};
        var output = {'f': {'x':'y'}, 't':{'r': {'f':'r'}, 'p': {'y':'r'}}, 'y':'e'};

        replaceKeysInObj(input, 'e', 'f');

        var keyCount = 0;
        for (var k in input) keyCount++;
        expect(keyCount).to.equal(3);

        expect(input.e).to.equal(undefined);
        expect(input.f.x).to.equal('y');
        expect(input.t.r.e).to.equal(undefined);
        expect(input.t.r.f).to.equal('r');
        expect(input.t.p.y).to.equal('r');
        expect(input.y).to.equal('e');

        expect(input.hasOwnProperty('e')).to.equal(false);
        expect(input.hasOwnProperty('f')).to.equal(true);
        expect(input.hasOwnProperty('t')).to.equal(true);
        expect(input.hasOwnProperty('y')).to.equal(true);

        expect(input.t.hasOwnProperty('r')).to.equal(true);
        expect(input.t.hasOwnProperty('p')).to.equal(true);

        expect(input.t.r.hasOwnProperty('e')).to.equal(false);
        expect(input.t.r.hasOwnProperty('f')).to.equal(true);
        expect(input.t.p.hasOwnProperty('y')).to.equal(true);
      });

      it('should use recursion', function () {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        var originalReplaceKeysInObj = replaceKeysInObj;
        replaceKeysInObj = sinon.spy(replaceKeysInObj);
        replaceKeysInObj(input, 'r', 'a');
        expect(replaceKeysInObj.callCount).to.be.above(1);
        replaceKeysInObj = originalReplaceKeysInObj;
      });

    });


    describe('21. First n Fibonacci', function() {

      it('should be a function', function() {
        expect(fibonacci).to.be.an.instanceOf(Function);
      });

      it('should return an array', function() {
        expect(Array.isArray(fibonacci(5))).to.equal(true);
      });

      it('should return first n Fibonacci numbers where n starts at index 1', function() {
        expect(fibonacci(1)).to.eql([0, 1]);
        expect(fibonacci(2)).to.eql([0, 1, 1]);
        expect(fibonacci(3)).to.eql([0, 1, 1, 2]);
        expect(fibonacci(4)).to.eql([0, 1, 1, 2, 3]);
        expect(fibonacci(5)).to.eql([0, 1, 1, 2, 3, 5]);
        expect(fibonacci(12)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
      });

      it('should return null for zero and negative integers', function() {
        expect(fibonacci(0)).to.equal(null);
        expect(fibonacci(-7)).to.equal(null);
      });

      it('should use recursion', function () {
        var originalFibonacci = fibonacci;
        fibonacci = sinon.spy(fibonacci);
        fibonacci(5);
        expect(fibonacci.callCount).to.be.above(1);
        fibonacci = originalFibonacci;
      });

    });



    describe('22. Return nth Fibonacci', function() {

      it('should be a function', function() {
        expect(nthFibo).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(nthFibo(5))).to.equal('number');
      });

      it('should return the nth Fibonacci number', function() {
        expect(nthFibo(0)).to.eql(0);
        expect(nthFibo(1)).to.eql(1);
        expect(nthFibo(2)).to.eql(1);
        expect(nthFibo(3)).to.eql(2);
        expect(nthFibo(4)).to.eql(3);
        expect(nthFibo(5)).to.eql(5);
        expect(nthFibo(12)).to.eql(144);
      });

      it('should return null for negative integers', function() {
        expect(nthFibo(-5)).to.equal(null);
        expect(nthFibo(-7)).to.equal(null);
      });

      it('should use recursion', function () {
        var originalNthFibo = nthFibo;
        nthFibo = sinon.spy(nthFibo);
        nthFibo(5);
        expect(nthFibo.callCount).to.be.above(1);
        nthFibo = originalNthFibo;
      });

    });



    describe('23. Capitalize words in array', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('24. Capitalize first letter of words in array', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('25. Sum even numbers in nested objects', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('26. Flatten nested arrays', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('27. Eliminate consecutive duplicates', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('28. Augment each value in nested arrays', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('29. Minimize zeroes', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('30. Alternate sign', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('31. Convert numbers to text', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });

  });
}());
