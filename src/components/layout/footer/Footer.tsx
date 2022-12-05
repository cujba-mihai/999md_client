import Image from '@/components/Image';
import Link from 'next/link';
import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={style['main-container']}>
        <div className={style['footer-columns-container']}>
          <div className="footerCol180px">
            <div className={style['footer-columns-col-flex']}>
              <h3 className={style['footer-columns-title']}>INFO</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    О проекте
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Способы оплаты
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Блог
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Business
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    API
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Вакансии
                  </Link>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Карта сайта
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footerCol250px">
            <div className={style['footer-columns-col-flex']}>
              <h3 className={style['footer-columns-title']}>Support</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Правила
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Часто задаваемые вопросы
                  </Link>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Рекомендации
                  </Link>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Советы по безопасности
                  </Link>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Политика конфиденциальности
                  </Link>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Поддержка: (+373) 22 888959
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    эл. почта: info@999.md
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Банк идей
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footerCol260px">
            <div className={style['footer-columns-col-flex']}>
              <h3 className={style['footer-columns-title']}>MOBILE</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Мобильная версия
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    999 Apps
                  </Link>
                </li>
              </ul>

              <h3 className={style['footer-columns-title']}>Market</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Стать партнером
                  </Link>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Инструкция для магазинов
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footerCol210px">
            <div className={style['footer-columns-col-flex']}>
              <h3 className={style['footer-columns-title']}>PROMO</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Баннерная реклама
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    Продвижение объявления
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    эл. почта: info@numbers.md
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footerCol100px">
            <div className={style['footer-columns-col-flex']}>
              <h3 className={style['footer-columns-title']}>Social</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    <Image src="fb.svg" alt="Facebook" />
                  </Link>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    <Image src="ok.svg" alt="Facebook" />
                  </Link>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    <Image src="vk.svg" alt="Facebook" />
                  </Link>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    <Image src="master-card.svg" alt="Facebook" />
                  </Link>
                  <Link href="#" className={style['footer-columns-item-link']}>
                    <Image src="visa.svg" alt="Facebook" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className={style['copyright-container']}>
        <p className={style['copyright-text']}>
          This website is a clone of <Link href="https://999.md">999.md. </Link>All
          rights belong to them.
        </p>
      </div>
    </>
  );
};

export default Footer;
