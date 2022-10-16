import Svg from '@/components/Svg';
import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={style['main-container']}>
        <div className={style['footer-columns-container']}>
          <div className="footer-col-180px">
            <div className={style['footer-columns-col-flex']}>
              <h3 className={style['footer-columns-title']}>INFO</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    О проекте
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Способы оплаты
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Блог
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Business
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    API
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Вакансии
                  </a>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Карта сайта
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col-250px">
            <div className={style['footer-columns-col-flex']}>
              <h3 className={style['footer-columns-title']}>Support</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Правила
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Часто задаваемые вопросы
                  </a>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Рекомендации
                  </a>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Советы по безопасности
                  </a>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Политика конфиденциальности
                  </a>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Поддержка: (+373) 22 888959
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    эл. почта: info@999.md
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Банк идей
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col-260px">
            <div className={style['footer-columns-col-flex']}>
              <h3 className={style['footer-columns-title']}>MOBILE</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Мобильная версия
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    999 Apps
                  </a>
                </li>
              </ul>

              <h3 className={style['footer-columns-title']}>Market</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Стать партнером
                  </a>
                </li>

                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Инструкция для магазинов
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col-210px">
            <div className={style['footer-columns-col-flex']}>
              <h3 className={style['footer-columns-title']}>PROMO</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Баннерная реклама
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    Продвижение объявления
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    эл. почта: info@numbers.md
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col-100px">
            <div className={style['footer-columns-col-flex']}>
              <h3 className={style['footer-columns-title']}>Social</h3>
              <ul className={style['footer-columns-list']}>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    <Svg src="fb.svg" alt="Facebook" />
                  </a>
                  <a href="#" className={style['footer-columns-item-link']}>
                    <Svg src="ok.svg" alt="Facebook" />
                  </a>
                  <a href="#" className={style['footer-columns-item-link']}>
                    <Svg src="vk.svg" alt="Facebook" />
                  </a>
                </li>
                <li className={style['footer-columns-list-item']}>
                  <a href="#" className={style['footer-columns-item-link']}>
                    <Svg src="master-card.svg" alt="Facebook" />
                  </a>
                  <a href="#" className={style['footer-columns-item-link']}>
                    <Svg src="visa.svg" alt="Facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className={style['copyright-container']}>
        <p className={style['copyright-text']}>
          This website is a clone of <a href="https://999.md">999.md. </a>All
          rights belong to them.
        </p>
      </div>
    </>
  );
};

export default Footer;
