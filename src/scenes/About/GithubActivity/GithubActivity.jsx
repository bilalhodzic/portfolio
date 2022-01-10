import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  const colorTheme = {
    background: 'transparent',
    text: '#ffffff',
    grade4: '#206090',
    grade3: '#2978b5',
    grade2: '#69a0cb',
    grade1: '#94bbda',
    grade0: '#d4e4f0',
  };
  return (
    <div className={s.container}>
      <GitHubCalendar
        username="bilalhodzic"
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        fontSize={16}
      />
    </div>
  );
};

export default GithubActivity;
