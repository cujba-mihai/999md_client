import Link from 'next/link';
import React from 'react';
import style from './Categories.module.scss';

const CATEGORIES = [
  {
    name: 'Недвижимость',
    url: 'real-estate'
  },
  {
    name: 'Транспорт',
    url: 'transport'
  },
  {
    name: 'Телефоны, связь и гаджеты',
    url: 'phones'
  },
  {
    name: 'Компьютеры и оргтехника',
    url: 'computers'
  },
  {
    name: 'Строительство и ремонт',
    url: 'repairs'
  },
  {
    name: 'Одежда, обувь и аксессуары',
    url: 'apparel'
  },
  {
    name:'Мебель и интерьер',
    url: 'furniture'
  },
  {
    name: 'Аудио-Видео-Фото',
    url: 'audio-visual'
  },
  {
    name: 'Все остальное',
    url: 'miscellaneous'
  }, 
  {
    name: 'Все для торжеств',
    url: 'celebrations'
  },
  {
    name: 'Бытовая техника',
    url: 'household-appliances'
  },
  {
    name: 'Работа',
    url: 'work'
  },
  {
    name: 'Услуги',
    url: 'services'
  },
  {
    name: 'Спорт, здоровье, красота',
    url: 'sport-beauty-and-health'
  },
  {
    name: 'Туризм, отдых и развлечения',
    url: 'tourism'
  },
  {
    name: 'Бизнес',
    url: 'business'
  },
  {
    name: 'Все для дома и офиса',
    url: 'home-and-office'
  },
  {
    name:'Детский мир',
    url: 'children-s-world'
  },
  {
    name: 'Сельское хозяйство',
    url: 'agriculture'
  },
  {
    name: 'Питомцы и растения',
    url: 'pets-and-plants'
  },
  {
    name: 'Музыкальные инструменты',
    url: 'musical-instruments'
  }
];

const Categories = () => {
  return (
    <section className={style['categories-container']}>
      <ul className={style.categories}>
        <div className={style['label-container']}>
          <h2 className={style['categories-label']}>Объявления</h2>
        </div>
        {CATEGORIES.map((category) => (
          <li key={category.url} className={style.category}>
            <Link className={style.category} href={`/categories/${category.url}`}>
              <p className={style['link-text']}>{category.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
