from datetime import datetime, timedelta

CARS = [["С065MK 78RUS", "ГАЗель", "ГАЗ-3302", "DIPNF83CP20M6BE5X"], ["H283TX 78RUS", "ГАЗель", "ГАЗ-32213", "GKP8SKB5G8K4G1ZPB"], ["C423CO 78RUS", "ГАЗель", "ГАЗ-32214", "OLD84MPF81O0ZHX74"], ["X789ET 78RUS", "ГАЗель", "ГАЗ-3302", "TZ4MZM0VW5Y4XAX7Q"], ["A001MM 78RUS", "ГАЗель", "ГАЗ-32213", "GYUKXEOSDSMNTBDHR"], ["E102CH 78RUS", "ГАЗель", "ГАЗ-32214", "KL3INXSXW3IDWS9RZ"], ["H882EP 78RUS", "Mercedes", "Mercedes-Benz Atego 1224 L", "VMN8O43R28N40WRIE"], ["K560PO 78RUS", "Volvo", "Volvo FE", "YB52Z2HFR6OFKM3JH"]]
ADDRESSES = ["Россия, г. Тамбов, Октябрьский пер., д. 25 кв.71", "Россия, г. Нефтекамск, Победы ул., д. 15 кв.87", "Россия, г. Энгельс, Западная ул., д. 11 кв.71", "Россия, г. Орёл, Социалистическая ул., д. 4 кв.144", "Россия, г. Ставрополь, Космонавтов ул., д. 24 кв.182", "Россия, г. Бийск, Шоссейная ул., д. 9 кв.26", "Россия, г. Липецк, Полевая ул., д. 15 кв.19", "Россия, г. Хабаровск, Советская ул., д. 24 кв.111", "Россия, г. Калининград, Максима Горького ул., д. 25 кв.35", "Россия, г. Мурманск, Спортивная ул., д. 10 кв.136", "Россия, г. Череповец, Ленина В.И.ул., д. 24 кв.185", "Россия, г. Камышин, Хуторская ул., д. 8 кв.106", "Россия, г. Вологда, Школьная ул., д. 14 кв.78", "Россия, г. Вологда, Школьная ул., д. 1 кв.8", "Россия, г. Северодвинск, Минская ул., д. 14 кв.128", "Россия, г. Златоуст, Светлая ул., д. 23 кв.185", "Россия, г. Рубцовск, Новая ул., д. 8 кв.74", "Россия, г. Домодедово, Первомайский пер., д. 7 кв.105", "Россия, г. Коломна, Колхозная ул., д. 10 кв.6", "Россия, г. Первоуральск, 17 Сентября ул., д. 2 кв.32", "Россия, г. Ноябрьск, 17 Сентября ул., д. 18 кв.178", "Россия, г. Рязань, Шоссейная ул., д. 5 кв.121", "Россия, г. Санкт-Петербург, Октябрьский пер., д. 4 кв.133", "Россия, г. Смоленск, Пушкина ул., д. 23 кв.32", "Россия, г. Армавир, Речная ул., д. 21 кв.2", "Россия, г. Рыбинск, Полевой пер., д. 7 кв.196", "Россия, г. Пушкино, Полесская ул., д. 23 кв.120", "Россия, г. Муром, Заречный пер., д. 25 кв.30", "Россия, г. Архангельск, Речная ул., д. 3 кв.72"]
COURIERS = [["Климент", "Наумов", "Иоаннович", "naumovmc@gmail.com", "c"], ["Мария", "Денисова", "Андреевна", "denisovamc@gmail.com", "c"], ["Дмитрий", "Гришин", "Кузьмич", "grishinmc@gmail.com", "c"], ["Галактион", "Субботин", "Лукич", "subbotinmc@gmail.com", "c"],]
DRIVERS = [["Антон", "Тетерин", "Макарович", "teterinmc@yandex.ru", "d"], ["Лукьян", "Стрелков", "Марленович", "strelkovmc@yandex.ru", "d"], ["Матвей", "Гурьев", "Минич", "gurievmc@yandex.ru", "d"], ["Елена", "Казакова", "Вениаминовна", "kazakovamc@yandex.ru", "d"]]
ADMINS = [["Юлия", "Кондрашова", "Ивановна", "kondrashovaui@mail.ru", "a"]]
NAMES_MALE = ["Рубен", "Соломон", "Степан", "Прохор", "Никанор", "Марсель", "Дементий", "Марк", "Павел", "Нестор", "Владлен", "Агафон", "Савва", "Иосиф", "Адам", "Виктор", "Варфоломей", "Серафим", "Георгий", "Феликс"]
SURNAMES_MALE = ["Аристов", "Случевский", "Казарезов", "Жеффре", "Гольдин", "Сафронов", "Митасов", "Краснянский", "Зыльков", "Широнин", "Федулов", "Ярмоненко", "Емельяненко", "Сукачёв", "Яблочков", "Яранцев", "Янаслов", "Куделькин", "Кооскора", "Перехваткин"]
FATHER_NAMES_MALE = ["Артёмович", "Тимурович", "Фёдорович", "Феликсович", "Билалович", "Олегович", "Епифанович", "Григориевич", "Мартинович", "Сигизмундович", "Никонович", "Несторович", "Олегович", "Эмирович", "Алексеевич", "Тигранович", "Фролович", "Фомевич", "Эмильевич", "Петрович"]
NAMES_FEMALE = ["Сафина", "Агата", "Соня", "Евангелина", "Анастасия", "Малика", "Марьяна", "Нона", "Адриана", "Ясмин", "Любовь", "Алёна", "Амина", "Ульяна", "Таисия", "Роза", "Владислава", "Наталия", "Елена", "Ясмина"]
SURNAMES_FEMALE = ["Федосова", "Ратникова", "Сухова", "Мартынова", "Абакумова", "Кубланова", "Педич", "Фанина", "Овсова", "Летова", "Колпакова", "Буклина", "Захарова", "Тимиряева", "Лисицына", "Акулова", "Лобачёва", "Шапиро", "Шаршина", "Серыха",]
FATHER_NAMES_FEMALE = ["Мартиновна", "Мироновна", "Евгениевна", "Артёмовна", "Демьяновна", "Маратовна", "Андреевна", "Анатольевна", "Арсеновна", "Вадимовна", "Даниловна", "Алексеевна", "Карповна", "Мартиновна", "Мирославовна", "Владленовна", "Леоновна", "Игнатиевна", "Якововна", "Адамовна"]
N_ORDERS = 100
N_USERS = 20
START_DATE = datetime.now().strftime('%d/%m/%Y %M:%H %p')
END_DATE = (datetime.now() + timedelta(weeks=1)).strftime("%d/%m/%Y %M:%H %p")
MIN_COST = 200
DRIVER_COEFFICIENT = 1.5
WORK_DAYS = [" пн", "вт", "ср", "чт", "пт", "сб", "вс"]