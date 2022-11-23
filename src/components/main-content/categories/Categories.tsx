import React from 'react';
import style from './Categories.module.scss';

const CATEGORIES = [
  'Недвижимость',
  'Транспорт',
  'Телефоны, связь и гаджеты',
  'Компьютеры и оргтехника',
  'Строительство и ремонт',
  'Одежда, обувь и аксессуары',
  'Мебель и интерьер',
  'Аудио-Видео-Фото',
  'Все остальное',
  'Все для торжеств',
  'Бытовая техника',
  'Работа',
  'Услуги',
  'Спорт, здоровье, красота',
  'Туризм, отдых и развлечения',
  'Бизнес',
  'Все для дома и офиса',
  'Детский мир',
  'Сельское хозяйство',
  'Питомцы и растения',
  'Музыкальные инструменты',
];

const Categories = () => {
  return (
    <section className={style['categories-container']}>
      <ul className={style.categories}>
        <div className={style['label-container']}>
          <h2 className={style['categories-label']}>Объявления</h2>
        </div>
        {CATEGORIES.map((category) => (
          <li key={category} className={style.category}>
            <a className={style.category} href="#">
              <p className={style['link-text']}>{category}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
