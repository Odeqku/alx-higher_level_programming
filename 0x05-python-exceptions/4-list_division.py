#!/usr/bin/python3

def list_division(my_list_1, my_list_2, list_length):
    try:
# slicing variable increment through iteration
        m = -1
        result = [] 
        n = list_length

        for a in my_list_1:
            m += 1
            for b in my_list_2[m:]:

                if b == 0:
                    print("division by 0")
                    div = 0
                    result.append(0)
                    break

                elif not(type(a) == int or type(a) == float) or not(type(b) == float or type(b) == int):
                    print("wrong type")
                    div = 0
                    result.append(div)
                    break

                else:
                    div = a / b
                    result.append(div)
                    break

        if n - len(result) > 0:
             print("out of range")
             for i in range(n - len(result)):
                 result.append(0)
    except Exception:
        pass        
    finally:
        return result
