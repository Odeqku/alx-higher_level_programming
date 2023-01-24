#!/usr/bin/python3

def safe_print_integer_err(value):
    import sys
    var = False
    var1 = True
    try:
        print("{:d}".format(value))
    except ValueError as ex:
        print("Exception: ", ex, file=sys.stderr)
        return False
    else:
        return True        
