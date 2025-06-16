import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Platform Builder',
    description: (
      <>
        Our platform builder provides an intuitive interface for creating and customizing applications
        with a rich set of components and tools.
      </>
    ),
  },
  {
    title: 'Enterprise Solutions',
    description: (
      <>
        Build robust enterprise solutions with our platform, including CRM, ERP, and custom
        applications tailored to your business needs.
      </>
    ),
  },
  {
    title: 'Industry-Specific Features',
    description: (
      <>
        Leverage industry-specific templates and features for healthcare, education, retail,
        and other sectors.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
