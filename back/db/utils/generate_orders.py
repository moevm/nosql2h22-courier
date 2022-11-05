import random
import time
    
def str_time_prop(start, end, time_format, prop):
    """Get a time at a proportion of a range of two formatted times.

    start and end should be strings specifying times formatted in the
    given format (strftime-style), giving an interval [start, end].
    prop specifies how a proportion of the interval to be taken after
    start.  The returned time will be in the specified format.
    """

    stime = time.mktime(time.strptime(start, time_format))
    etime = time.mktime(time.strptime(end, time_format))

    ptime = stime + prop * (etime - stime)

    return time.strftime(time_format, time.localtime(ptime))


def random_date(start, end, prop):
    return str_time_prop(start, end, '%d/%m/%Y %I:%M %p', prop)

cars = [["С065MK 78RUS","ГАЗель","ГАЗ-3302"],["H283TX 78RUS", "ГАЗель","ГАЗ-32213"],["C423CO 78RUS", "ГАЗель","ГАЗ-32214"],["X789ET 78RUS","ГАЗель","ГАЗ-3302"],["A001MM 78RUS","ГАЗель","ГАЗ-32213"],["E102CH 78RUS", "ГАЗель","ГАЗ-32214"],["H882EP 78RUS","Mercedes","Mercedes-Benz Atego 1224 L"],["K560PO 78RUS", "Volvo","Volvo FE"]]
adresses = ["Россия, г. Тамбов, Октябрьский пер., д. 25 кв.71","Россия, г. Нефтекамск, Победы ул., д. 15 кв.87","Россия, г. Энгельс, Западная ул., д. 11 кв.71","Россия, г. Орёл, Социалистическая ул., д. 4 кв.144","Россия, г. Ставрополь, Космонавтов ул., д. 24 кв.182","Россия, г. Бийск, Шоссейная ул., д. 9 кв.26","Россия, г. Липецк, Полевая ул., д. 15 кв.19","Россия, г. Хабаровск, Советская ул., д. 24 кв.111","Россия, г. Калининград, Максима Горького ул., д. 25 кв.35","Россия, г. Мурманск, Спортивная ул., д. 10 кв.136","Россия, г. Череповец, Ленина В.И.ул., д. 24 кв.185","Россия, г. Камышин, Хуторская ул., д. 8 кв.106","Россия, г. Вологда, Школьная ул., д. 14 кв.78","Россия, г. Вологда, Школьная ул., д. 1 кв.8","Россия, г. Северодвинск, Минская ул., д. 14 кв.128","Россия, г. Златоуст, Светлая ул., д. 23 кв.185","Россия, г. Рубцовск, Новая ул., д. 8 кв.74","Россия, г. Домодедово, Первомайский пер., д. 7 кв.105","Россия, г. Коломна, Колхозная ул., д. 10 кв.6","Россия, г. Первоуральск, 17 Сентября ул., д. 2 кв.32","Россия, г. Ноябрьск, 17 Сентября ул., д. 18 кв.178","Россия, г. Рязань, Шоссейная ул., д. 5 кв.121","Россия, г. Санкт-Петербург, Октябрьский пер., д. 4 кв.133","Россия, г. Смоленск, Пушкина ул., д. 23 кв.32","Россия, г. Армавир, Речная ул., д. 21 кв.2","Россия, г. Рыбинск, Полевой пер., д. 7 кв.196","Россия, г. Пушкино, Полесская ул., д. 23 кв.120","Россия, г. Муром, Заречный пер., д. 25 кв.30","Россия, г. Архангельск, Речная ул., д. 3 кв.72"]
couriers = [["Климент", "Наумов", "Иоаннович"],["Мария", "Денисова", "Андреевна",],["Дмитрий", "Гришин", "Кузьмич"],["Галактион", "Субботин", "Лукич"],]
drivers = [["Антон", "Тетерин", "Макарович"],["Лукьян", "Стрелков", "Марленович"],["Матвей", "Гурьев", "Минич"],["Елена", "Казакова", "Вениаминовна"]]

# пользователи мужчины
names_m = ["Рубен","Соломон","Степан","Прохор","Никанор","Марсель","Дементий","Марк","Павел","Нестор","Владлен","Агафон","Савва","Иосиф","Адам","Виктор","Варфоломей","Серафим","Георгий","Феликс"]
surnames_m = ["Аристов","Случевский","Казарезов","Жеффре","Гольдин","Сафронов","Митасов","Краснянский","Зыльков","Широнин","Федулов","Ярмоненко","Емельяненко","Сукачёв","Яблочков","Яранцев","Янаслов","Куделькин","Кооскора","Перехваткин"]
father_names_m = ["Артёмович","Тимурович","Фёдорович","Феликсович","Билалович","Олегович","Епифанович","Григориевич","Мартинович","Сигизмундович","Никонович","Несторович","Олегович","Эмирович","Алексеевич","Тигранович","Фролович","Фомевич","Эмильевич","Петрович"]

# пользователи женщины
names_f = ["Сафина","Агата","Соня","Евангелина","Анастасия","Малика","Марьяна","Нона","Адриана","Ясмин","Любовь","Алёна","Амина","Ульяна","Таисия","Роза","Владислава","Наталия","Елена","Ясмина"]
surnames_f = ["Федосова","Ратникова","Сухова","Мартынова","Абакумова","Кубланова","Педич","Фанина","Овсова","Летова","Колпакова","Буклина","Захарова","Тимиряева","Лисицына","Акулова","Лобачёва","Шапиро","Шаршина","Серыха",]
father_names_f = ["Мартиновна","Мироновна","Евгениевна","Артёмовна","Демьяновна","Маратовна","Андреевна","Анатольевна","Арсеновна","Вадимовна","Даниловна","Алексеевна","Карповна","Мартиновна","Мирославовна","Владленовна","Леоновна","Игнатиевна","Якововна","Адамовна"]
n = 3

for i in range(100):
    # курьеры, заказы с мужчинами
    if i <= 25:
        sender_info = [surnames_m[random.randint(0,len(surnames_m))-1], names_m[random.randint(0,len(names_m))-1], father_names_m[random.randint(0,len(father_names_m))-1]]
        recipient_info = [surnames_m[random.randint(0,len(surnames_m))-1], names_m[random.randint(0,len(names_m))-1], father_names_m[random.randint(0,len(father_names_m))-1]]
        size = [random.randint(1,50), random.randint(1,50), random.randint(1,50), random.randint(1,50), round(random.random() * 5,n)]
        address = f"\"{adresses[random.randint(0,len(adresses))-1]}\""
        paid = bool(random.randint(0,1))
        expected_date = random_date("3/11/2022 1:30 PM", "12/11/2022 4:50 AM", random.random())
        real_date = random_date(expected_date, "12/11/2022 4:50 AM", random.random())
        courier = couriers[random.randint(0,len(couriers))-1]
        courier_info = [courier[1], courier[0], courier[2], ["-","-","-"]]
        complete = bool(random.randint(0,1)) if paid else False
        paid = "true" if paid else "false"
        complete = "true" if complete else "false"
        cost = random.randint(100,3000)
        print(f"db.orders.insertOne({{_id: {i}, sender_info: {sender_info}, recipient_info: {recipient_info}, size: {size}, address: {address}, paid: {paid}, expected_date: \"{expected_date}\", real_date: \"{real_date}\", courier_info: {courier_info}, complete: {complete}, cost: {cost}}})")
    # курьеры, заказы с женщинами
    if 26 <= i <= 50:
        sender_info = [surnames_f[random.randint(0,len(surnames_f))-1], names_f[random.randint(0,len(names_f))-1], father_names_f[random.randint(0,len(father_names_f))-1]]
        recipient_info = [surnames_f[random.randint(0,len(surnames_f))-1], names_f[random.randint(0,len(names_f))-1], father_names_f[random.randint(0,len(father_names_f))-1]]
        size = [random.randint(1,50), random.randint(1,50), random.randint(1,50), random.randint(1,50), round(random.random() * 5,n)]
        address = f"\"{adresses[random.randint(0,len(adresses))-1]}\""
        paid = bool(random.randint(0,1))
        expected_date = random_date("3/11/2022 1:30 PM", "12/11/2022 4:50 AM", random.random())
        real_date = random_date(expected_date, "12/11/2022 4:50 AM", random.random())
        courier = couriers[random.randint(0,len(couriers))-1]
        courier_info = [courier[1], courier[0], courier[2], ["-","-","-"]]
        complete = bool(random.randint(0,1)) if paid else False
        paid = "true" if paid else "false"
        complete = "true" if complete else "false"
        cost = random.randint(100,3000)
        print(f"db.orders.insertOne({{_id: {i}, sender_info: {sender_info}, recipient_info: {recipient_info}, size: {size}, address: {address}, paid: {paid}, expected_date: \"{expected_date}\", real_date: \"{real_date}\", courier_info: {courier_info}, complete: {complete}, cost: {cost}}})")
    # водители, заказы с женщинами
    if 51 <= i <= 76:
        sender_info = [surnames_f[random.randint(0,len(surnames_f))-1], names_f[random.randint(0,len(names_f))-1], father_names_f[random.randint(0,len(father_names_f))-1]]
        recipient_info = [surnames_f[random.randint(0,len(surnames_f))-1], names_f[random.randint(0,len(names_f))-1], father_names_f[random.randint(0,len(father_names_f))-1]]
        size = [random.randint(1,50), random.randint(1,50), random.randint(1,50), random.randint(1,50), round(random.random() * 5,n)]
        address = f"\"{adresses[random.randint(0,len(adresses))-1]}\""
        paid = bool(random.randint(0,1))
        expected_date = random_date("3/11/2022 1:30 PM", "12/11/2022 4:50 AM", random.random())
        real_date = random_date(expected_date, "12/11/2022 4:50 AM", random.random())
        driver = drivers[random.randint(0,len(drivers))-1]
        driver_info = [driver[1], driver[0], driver[2], cars[random.randint(0,len(cars))-1]]
        complete = bool(random.randint(0,1)) if paid else False
        paid = "true" if paid else "false"
        complete = "true" if complete else "false"
        cost = random.randint(1000,10000)
        print(f"db.orders.insertOne({{_id: {i}, sender_info: {sender_info}, recipient_info: {recipient_info}, size: {size}, address: {address}, paid: {paid}, expected_date: \"{expected_date}\", real_date: \"{real_date}\", courier_info: {driver_info}, complete: {complete}, cost: {cost}}})")
    # водители, заказы с мужчинами
    if 77 <= i <= 99:
        sender_info = [surnames_m[random.randint(0,len(surnames_m))-1], names_m[random.randint(0,len(names_m))-1], father_names_m[random.randint(0,len(father_names_m))-1]]
        recipient_info = [surnames_m[random.randint(0,len(surnames_m))-1], names_m[random.randint(0,len(names_m))-1], father_names_m[random.randint(0,len(father_names_m))-1]]
        size = [random.randint(1,50), random.randint(1,50), random.randint(1,50), random.randint(1,50), round(random.random() * 5,n)]
        address = f"\"{adresses[random.randint(0,len(adresses))-1]}\""
        paid = bool(random.randint(0,1))
        expected_date = random_date("3/11/2022 1:30 PM", "12/11/2022 4:50 AM", random.random())
        real_date = random_date(expected_date, "12/11/2022 4:50 AM", random.random())
        driver = drivers[random.randint(0,len(drivers))-1]
        driver_info = [driver[1], driver[0], driver[2], cars[random.randint(0,len(cars))-1]]
        complete = bool(random.randint(0,1)) if paid else False
        paid = "true" if paid else "false"
        complete = "true" if complete else "false"
        cost = random.randint(1000,10000)
        print(f"db.orders.insertOne({{_id: {i}, sender_info: {sender_info}, recipient_info: {recipient_info}, size: {size}, address: {address}, paid: {paid}, expected_date: \"{expected_date}\", real_date: \"{real_date}\", courier_info: {driver_info}, complete: {complete}, cost: {cost}}})")
