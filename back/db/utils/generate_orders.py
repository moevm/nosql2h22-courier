import random
import time
import string
    
def str_time_prop(start, end, time_format, prop):
    stime = time.mktime(time.strptime(start, time_format))
    etime = time.mktime(time.strptime(end, time_format))
    ptime = stime + prop * (etime - stime)
    return time.strftime(time_format, time.localtime(ptime))

def random_date(start, end, prop):
    return str_time_prop(start, end, '%d/%m/%Y %I:%M %p', prop)

def random_email():
    return f"{''.join(random.choices(string.ascii_lowercase, k=8))}@mail.ru"

cars = [["С065MK 78RUS","ГАЗель","ГАЗ-3302","DIPNF83CP20M6BE5X"],["H283TX 78RUS", "ГАЗель","ГАЗ-32213","GKP8SKB5G8K4G1ZPB"],["C423CO 78RUS", "ГАЗель","ГАЗ-32214","OLD84MPF81O0ZHX74"],["X789ET 78RUS","ГАЗель","ГАЗ-3302","TZ4MZM0VW5Y4XAX7Q"],["A001MM 78RUS","ГАЗель","ГАЗ-32213","GYUKXEOSDSMNTBDHR"],["E102CH 78RUS", "ГАЗель","ГАЗ-32214","KL3INXSXW3IDWS9RZ"],["H882EP 78RUS","Mercedes","Mercedes-Benz Atego 1224 L","VMN8O43R28N40WRIE"],["K560PO 78RUS", "Volvo","Volvo FE","YB52Z2HFR6OFKM3JH"]]
adresses = ["Россия, г. Тамбов, Октябрьский пер., д. 25 кв.71","Россия, г. Нефтекамск, Победы ул., д. 15 кв.87","Россия, г. Энгельс, Западная ул., д. 11 кв.71","Россия, г. Орёл, Социалистическая ул., д. 4 кв.144","Россия, г. Ставрополь, Космонавтов ул., д. 24 кв.182","Россия, г. Бийск, Шоссейная ул., д. 9 кв.26","Россия, г. Липецк, Полевая ул., д. 15 кв.19","Россия, г. Хабаровск, Советская ул., д. 24 кв.111","Россия, г. Калининград, Максима Горького ул., д. 25 кв.35","Россия, г. Мурманск, Спортивная ул., д. 10 кв.136","Россия, г. Череповец, Ленина В.И.ул., д. 24 кв.185","Россия, г. Камышин, Хуторская ул., д. 8 кв.106","Россия, г. Вологда, Школьная ул., д. 14 кв.78","Россия, г. Вологда, Школьная ул., д. 1 кв.8","Россия, г. Северодвинск, Минская ул., д. 14 кв.128","Россия, г. Златоуст, Светлая ул., д. 23 кв.185","Россия, г. Рубцовск, Новая ул., д. 8 кв.74","Россия, г. Домодедово, Первомайский пер., д. 7 кв.105","Россия, г. Коломна, Колхозная ул., д. 10 кв.6","Россия, г. Первоуральск, 17 Сентября ул., д. 2 кв.32","Россия, г. Ноябрьск, 17 Сентября ул., д. 18 кв.178","Россия, г. Рязань, Шоссейная ул., д. 5 кв.121","Россия, г. Санкт-Петербург, Октябрьский пер., д. 4 кв.133","Россия, г. Смоленск, Пушкина ул., д. 23 кв.32","Россия, г. Армавир, Речная ул., д. 21 кв.2","Россия, г. Рыбинск, Полевой пер., д. 7 кв.196","Россия, г. Пушкино, Полесская ул., д. 23 кв.120","Россия, г. Муром, Заречный пер., д. 25 кв.30","Россия, г. Архангельск, Речная ул., д. 3 кв.72"]
couriers = [["Климент", "Наумов", "Иоаннович", "naumovmc@gmail.com"],["Мария", "Денисова", "Андреевна","denisovamc@gmail.com"],["Дмитрий", "Гришин", "Кузьмич","grishinmc@gmail.com"],["Галактион", "Субботин", "Лукич","subbotinmc@gmail.com"],]
drivers = [["Антон", "Тетерин", "Макарович","teterinmc@yandex.ru"],["Лукьян", "Стрелков", "Марленович","strelkovmc@yandex.ru"],["Матвей", "Гурьев", "Минич","gurievmc@yandex.ru"],["Елена", "Казакова", "Вениаминовна","kazakovamc@yandex.ru"]]

# пользователи мужчины
names_m = ["Рубен","Соломон","Степан","Прохор","Никанор","Марсель","Дементий","Марк","Павел","Нестор","Владлен","Агафон","Савва","Иосиф","Адам","Виктор","Варфоломей","Серафим","Георгий","Феликс"]
surnames_m = ["Аристов","Случевский","Казарезов","Жеффре","Гольдин","Сафронов","Митасов","Краснянский","Зыльков","Широнин","Федулов","Ярмоненко","Емельяненко","Сукачёв","Яблочков","Яранцев","Янаслов","Куделькин","Кооскора","Перехваткин"]
father_names_m = ["Артёмович","Тимурович","Фёдорович","Феликсович","Билалович","Олегович","Епифанович","Григориевич","Мартинович","Сигизмундович","Никонович","Несторович","Олегович","Эмирович","Алексеевич","Тигранович","Фролович","Фомевич","Эмильевич","Петрович"]

# пользователи женщины
names_f = ["Сафина","Агата","Соня","Евангелина","Анастасия","Малика","Марьяна","Нона","Адриана","Ясмин","Любовь","Алёна","Амина","Ульяна","Таисия","Роза","Владислава","Наталия","Елена","Ясмина"]
surnames_f = ["Федосова","Ратникова","Сухова","Мартынова","Абакумова","Кубланова","Педич","Фанина","Овсова","Летова","Колпакова","Буклина","Захарова","Тимиряева","Лисицына","Акулова","Лобачёва","Шапиро","Шаршина","Серыха",]
father_names_f = ["Мартиновна","Мироновна","Евгениевна","Артёмовна","Демьяновна","Маратовна","Андреевна","Анатольевна","Арсеновна","Вадимовна","Даниловна","Алексеевна","Карповна","Мартиновна","Мирославовна","Владленовна","Леоновна","Игнатиевна","Якововна","Адамовна"]
n = 100

for i in range(n):
    if i <= 50:
        # курьеры, заказы с мужчинами
        if i <= 25:
            cur_surnames = surnames_m
            cur_names = names_m
            cur_father_names = father_names_m
        # курьеры, заказы с женщинами
        else:
            cur_surnames = surnames_f
            cur_names = names_f
            cur_father_names = father_names_f

        sender_info = {"second_name": cur_surnames[random.randint(0,len(cur_surnames))-1], "first_name": cur_names[random.randint(0,len(cur_names))-1], "fathers_name":  cur_father_names[random.randint(0,len(cur_father_names))-1], "email": random_email()}
        recipient_info = {"second_name": cur_surnames[random.randint(0,len(cur_surnames))-1], "first_name": cur_names[random.randint(0,len(cur_names))-1], "fathers_name":  cur_father_names[random.randint(0,len(cur_father_names))-1], "email": random_email()}
        size = [random.randint(1,50), random.randint(1,50), random.randint(1,50), round(random.random() * 5,3)]
        address = f"\"{adresses[random.randint(0,len(adresses))-1]}\""
        paid = bool(random.randint(0,1))
        expected_date = random_date("3/11/2022 1:30 PM", "12/11/2022 4:50 AM", random.random())
        real_date = random_date(expected_date, "12/11/2022 4:50 AM", random.random())
        courier = couriers[random.randint(0,len(couriers))-1]
        car_info = {}
        courier_info = {"second_name": courier[1], "first_name": courier[0], "fathers_name": courier[2], "email": courier[3], "car_info": car_info}
        complete = bool(random.randint(0,1)) if paid else False
        paid = "true" if paid else "false"
        complete = "true" if complete else "false"
        cost = random.randint(100,3000)
        print(f"db.orders.insertOne({{_id: {i}, sender_info: {sender_info}, recipient_info: {recipient_info}, size: {size}, address: {address}, paid: {paid}, expected_date: \"{expected_date}\", real_date: \"{real_date}\", courier_info: {courier_info}, complete: {complete}, cost: {cost}}})")
    elif i < n:
        # водители, заказы с мужчинами
        if i <= 76:
            cur_surnames = surnames_m
            cur_names = names_m
            cur_father_names = father_names_m
        # курьеры, заказы с женщинами
        else:
            cur_surnames = surnames_f
            cur_names = names_f
            cur_father_names = father_names_f
        sender_info = {"second_name": cur_surnames[random.randint(0,len(cur_surnames))-1], "first_name": cur_names[random.randint(0,len(cur_names))-1], "fathers_name":  cur_father_names[random.randint(0,len(cur_father_names))-1], "email": random_email()}
        recipient_info = {"second_name": cur_surnames[random.randint(0,len(cur_surnames))-1], "first_name": cur_names[random.randint(0,len(cur_names))-1], "fathers_name":  cur_father_names[random.randint(0,len(cur_father_names))-1], "email": random_email()}
        size = [random.randint(1,200), random.randint(1,200), random.randint(1,200), round(random.random() * 5,50)]
        address = f"\"{adresses[random.randint(0,len(adresses))-1]}\""
        paid = bool(random.randint(0,1))
        expected_date = random_date("3/11/2022 1:30 PM", "12/11/2022 4:50 AM", random.random())
        real_date = random_date(expected_date, "12/11/2022 4:50 AM", random.random())
        driver = drivers[random.randint(0,len(drivers))-1]
        car = cars[random.randint(0,len(cars))-1]
        car_info = {"number": car[0],
                    "brand": car[1],
                    "model": car[2],
                    "vin": car[3]}
        driver_info = {"second_name": driver[1], "first_name": driver[0], "fathers_name": driver[2], "email": driver[3], "car_info": car_info}
        complete = bool(random.randint(0,1)) if paid else False
        paid = "true" if paid else "false"
        complete = "true" if complete else "false"
        cost = random.randint(1000,10000)
        print(f"db.orders.insertOne({{_id: {i}, sender_info: {sender_info}, recipient_info: {recipient_info}, size: {size}, address: {address}, paid: {paid}, expected_date: \"{expected_date}\", real_date: \"{real_date}\", courier_info: {driver_info}, complete: {complete}, cost: {cost}}})")
   