#!/usr/bin/python3

def safe_print_division(a, b):
    try:
        result = a / b
    except (ZeroDevisionError, TypoError):
        pass
    finally:
        print("Inside result: {}".format(result if b > 0 else None))
        return (result if b > 0 else None)
