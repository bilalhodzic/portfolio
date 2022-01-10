import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from 'react-icons/di';
import { SiCsharp, SiDotNet } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>

      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <SiDotNet />
      </li>
      <li className={s.techIcon}>
        <AiOutlineConsoleSql />
      </li>
      <li className={s.techIcon}>
        <SiCsharp />
      </li>

      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
