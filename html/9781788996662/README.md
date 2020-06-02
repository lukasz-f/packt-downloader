# Learn Python Programming Cheat Sheet
### Chapter1 A Gentle Introduction to Python
* python programming: imperative (procedural, object oriented), functional
* python object features: id (unique), type, value
* python portability: as much as used libraries (isn’t really any more portable than C is)
* python drawbacks: execution speed
* python env: ALWAYS create a virtual environment when you start a new project, NEVER change system built-in Python
* interactive python: python shell vs idle vs ipython
* python scopes: local, enclosing, global, built-in LEGB
* pythonic: doing things the way they are supposed to be done in Python
* rounding:
```
int(1.1), int(1.9), round(1.1), round(0.9), 7//4, 7//5  --> 1
int(-1.1), int(-1.9), round(-1.1), round(-0.9)  --> -1
-7//4, -7//5  --> -2
```
* floating point numbers info: `sys.float_info`
* double precision numbers approximation issue: `0.3 - 0.1 * 3`  --> -5.551115123125783e-17
* complex numbers: `3.14 + 2.73j`
* `from fractions import Fraction; Fraction(3,10) - Fraction(1,10) * 3`  --> Fraction(0,1); 3/10 - 1/10 * 3 = 0/1
* decimal from float: `from decimal import Decimal; Decimal(0.1) * Decimal(3) - Decimal(0.3)`  --> Decimal('2.775557561565156540423631668E-17')
* decimal from string: `Decimal('0.1') * Decimal(3) - Decimal('0.3')`  --> Decimal('0.0')
* `Decimal('0.3').as_integer_ratio()`  --> (3, 10); 3/10=0.3
* string formatting:
```
"{what} {where}!".format(what='Hello', where='world')
"{} {}!".format('Hello', 'world')
"{0} {1} {0}".format('!!!', 'Python')
"Hello %s!" % 'world'
pi=3.14; f'PI={pi}'  # >= Python 3.6
```
### Chapter2 Built-in Data Types
* immutable sequences: string, tuple, byte, frozenset
* mutable sequences: list, bytearray, set
* immutable types are hashable and can be set member or dictionary key
* create tuple: `(); (1,); (1,2)`
* one line swap with tuple: `a,b=1,2; a,b=b,a`
* reverse string: `'Ala'[::-1]`
* create set: `{'a','b','c','a'}; set([1,2,1,0]); {(1,1), (2,2)}`
* create dictionary: `dict(A=1, Z=-1); dict([('A', 1), ('Z', -1)]); dict(zip(['A', 'Z'], [1 -1])); {'A': 1, 'Z': -1}`
* dictionary keys, values, key value pairs: keys(), values(), items()
* from python3.6 dictionary is ordered
* collections module: namedtuple, defaultdict, ChainMap, Counter, OrderedDict, UserDict, UserList, UserString, deque
* enums: from enum import Enum
### Chapter3 Iterating and Making Decisions
* ternary operator: `discount = 25 if order_total > 100 else 0`
* iterating over multiple sequences: `for person, age in zip(people, ages): print(person, age)`
* special else clause: 
```
for person, age in [('James', 17), ('Kirk', 9)]:
    if age >= 18: 
        break
else:
    raise DriverException('Driver not found.')
```
* itertools module: `from itertools import count, compress, permutations`
* count(start, [step]): `count(10, 2)` --> 10 12 14 ...
* compress(data, selectors): `compress('ABCDEF', [1,0,1,0,1,1])` --> A C E F
* permutations(p[, r]): `permutations('ABC')` --> ('A','B','C'),('A','C','B'),('B','A','C'),('B','C','A'),('C','A','B'),('C','B','A')
### Chapter4 Functions, the Building Blocks of Code
* function output: If the function has no return statement or no value is given to the return statement, the function returns None
* why use functions: reduce code duplication; help in splitting a complex task; hide the implementation details; improve traceability;  improve readability
* global and nonlocal: nonlocal identifier refer to previously bound variable in the nearest enclosing scope excluding globals
* input parameters: positional, keyword, variable positional, keyword-only, variable keyword
```
def func(a, b, c=7, *args, **kwargs): print(a, b, c, args, kwargs)
func(1, 2, 3, *(5, 7, 9), **{'A': 'a', 'B': 'b'})
func(1, 2, 3, 5, 7, 9, A='a', B='b')
def func_with_kwonly(a, b=42, *args, c, d=256, **kwargs): print(a, b, c, d, args, kwargs)
func_with_kwonly(3, 42, c=0, d=1, *(7, 9, 11), e='E', f='F')
func_with_kwonly(3, 42, *(7, 9, 11), c=0, d=1, e='E', f='F')
def additional(*args, **kwargs): print(args, kwargs)
additional(*(1, 2, 3), *[4, 5], **dict(option1=10, option2=20), **{'option3': 30})
```
* functions guidelines: functions should do one thing; functions should be small; fewer input parameters is better; functions should be consistent in their return values; functions shouldn't have side effects (should not affect the values you call them with)
* built-in functions: `dir(__builtins__)`
* python documentation generator: Sphinx
* importing objects: `from mymodule import myfunc as better_named_func; from datetime import datetime, timezone; from unittest.mock import patch; import pytest; from module import *; from .mymodule import myfunc`
### Chapter5 Saving Time and Memory
* map(function, iterable, ...) applies function to every item of iterable: 
```
list(map(lambda a: a*a, range(3)))  --> [0, 1, 4]
list(map(lambda *a: a, range(3), 'abc'))  --> [(0, 'a'), (1, 'b'), (2, 'c')]
list(map(lambda n: max(*n), zip([1, 2], [2, 1], [0, 3])))  --> [2, 3]
list(map(lambda n: n ** 2, filter(lambda n: not n % 2, range(10))))  --> [0, 4, 16, 36, 64]
```
* list comprehension: 
```
[n*n for n in range(3)]
[n*n for n in range(10) if not n % 2]
items = 'ABCD'; [(items[a], items[b]) for a in range(len(items)) for b in range(a, len(items))]
```
* dictionary comprehension: `{c: c.swapcase() for c in 'Hello'}; dict((c, c.swapcase()) for c in 'Hello')`
* set comprehension: `{c for c in 'Hello'}; set(c for c in 'Hello')`
* generator expression: `(n*n for n in range(3))`
* generator function: 
```
def get_squares_gen(n):
    for x in range(n):
        if result < 10:
            yield x ** 2
        else:
            return
next(get_squares_gen(4))
```
* yield from expression:
```
def get_squares_gen(start, end):
    yield from (n ** 2 for n in range(start, end))
```
* map vs list comprehension: map may be faster (without lambda function); listcomp is more readable (most but not always)
* list comprehension vs generator expression: genexp is time and memory efficient; genexp allow one iteration; use genexp for large or infinite range; list allow lists methods (slicing, adding)
* function vs generator function: use function to return list or tuple; use genfun for large or infinite range; genfun allow one iteration
* time: map, list comprehensions and generator expressions have similar performance, for loops are slower
* space: generator function and generator expression save a lot of space compared to list and tuple
* don't overdo comprehensions and generators: Use comprehensions and generator expressions as much as you can, but if the code starts to be complicated to modify or to read, you may want to refactor it into something more readable. Your colleagues will thank you.
* name localization: for loop create and modify global variable; list/set/dict comprehension don't
```
A = 100
[A for A in range(5)]
print(A)  --> prints: 100
for A in range(5):
    pass
print(A)  --> prints: 4
```
* python3 generation behavior built-ins: map, zip, filter, range, enumerate, keys, values, items, open
* fibonacci with generator:
```
def fibonacci(N):
    a, b = 0, 1
    while a <= N:
        yield a
        a, b = b, a + b
```
* one line recursive fibonacci: `fibonacci = lambda n: n if n < 2 else fib(n-1) + fib(n-2)`
### Chapter6 OOP, Decorators, and Iterators
* Simple decorator
```
from time import sleep, time
from functools import wraps
def measure(func):
    def wrapper(*args, **kwargs):
        t = time()
        func(*args, **kwargs)
        print(func.__name__, 'took:', time() - t)
    return wrapper

def f(sleep_time=0.1):
    """I'm a cat. I love to sleep! """
    sleep(sleep_time)

f = measure(f)
f()  # f took: 0.10523104667663574
f(0.2)  # f took: 0.20150113105773926
f(sleep_time=0.3)  # f took: 0.30017828941345215
print(f.__name__, ':', f.__doc__)  # wrapper : None
```
* Better decorator
```
def measure(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        t = time()
        result = func(*args, **kwargs)
        print(func.__name__, 'took:', time() - t)
        return result
    return wrapper

@measure
def f(sleep_time=0.1):
    """I'm a cat. I love to sleep! """
    sleep(sleep_time)

f()  # f took: 0.10523104667663574
f(0.2)  # f took: 0.20150113105773926
f(sleep_time=0.3)  # f took: 0.30017828941345215
print(f.__name__, ':', f.__doc__)  # f : I'm a cat. I love to sleep!
```
* Two decorators
```
def max_result(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        if result > 100:
            print('Result is too big ({0}). Max allowed is 100.'.format(result))
        return result
    return wrapper

@max_result
@measure
def cube(n):
    return n ** 3

# cube = max_result(measure(cube))  # is equivalent to double annotations
print(cube(2))  # cube took: 6.9141387939453125e-06 \n 8
print(cube(5))  # cube took: 3.0994415283203125e-06 \n Result is too big (125). Max allowed is 100. \n 125
```
* Decorator factory
```
def max_result(threshold):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            if result > threshold:
                print('Result is too big ({0}). Max allowed is {1}.'.format(result, threshold))
            return result
        return wrapper
    return decorator

@max_result(75)
def cube(n):
    return n ** 3

# cube = max_result(75)(cube)  # is equivalent to annotation with param
print(cube(5))  # Result is too big (125). Max allowed is 75. \n 125
```
