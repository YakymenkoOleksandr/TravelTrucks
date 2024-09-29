# TravelTrucks

## Опис

Дана програма — це сайт для перегляду, вибору та бронювання/покупки житлових фургонів для подорожей. На HomePage ви можете перейти до каталогу фургонів, де є фільтри для відбору фургонів. На сторінці каталогу представлені картки фургонів з їх описом та кнопкою **Show More**, за якою можна перейти до деталей. У деталях відображаються дані по фургону, додаткові коментарі, а також форма бронювання.

## Особливості

1. Сайт реалізовано з використанням роутингу; перехід на сторінки здійснюється без перезавантаження.
2. Фільтрація за допомогою Location, Vehicle equipment, Vehicle type. Локація вводиться в інпуті, обладнання фургона та тип кузова обираються кліком по кнопці; активні кнопки отримують червоний бордер, фільтрація відбувається після натискання на кнопку **Search**.
3. Пагінація: на сторінці відображаються 4 фургони, за допомогою кнопки **Load More** можна завантажити додаткові 4 фургони. Кнопка приховується, коли фургонів більше немає.
4. За допомогою кнопки **Show More** здійснюється перехід на картку окремого автомобіля з додатковою інформацією.
5. На сторінці картки окремого автомобіля реалізований умовний рендеринг між блоком коментарів та характеристиками транспортного засобу за допомогою кнопок **Features** та **Reviews**.
6. На сторінці картки окремого автомобіля реалізована форма для бронювання/покупки фургона за допомогою Formik та валідації.
7. При натисканні на сердечко фургон додається в список обраних і надалі таке авто відображається з червоним сердечком.

## Використані технології

1. React
2. Redux
3. Axios
4. CSS модулі
5. Formik
6. DatePicker (для обрання дати через календар)
7. Yup (для валідації форми)
8. Toast (для виведення повідомлень)
9. PropTypes (для встановлення типів пропсів)
10. clsx (для переключення класів)

## Інструкції з встановлення

Кроки для встановлення та запуску програми:

1. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/YakymenkoOleksandr/TravelTrucks
   cd TravelTrucks

   ```

2. Встановіть залежності:
   npm install
   npm i react
   npm i redux
   npm i axios
   npm i react-css-modules
   npm i formik
   npm i react-datepicker
   npm i yup
   npm i toastr
   npm i prop-types
   npm i clsx

3. Запустіть проект:
   npm run dev

## Інформація про автора

- **ПІБ**: Якименко Олександр Володимирович
- **Телефон**: +380687877431
- **E-mail**: [yakymenko_olekandr@ukr.net](mailto:yakymenko_olekandr@ukr.net), [yakymenkooleksandr1@gmail.com](mailto:yakymenkooleksandr1@gmail.com)
- **Освіта**: Вища НЮУ ім. Я. Мудрого, курси GOIT QA, GOIT FullStack

На даний момент доступні два офіційні плагіни:

@vitejs/plugin-react — використовує Babel для Fast Refresh
@vitejs/plugin-react-swc — використовує SWC для Fast Refresh
