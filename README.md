# FizzBuzz with Nothing Kata

Exercise to practice working with functions.

## Assignment: FizzBuzz

Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and 
for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".

### Sample Solution

    for (int i = 1; i <= 100; i++) {
        if (i % 3*5 == 0) 
            print("FizzBuzz");
        else if (i % 3 == 0) 
            print("Fizz");
        else if (i % 5 == 0) 
            print("Buzz");
        else 
            print(Integer.toString(i));
    }

## Constraint: With Nothing

We are allowed to

* Create functions with one argument
* Call functions and return a result
* Assign functions to names (abbreviate as constants)

We are not allowed to

* Use numbers, booleans, strings, arrays, etc.
* Create objects, control flow, assignment, etc.
* Use the Standard Library

## Your Task

Implement FizzBuzz "with nothing". Buw how do we represent numbers, booleans, etc. using no data, only code? All we can do is make or call a function. This exercise is hard. 

### What do we need for FizzBuzz

* Numbers: constant values 0, 1, 3, 5, 15, 100; Adding 1, Mod (needs Div needs Sub)
* Booleans: True, False, If-Then-Else, a loop; predicates to compare two numbers <=, equality to zero
* Characters (are numbers using ASCII)
* Strings (needs List needs Pair)
* Print strings (use <i>Console.log</i>)
* Convert numbers to string

## License

[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause), see `LICENSE` in repository.
