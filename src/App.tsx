import { motion, useReducedMotion } from 'motion/react';
import LandingHero from './components/templates/landing-01/landing/hero';
import ExpandableProfileCard from './components/ExpandableProfileCard';

const base = '/perviy-sait-s-ii-demo/';

export function App() {
  const reducedMotion = useReducedMotion();
  return <main className="page">
    <header className="top-nav"><a href="#top">@NIKOLSKAYA.AI</a><nav><a href="#about">О проекте</a><a href="#steps">Как сделать</a><a className="nav-link" href="https://t.me/ai_on_cats">ПРОМПТ В TELEGRAM ↗</a></nav></header>
    <div id="top"><LandingHero /></div>
    <section className="about" id="about"><div><span className="eyebrow">01 / ПРИМЕР</span><h2>ОДНА СТРАНИЦА.<br /><em>МНОГО ВОЗМОЖНОСТЕЙ.</em></h2><p>Это пример личного сайта. Вы можете рассказать о себе, показать работу или проект и дать человеку простой способ связаться с вами.</p><div className="chips"><span>О себе</span><span>Услуги</span><span>Проекты</span><span>Контакты</span></div></div><div className="profile-zone"><span className="eyebrow">Нажмите на карточку ↘</span><ExpandableProfileCard imageSrc={`${base}profile-art.svg`} title="ВАШЕ ИМЯ" subtitle="САЙТ-ВИЗИТКА / ПРИМЕР" content={<div className="profile-content"><p>Здесь появятся ваши имя, история и предложение. В первом уроке ИИ соберёт страницу из ваших данных.</p><p>Копируйте промпт, вставляйте факты о себе и просите изменить результат словами.</p><a href="https://t.me/ai_on_cats" target="_blank" rel="noreferrer">Забрать промпт ↗</a></div>} /></div></section>
    <section className="steps" id="steps"><span className="eyebrow">02 / ПОВТОРИТЕ</span><h2>ВАШ САЙТ<br /><em>ЗА ТРИ ШАГА</em></h2><div className="step-grid">{[['01','Расскажите о себе','Имя, чем занимаетесь и кому помогаете.'],['02','Вставьте промпт','Готовый запрос ждёт вас в Telegram.'],['03','Откройте сайт','Скачайте файл и проверьте результат.']].map(([n,title,body],i)=><motion.article key={n} initial={reducedMotion?false:{opacity:0,y:45,rotate:i===1?-2:2}} whileInView={{opacity:1,y:0,rotate:0}} viewport={{once:true,amount:.35}} transition={{type:'spring',stiffness:110,damping:17,delay:i*.11}}><span>{n}</span><h3>{title}</h3><p>{body}</p></motion.article>)}</div><div className="simple-link"><p>Начать можно с обычного HTML-файла. Он проще и подходит для первого урока.</p><a href={`${base}simple-example.html`}>Открыть простой пример ↗</a></div></section>
    <footer><span>ДЕМО ДЛЯ УРОКА 1 · @NIKOLSKAYA.AI</span><a href="https://ui.watermelon.sh/template/landing-01" target="_blank" rel="noreferrer">ОСНОВА АНИМАЦИИ: WATERMELON UI ↗</a></footer>
  </main>;
}
