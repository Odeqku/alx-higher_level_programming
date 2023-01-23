#!/usr/bin/python3

def safe_print_list(my_list=[], x=0):
    try:
        y = 0
        for elem in my_list:
            if x:
                x -= 1
                y += 1
                print(elem, end='')
        print()

    except Exception as ex:
        print("This error {} was caught".format(ex))

    finally:
        return y
