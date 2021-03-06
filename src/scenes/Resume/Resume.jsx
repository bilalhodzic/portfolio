import s from './Resume.module.scss';
import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
import { BiLinkExternal } from 'react-icons/all';
import { useEffect, useRef, useState } from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import Button from '../../components/UIElements/Button/Button';
//react-pdf
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink =
  'https://drive.google.com/file/d/1D-tl4jrhAy1IvW9D4SHpCYtK-_ojH6YD/view?usp=sharing';

const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);
  useEffect(() => {
    setPdfPageWidth(
      pdfWrapper.current?.getBoundingClientRect().width || null,
    );
  }, []);

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent',
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>

          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <Button
          style={{
            margin: 'auto',
            width: '15rem',
            marginTop: '2rem',
          }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <BiLinkExternal />
          <span className={s.downloadText}> View online</span>
        </Button>

        {/* <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            loading={<LinerProgress />}
            file={{
              url: resumeLink,
            }}
          >
            <Page
              onLoadSuccess={removeTextLayerOffset}
              loading={<LinerProgress />}
              width={pdfPageWidth}
              pageNumber={1}
            />
          </Document>
        </div> */}
      </div>
    </BaseLayout>
  );
};

export default Resume;
