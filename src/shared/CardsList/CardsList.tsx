import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from './Card/Card';
import { ParkingCard } from './ParkingCard';
import { useDispatch, useSelector } from 'react-redux';
import { PostState } from '../../store/posts/reducer';
import { RootState } from '../../store/reduser';
import { postRequestAsync } from '../../store/posts/actions';
import { Outlet, useNavigate } from 'react-router-dom';
import { useToken } from '../../hooks/useToken';

export function CardsList() {
  const { loading, data, error } = useSelector<RootState, PostState>(state => state.post);
  const [count, setCount] = useState<number>(10);
  const [countRender, setCountRender] = useState(0);
  const bottomOfList = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  useToken();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setCount((prevCount) => {
          if (prevCount < data.length) {
            setCountRender(countRender + 1);
          }
          return data.length;
        })
      if (entries[0].isIntersecting && countRender < 3) {
        dispatch(postRequestAsync())
      }
    }, {
      rootMargin: '50px',
    });


    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current, data, countRender]);

  return (
    <ul className={styles.cardsList}>
      <Outlet />
      { data.length > 1 ?
        data.map((el) => (
          <Card
            key={el.id}
            id={el.id}
          />
        ))
        :
        <>
          <div className={styles.loading}>{!loading && !error && 'Хмм... здесь пока пусто'}</div>
          <ParkingCard key='parkingcard1' />
          <ParkingCard key='parkingcard2' />
          <ParkingCard key='parkingcard3' />
          <ParkingCard key='parkingcard4' />
        </>
      }

      {countRender >= 3 &&
        <button className={styles.showMoreBtn} onClick={() => setCountRender(0)}>Show more</button>
      }

      <div ref={bottomOfList}/>

      {loading && <div className={styles.loading}>Загрузка...</div>}

      {error && <div role='alert' className={styles.loading}>Error: {error}</div>}
    </ul>
  );
}
