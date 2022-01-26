import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Mobility',
    img: require('@site/static/img/das_das-en-01.jpg').default,
    description: (
      <>
        Coppernic designs, produces and deploys professional handheld control
        and traceability devices for the security of goods and people.
      </>
    ),
  },
  {
    title: 'Connected Data',
    img: require('@site/static/img/das_das-en-02.jpg').default,
    description: (
      <>
        Coppernic connects and integrates global technology solutions with
        hadware, software and data management.
      </>
    ),
  },
  {
    title: 'Analytics',
    img: require('@site/static/img/das_das-en-03.jpg').default,
    description: (
      <>
        Coppernic collects and analyses data to optimize business processes.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
