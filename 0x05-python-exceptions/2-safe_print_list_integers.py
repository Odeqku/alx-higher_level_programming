#!/usr/bin/python3

def safe_print_list_integers(my_list=[], x=0):
    try:
        n = 0
        y = 0
        for elem in my_list[:x]:
            n += 1
            if type(elem) == int:
                y += 1
                print('{:d}'.format(elem), end='')
        if x > n:
            print('{:d}'.format(my_list[x]))
    except IndexError:
        pass
    else:
        print()
        return y
