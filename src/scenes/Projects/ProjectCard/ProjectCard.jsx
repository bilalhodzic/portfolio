import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectCard = ({ id, image, title, description }) => {
  const location = useLocation();

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <div className={s.cardHeader}>
          <Link
            to={{
              pathname: `/project/${id}`,
              state: {
                background: location,
              },
            }}
          >
            <LazyLoadImage
              alt="card-img"
              effect="blur"
              src={image.src}
              width="100%"
              style={{
                minHeight: '10rem',
                objectFit: 'contain',
                height: '100%',
              }}
              placeholderSrc={image.placeholderSrc}
              wrapperClassName={s.projectimage}
            />
          </Link>
        </div>

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
