import { DEMO_API_DATA, DEMO_MODE } from '../utils/constants';
import React, { useEffect, useState } from 'react';

import KanbanBoard from '../components/KanbanBoard';
import styles from '../styles/pages/HomePage.module.css';

function HomePage() {
  const [isLoading, setLoadingState] = useState(true);
  const [webData, setWebData] = useState({});

  const initializeData = async () => {
    if (isLoading) {
      // to save api calls, use local json
      if (DEMO_MODE) {
        setWebData(DEMO_API_DATA);
      } else {
        const response = await fetch(
          'https://api.quicksell.co/v1/internal/frontend-assignment'
        );
        const data = await response.json();
        setWebData(data);
      }

      // not handling when error comes - time constraint
      // just don't set loading flag
      setLoadingState(false);
      // for debugging
      // setTimeout(() => setLoadingState(false), 2000)
    }
  };

  // fetch data from server
  useEffect(() => {
    initializeData();
  }, []);

  if (isLoading) return <div className={styles.loadingContainer}>Loading</div>;
  else return <KanbanBoard data={webData} />;
}

export default HomePage;
