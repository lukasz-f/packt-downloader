# Learning Python Programming Cheat Sheet
### Chapter1
* python programming: imperative (procedural, object oriented), functional
* python object features: id (unique), type, value
* python portability: as much as used libraries (isn’t really any more portable than C is)
* python drawbacks: execution speed
* python env: ALWAYS create a virtual environment when you start a new project, NEVER change system built-in Python
* interactive python: python shell vs idle vs ipython
* python scopes: local, enclosing, global, built-in LEGB
* pythonic: doing things the way they are supposed to be done in Python
* int(1.1), int(1.9), round(1.1), round(0.9), 7//4, 7//5  # 1
* int(-1.1), int(-1.9), round(-1.1), round(-0.9)  # -1
* -7//4, -7//5  # -2
* floating point numbers info: sys.float_info
* double precision numbers approximation issue: 0.3 - 0.1 * 3  # -5.551115123125783e-17
* complex numbers: 3.14 + 2.73j
* from fractions import Fraction; Fraction(3,10) - Fraction(1,10) * 3  # Fraction(0,1); 3/10 - 1/10 * 3 = 0/1
* decimal from float: from decimal import Decimal; Decimal(0.1) * Decimal(3) - Decimal(0.3)  # Decimal('2.775557561565156540423631668E-17')
* decimal from string: Decimal('0.1') * Decimal(3) - Decimal('0.3')  # Decimal('0.0')
* Decimal('0.3').as_integer_ratio()  # (3, 10); 3/10=0.3
* string formatting:
"{what} {where}!".format(what='Hello', where='world')
"{} {}!".format('Hello', 'world')
"{0} {1} {0}".format('!!!', 'Python')
"Hello %s!" % 'world'
* pi=3.14; f'PI={pi}'
### Chapter2
* immutable sequences: string, tuple, byte, frozenset
* mutable sequences: list, bytearray, set
* immutable types are hashable and can be set member or dictionary key
* create tuple: (); (1,); (1,2)
* one line swap with tuple: a,b=1,2; a,b=b,a
* reverse string: 'Ala'[::-1]
* create set: {'a','b','c','a'}; set([1,2,1,0]); {(1,1), (2,2)}
* create dictionary: dict(A=1, Z=-1); dict([('A', 1), ('Z', -1)]); dict(zip(['A', 'Z'], [1 -1])); {'A': 1, 'Z': -1}
* dictionary keys, values, key value pairs: keys(), values(), items()
* from python3.6 dictionary is ordered
* collections module: namedtuple, defaultdict, ChainMap, Counter, OrderedDict, UserDict, UserList, UserString, deque
* enums: from enum import Enum
### Chapter3
* ternary operator: discount = 25 if order_total > 100 else 0
* iterating over multiple sequences: for person, age in zip(people, ages): print(person, age)
* special else clause: 
for person, age in [('James', 17), ('Kirk', 9)]:
    if age >= 18: 
        break
else:
    raise DriverException('Driver not found.')
* itertools module: from itertools import count, compress, permutations
* count(start, [step]): count(10, 2) --> 10 12 14 ...
* compress(data, selectors): compress('ABCDEF', [1,0,1,0,1,1]) --> A C E F
* permutations(p[, r]): permutations('ABC') --> ('A','B','C'),('A','C','B'),('B','A','C'),('B','C','A'),('C','A','B'),('C','B','A')
### Chapter4
* function output: If the function has no return statement or no value is given to the return statement, the function returns None
* why use functions: reduce code duplication; help in splitting a complex task; hide the implementation details; improve traceability;  improve readability
* global and nonlocal: nonlocal identifier refer to previously bound variable in the nearest enclosing scope excluding globals
* input parameters: positional, keyword, variable positional, keyword-only, variable keyword
* def func(a, b, c=7, *args, **kwargs): print(a, b, c, args, kwargs)
func(1, 2, 3, *(5, 7, 9), **{'A': 'a', 'B': 'b'})
func(1, 2, 3, 5, 7, 9, A='a', B='b')
def func_with_kwonly(a, b=42, *args, c, d=256, **kwargs): print(a, b, c, d, args, kwargs)
func_with_kwonly(3, 42, c=0, d=1, *(7, 9, 11), e='E', f='F')
func_with_kwonly(3, 42, *(7, 9, 11), c=0, d=1, e='E', f='F')
def additional(*args, **kwargs): print(args, kwargs)
additional(*(1, 2, 3), *[4, 5], **dict(option1=10, option2=20), **{'option3': 30})
* functions guidelines: functions should do one thing; functions should be small; fewer input parameters is better; functions should be consistent in their return values; functions shouldn't have side effects (should not affect the values you call them with)
* built-in functions: dir(__builtins__)
* python documentation generator: Sphinx
* importing objects: from mymodule import myfunc as better_named_func; from datetime import datetime, timezone; from unittest.mock import patch; import pytest; from module import *; from .mymodule import myfunc
### Chapter5
* todo
