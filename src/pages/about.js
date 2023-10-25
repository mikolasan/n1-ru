import React from "react"
import Layout from "../../components/ru/layout"
import { SEO } from "../../components/seo"
import * as styles from "./about.module.css"

const RuAbout = ({ pageContext }) => (
  <Layout
    title="О себе"
    section="about"
    crumbs={pageContext.breadcrumb.crumbs}
    languageName="Switch to english version"
    anotherLanguageLink="/about"
    bannerParagraph={[
      <h1>О себе</h1>,
      <p>Нейронные сети, байесовский вывод, разношёрстный девлог, паранормальные экспедиции, настольные игры и ролёвки, пиксель арт</p>
    ]}
  >
    <div className={styles.ruindex}>

      <p>
        Мне нравятся настольные игры. Когда погружаешься в их особый мир, ты перестаешь обращать внимание на графический дизайн и ограничения навязанные правилами, 
        ты начинаешь жить в этом мире и делать все ради победы, больно чувствовать поражения и торжествовать от выполненных миссий.
      </p>

      <p>
        Мне нравятся поездки на горном велосипеде. Я могу воспринимать природу на приемлемой для меня скорости,
        когда можно в любой момент остановиться, если понравился окружающий пейзаж.
      </p>
      

      <p>
        Я могу любоваться как отдельными электронными компонентами, микросхемами, не подключенными и не припаянными, 
        так и красотой узоров дорожек печатных плат и комбинаций тех же электронных компонентов, занявших свое место, 
        чтобы вместе создать что-то новое, что они не могут по отдельности.
      </p>
      <p>
        Что еще?
        Изучение новых табулатур под гитару для последующей игры и расслабление нервов как приятное следствие. 
        Компьютер, программирование, криптография, математика и прочие радости жизни, которые могут приносить удовлетворение, подобное сексу.
      </p>
      <p>
        У меня есть желание писать, но я пока не решил о чем. И мне кажется, что уже написаны все художественные сюжеты и все технические статьи.
      </p>

      <section>
        <img src="/images/about/youtube.jpg" alt="Граненый стакан с мертини внутри. Стакан наполовину пуст"/>
        <div>
          <h2>Ютюб</h2>
          <p>
            Мой профиль - это прикладная математика. 
            Но каждую ночь я превращаюсь в гика одержимого пайкой, 
            микроконтроллерами, и 3Д принтерами. 
            Берусь за ремонт и восстановление вещей, которые никому не нужны, которых забыло даже время. 
            В этом хобби нет никакого давления по времени или качеству, поэтому я могу частенько ударяться в перфекционизм.
          </p>
          <div className={styles.action}>
            <a href="/ru/youtube">
              <button>Перейти к разделу</button>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.inverse}>
        <img src="/images/about/cv.jpg" alt="Скриншот с резюме, которое в PDF формате" />
        <div>
          <h2>Резюме</h2>
          <p>
            Профессионально занимаюсь разработкой програмных продуктов в индустрии азартных игр.
          </p>
          <div className={styles.action}>
            <a href="/ru/cv">
              <button>К резюме</button>
            </a>
          </div>
        </div>
      </section>

      <section>
        <img src="/images/about/master.jpg" alt="Цифры подготовленные к распознаванию" />
        <div>
          <h2>Научная квалификация</h2>
          <p>
            Математики и нейробиологи не первый год ищут подходы к созданию интелектуальной машины,
            способной обучаться и самостоятельно делать прогнозы и принимать решения.
            Наиболее распространенными системами, используемыми в исследованиях, обязательно перечисляющихся
            в монографиях об искусственном интеллекте, являются нейронные и байесовы сети.
            Розенблатт в своей книге отмечает, что &#171;рассмотрение проблем, связанных с механизмом памяти,
            не может быть отделено от рассмотрения того, что именно запоминается, и поэтому перцептрон стал
            моделью некоторой более общей познающей системы, которая включает в себя как память, так и восприятие&#187;.
          </p>
          <div className={styles.action}>
            <a href="/ru/neural-networks/roadmap">
              <button>Разные мысли о своей научной работе</button>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.inverse}>
        <img src="/images/about/twitter.jpg" alt="Портрет сгенерированный искуственным интеллектом на основании моей фотографии, немного восточных черт добавлено" />
        <div>
          <h2>Всегда живой в твиттере</h2>
          <p>
            Живое общение в ПМ, интересная лента без политики, качественная подборка пиксель арта
          </p>
          <div className={[styles.action, styles.twitter].join(" ")}>
            <a href="https://twitter.com/stakanmartini">
              <button>Почитать последние твиты</button>
            </a>
          </div>
        </div>
      </section>

      <section>
        <img src="/images/about/why.jpg" alt="" />
        <div>
          <h2>Зачем этот сайт?</h2>
          <p>
            ?
          </p>
          <div className={styles.action}>
            <a href="/ru/why">
              <button>Зачем?</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default RuAbout

export const Head = ({ location, data, pageContext }) => (
  <SEO 
    path={location.pathname}
    data={data}
    frontmatter={data?.markdownRemark?.frontmatter}
    pageContext={pageContext}
    title="О себе"
  >

  </SEO>
)