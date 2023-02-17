from copy import deepcopy
from generator_constants import *
import random
import time
import string

USERS = []


def generate_employees():
    employees_list = [COURIERS, DRIVERS, ADMINS]
    for employees in employees_list:
        for employee in employees:
            print(f'db.users.insertOne({{"first_name": "{employee[0]}", '
                  f'"second_name": "{employee[1]}", "fathers_name": '
                  f'"{employee[2]}", "login": "{employee[3]}", "password": '
                  f'"{generate_password()}", "timetable": "{generate_timetable()}", '
                  f'type: "{employee[4]}"}})')
    print("\n")


def generate_users():
    users_data = [[NAMES_MALE, SURNAMES_MALE, FATHER_NAMES_MALE],
                  [NAMES_FEMALE, SURNAMES_FEMALE, FATHER_NAMES_FEMALE]]
    for i in range(len(users_data)): # males, females
        for j in range(N_USERS // len(users_data)):
            user_data = []
            for k in range(3): # name, surname, fathers name
                field_ind = random.randint(0, len(users_data[i][k]) - 1)
                user_data.append(users_data[i][k][field_ind])
            user_data.append(generate_email())
            user_data.append(generate_password())
            USERS.append(user_data)
            print(
                f'db.users.insertOne({{"first_name": "{user_data[0]}", '
                f'"second_name": "{user_data[1]}", "fathers_name": "{user_data[2]}", '
                f'"login": "{user_data[3]}", password: "{user_data[4]}", '
                f'"timetable": null, "type": "u"}})')
    print("\n")


def generate_autopark():
    for car in CARS:
        print(f'db.autopark.insertOne({{"number": "{car[0]}", "brand": "{car[1]}", '
              f'"model": "{car[2]}", "free": true, "ready": true, "vin": "{car[3]}"}})')
    print("\n")


def generate_orders():
    for i in range(N_ORDERS):
        sender = USERS[random.randint(0, len(USERS) - 1)]
        sender_info = {"second_name": sender[1], "first_name": sender[0],
                       "fathers_name": sender[2],
                       "email": sender[3]}
        recipient = USERS[random.randint(0, len(USERS) - 1)]
        recipient_info = {"second_name": recipient[1], "first_name": recipient[0],
                       "fathers_name": recipient[2],
                       "email": recipient[3]}
        address = ADDRESSES[random.randint(0, len(ADDRESSES) - 1)]
        paid = bool(random.randint(0, 1))
        paid = "true" if paid else "false"
        complete = bool(random.randint(0, 1)) == paid
        complete = "true" if complete else "false"
        expected_date = random_date(START_DATE, END_DATE, random.random())
        real_date = random_date(expected_date, END_DATE, random.random())
        delivery_mans = deepcopy(COURIERS)
        delivery_mans.extend(DRIVERS)
        random.shuffle(delivery_mans)
        delivery_man = delivery_mans[random.randint(0, len(delivery_mans) - 1)]
        coeff = 5 if delivery_man[4] == "d" else 1
        size = [random.randint(coeff, 20 * coeff)] * 3
        car = CARS[random.randint(0, len(CARS) - 1)] if delivery_man[4] == "d" else None
        car_info = {"number": car[0], "brand": car[1], "model": car[2],
                    "vin": car[3]} if car else {}
        courier_info = {"second_name": delivery_man[1], "first_name": delivery_man[0],
                        "fathers_name": delivery_man[2], "email": delivery_man[3],
                        "car_info": car_info}
        cost = random.randint(MIN_COST * coeff, MIN_COST * coeff ** 2)
        print(f'db.orders.insertOne({{ "sender_info": {sender_info}, '
              f'"recipient_info": {recipient_info}, "size": {size}, '
              f'"address": "{address}", "paid": {paid}, "expected_date": \"{expected_date}\", '
              f'"real_date": \"{real_date}\", "courier_info": {courier_info}, '
              f'"complete": {complete}, "cost": {cost}}})')
    print("\n")


def generate_email():
    return f"{''.join(random.choices(string.ascii_lowercase, k=8))}@mail.ru"


def generate_timetable():
    timetable = []
    days_off = [random.randint(0, len(WORK_DAYS) - 1),
                random.randint(0, len(WORK_DAYS) - 1)]
    for (ind, day) in enumerate(WORK_DAYS):
        if ind in days_off:
            timetable.append([day, "-"])
        else:
            start_hour = random.randint(0, 23)
            end_hour = (start_hour + 9) % 24
            timetable.append([day, f"{start_hour}:00-{end_hour}:00"])
    return timetable


def generate_password():
    return ''.join(random.choices(string.ascii_lowercase, k=10))


def random_date(start, end, prop):
    return str_time_prop(start, end, '%d/%m/%Y %M:%H %p', prop)


def str_time_prop(start, end, time_format, prop):
    stime = time.mktime(time.strptime(start, time_format))
    etime = time.mktime(time.strptime(end, time_format))
    ptime = stime + prop * (etime - stime)
    return time.strftime(time_format, time.localtime(ptime))


if __name__ == "__main__":
    generate_employees()
    generate_users()
    generate_autopark()
    generate_orders()
