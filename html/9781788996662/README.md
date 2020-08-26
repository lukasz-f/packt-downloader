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
list(map(lambda a: a*a, range(3)))  # [0, 1, 4]
list(map(lambda *a: a, range(3), 'abc'))  # [(0, 'a'), (1, 'b'), (2, 'c')]
list(map(lambda n: max(*n), zip([1, 2], [2, 1], [0, 3])))  # [2, 3]
list(map(lambda n: n ** 2, filter(lambda n: not n % 2, range(10))))  # [0, 4, 16, 36, 64]
```
* list comprehension: 
```
[n*n for n in range(3)]  # [0, 1, 4]
[n*n for n in range(10) if not n % 2]  # [0, 4, 16, 36, 64]
items = 'ABC'; [(items[a], items[b]) for a in range(len(items)) for b in range(a, len(items))]  # [('A','A'),('A','B'),('A','C'),('B','B'),('B','C'),('C','C')]
```
* dictionary comprehension: `{c: c.swapcase() for c in 'Hello'}; dict((c, c.swapcase()) for c in 'Hello')  # {'H':'h','e':'E','l':'L','o':'O'}`
* set comprehension: `{c for c in 'Hello'}; set(c for c in 'Hello')  # {'o', 'l', 'H', 'e'}`
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
* OOP
```
class Person():
    species = 'Human'

print(type(Person))  # <class 'type'>
print(type(Person()))  # <class '__main__.Person'>
print(isinstance(Person(), Person))  # True
print(issubclass(Person, object))  # True
print(Person.species)  # Human
Person.alive = True  # class attribute
print(Person.alive)  # True
man = Person()
print(man.species)  # Human (inherited)
print(man.alive)  # True (inherited)
Person.alive = False
print(man.alive)  # False (inherited)
man.name = 'Darth'  # instance attribute
man.surname = 'Vader'
print(man.name, man.surname)  # Darth Vader
```
* Attribute shadowing
```
class Square:
    side = 8
    def area(self):  # self is a reference to an instance
        return self.side ** 2

sq = Square()
print(sq.area())  # 64 (side is found on the class)
print(Square.area(sq))  # 64 (equivalent to sq.area())
sq.side = 10
print(sq.area())  # 100 (side is found on the instance)
del sq.side  # we delete instance attribute
print(sq.area())  # 64 (now search has to go again to find class attr)
sq.side_b = 3  # let's make it a rectangle
print(sq.sibe_b)  # 3
print(Square.side_b)  # AttributeError: type object 'Square' has no attribute 'side_b'
```
* Initializing an instance
```
class Rectangle:
    def __init__(self, side_a, side_b):
        self.side_a = side_a
        self.side_b = side_b
    def area(self):
        return self.side_a * self.side_b

r1 = Rectangle(10, 4)
print(r1.side_a, r1.side_b, r1.area())  # 10 4 40
```
* Inheritance means that two objects are related by means of an Is-A type of relationship
* Composition means that two objects are related by means of a Has-A type of relationship
```
class Book:
    def __init__(self, title, publisher, pages):
        self.title = title
        self.publisher = publisher
        self.pages = pages

class Ebook(Book):
    def __init__(self, title, publisher, pages, format_):
        super().__init__(title, publisher, pages)
        # super(Ebook, self).__init__(title, publisher, pages)  # Another way to do the same thing
        # Book.__init__(self, title, publisher, pages)
        self.format_ = format_
```
* Multiple inheritance
```
class A:
    label = 'a'

class B(A):
    pass

class C(A):
    label = 'c'

class D(B, C):
    pass

d = D()
print(d.label)  # 'c'
print(d.__class__.mro())  # notice another way to get the MRO
```
* Method Resolution Order (MRO) - the order in which classes are searched on attribute lookup
```
square.__class__.__mro__
Square.__mro__
Square.mro()
```
* Static methods
```
class StringUtil:
    @staticmethod
    def get_unique_words(sentence):
        return set(sentence.split())

StringUtil.get_unique_words('I really really love them!')
```
* Class methods
```
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    @classmethod
    def from_tuple(cls, coords):  # cls is Point
        return cls(*coords)
    @classmethod
    def from_point(cls, point):  # cls is Point
        return cls(point.x, point.y)

p = Point.from_tuple((3, 7))
print(p.x, p.y)  # 3 7
q = Point.from_point(p)
print(q.x, q.y)  # 3 7
```
```
class StringUtil:
    @classmethod
    def get_unique_words(cls, sentence):
        s = cls._split_sentence(sentence)  # better than StringUtil._split_sentence()
        return set(s)
    @staticmethod
    def _split_sentence(sentence):
        return sentence.split()

StringUtil.get_unique_words('I really really love them!')
```
* If an attribute's name has no leading underscores, it is considered public
* When the name has one leading underscore, the attribute is considered private
* Attribute name that has at least two leading underscores and at most one trailing underscore is replaced with a name that includes an underscore and the class name before the actual name
```
class A:
    def __init__(self, protected, private):
        self._protected = protected
        self.__private = private
    def op1(self):
        print('Op1 with protected {} & private {}'.format(self._protected, self.__private))

class B(A):
    def op2(self, protected, private):
        self._protected = protected
        self.__private = private
        print('Op2 with protected {} & private {}'.format(self._protected, self.__private))

obj = B(1, 100)
obj.op1()        # Op1 with protected 1 & private 100
obj.op2(2, 200)  # Op2 with protected 2 & private 200
obj.op1()        # Op1 with protected 2 & private 100
print(obj.__dict__.keys())  # dict_keys(['_protected', '_A__private', '_B__private'])
```
* The property decorator
```
class PersonPythonic:
    def __init__(self, age):
        self._age = age
    @property
    def age(self):
        return self._age
    @age.setter
    def age(self, age):
        if 18 <= age <= 99:
            self._age = age
        else:
            raise ValueError('Age must be within [18, 99]')
```
* Operator overloading
```
class Weird:
    def __init__(self, s):
        self._s = s
    def __len__(self):
        return len(self._s)
    def __bool__(self):
        return '42' in self._s
    def __getitem__(self, k):
        return self._s[k]

weird = Weird('Hello! I am 42 years old!')
print(len(weird))  # 25
print(bool(weird))  # True
print(weird[5])  # !
```
* Data classes
```
from dataclasses import dataclass  # >= Python 3.7

@dataclass
class Body:
    name: str
    mass: float = 0.  # Kg
    speed: float = 1.  # m/s
    def kinetic_energy(self) -> float:
        return (self.mass * self.speed ** 2) / 2

body = Body('Ball', 19, 3.1415)
print(body.kinetic_energy())  # 93.755711375 Joule
print(body)  # Body(name='Ball', mass=19, speed=3.1415)
Body()  # TypeError: __init__() missing 1 required positional argument: 'name'
```
* Iterable returning its members one at a time. Lists, tuples, strings, and dictionaries are all iterables. Custom objects that define either of the `__iter__` or `__getitem__` methods are also iterable
* Iterator represents a stream of data. A custom iterator is required to provide an implementation for `__iter__` and `__next__`
### Chapter7 Files and Data Persistence
* Reading and writing to a file
```
with open('fear.txt') as stream:
    lines = [line.rstrip() for line in stream]

with open('raef.txt', 'w') as stream:
    stream.write('\n'.join(line[::-1] for line in lines))
```
* Reading and writing in binary mode
```
with open('example.bin', 'wb') as fw:
    fw.write(b'This is binary data...')

with open('example.bin', 'rb') as f:
    print(f.read())
```
* Protecting against overriding an existing file
```
with open('write_x.txt', 'x') as fw:
    fw.write('Writing line 1')  # this succeeds

with open('write_x.txt', 'x') as fw:
    fw.write('Writing line 2')  # this fails
```
* Checking for file and directory existence
```
import os

filename = 'fear.txt'
file_absolute_path = os.path.abspath(filename)
folder_absolute_path = os.path.dirname(file_absolute_path)
print(os.path.isfile(filename))  # True
print(os.path.isfile(file_absolute_path))  # True
print(os.path.isdir(folder_absolute_path))  # True
print(file_absolute_path)  # /Users/fab/srv/lpp/ch7/files/fear.txt
print(folder_absolute_path)  # /Users/fab/srv/lpp/ch7/files
print(os.path.basename(file_absolute_path))  # fear.txt
print(os.path.splitext(filename))  # ('fear', '.txt')
print(os.path.splitext(file_absolute_path))  # ('/Users/fab/srv/lpp/ch7/files/fear', '.txt')
print(os.path.split(file_absolute_path))  # ('/Users/fab/srv/lpp/ch7/files', 'fear.txt')
readme_path = os.path.join(folder_absolute_path, '..', '..', 'README.rst')
print(readme_path)  # /Users/fab/srv/lpp/ch7/files/../../README.rst
print(os.path.normpath(readme_path))  # /Users/fab/srv/lpp/README.rst
```
* Manipulating files and directories
```
import os, shutil

os.mkdir('ops_example')  # create directory
os.makedirs('ops_example/A/B')  # create directory recursively
shutil.move('ops_example', 'example')  # rename folder
shutil.move('example/a.txt', 'example/b.txt')  # rename file
```
* Temporary files and directories
```
import os
from tempfile import NamedTemporaryFile, TemporaryDirectory

with TemporaryDirectory(dir='.') as td:
    print('Temp directory:', td)
    with NamedTemporaryFile(dir=td) as t:
        print('Temp file:', t.name)
```
* Directory content
```
import os

with os.scandir('.') as it:
    for entry in it:
        print(entry.name, entry.path, 'File' if entry.is_file() else 'Folder')
```
```
import os

for root, dirs, files in os.walk('.'):
    print(os.path.abspath(root))
    if dirs:
        print('Directories:')
        for dir_ in dirs:
            print(dir_)
        print()
    if files:
        print('Files:')
        for filename in files:
            print(filename)
        print()
```
* File and directory compression
```
from zipfile import ZipFile

with ZipFile('example.zip', 'w') as zp:
    zp.write('content1.txt')  # add file to zip file
    zp.write('content2.txt')
    zp.write('subfolder/content3.txt')  # add file from subfolder
    zp.write('subfolder/content4.txt')

with ZipFile('example.zip') as zp:
    zp.extract('content1.txt', 'extract_zip')  # extract content1.txt file to extract_zip folder
    zp.extract('subfolder/content3.txt', 'extract_zip')
```
* Working with JSON
```
import sys, json

data = {
    'big_number': 2 ** 3141,
    'max_float': sys.float_info.max,
    'a_list': [2, 3, 5, 7],
}

json_data = json.dumps(data)  # convert Python object into a JSON formatted string
data_out = json.loads(json_data)  # reconstructs the data into Python object from a JSON formatted string
print(json.dumps(data, indent=2, sort_keys=True))
```
* Custom encoding with JSON
```
import json
from datetime import datetime, timedelta, timezone

class DatetimeEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            try:
                off = obj.utcoffset().seconds
            except AttributeError:
                off = None
            return {
                '_meta': '_datetime',
                'data': obj.timetuple()[:6] + (obj.microsecond, ),
                'utcoffset': off,
            }
        return json.JSONEncoder.default(self, obj)

data = {'a_datetime_tz': datetime.now(tz=timezone(timedelta(hours=1)))}
json_data = json.dumps(data, cls=DatetimeEncoder)
```
* Custom decoding with JSON
```
def object_hook(obj):
    try:
        if obj['_meta'] == '_datetime':
            if obj['utcoffset'] is None:
                tz = None
            else:
                tz = timezone(timedelta(seconds=obj['utcoffset']))
            return datetime(*obj['data'], tzinfo=tz)
    except (KeyError, TypeError):
        return obj

data_out = json.loads(json_data, object_hook=object_hook)
```
