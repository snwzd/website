import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function ProfileHeader() {
  return (
    <div className={clsx(styles.profileContainer)}>
      <img
        src="/img/profile.png"
        alt="Profile"
        className={styles.profileImage}
      />
      <Heading as='h1'>
        Hello and Namaste!
      </Heading>
      <p className={styles.profileDescription}>
      Hi, I'm Mahaprasad (snwzd), a Cloud Engineer passionate about Backend Systems, Linux, and Cloud-Native Tech. 
      I currently work at AceCloud as a Cloud-DevOps Engineer, building infrastructure and improving developer platform. 
      In my free time, I enjoy sketching.
      </p>
      <div className={styles.socialLinks}>
        <Link className="button button--secondary button--md" to="https://github.com/snwzd">
          GitHub
        </Link>
        <Link className="button button--secondary button--md" to="https://www.linkedin.com/in/mprasadme">
          LinkedIn
        </Link>
        <Link className="button button--secondary button--md" to="https://bsky.app/profile/snwzd.bsky.social">
          BlueSky
        </Link>
        <Link className="button button--secondary button--md" to="https://twitter.com/sloflayer">
          X/Twitter
        </Link>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout description="Personal website.">
      <main className={styles.main}>
        <ProfileHeader />
      </main>
    </Layout>
  );
}
