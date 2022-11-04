import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import moment from 'moment';
import styles from '../styles/Home.module.css';

export const Home: FC = () => {
  const [stock, setStock] = useState('');
  const [quoteTime, setQuoteTime] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState('');
  const [quote, setQuote] = useState({ c: 0, dp: null });

  const { c: current, dp } = quote;

  let change = ''
  if (!!dp && dp > 0) change = `up ${dp}%`;
  if (!!dp && dp < 0) change = `down ${dp}%`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length < 0 || value.length > 4) return;
    setStock(value.toUpperCase());
  }

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stock) {
      setErr('You must enter a stock symbol');
      setQuote({ c: 0, dp: null });
      return;
    }

    setQuote({ c: 0, dp: null });
    setLoading('loading...');
    setErr('');
    
    axios.post(`/api/quotes/${stock}`).then((data) => {
      setLoading('');

      const quoteData = data?.data?.data;
      const error = data?.data?.error;

      if (error || !quoteData.c) {
        setErr('We could not get that data for you.');
        return
      }

      setQuote(quoteData);
      setQuoteTime(moment(Date.now()).format());
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sock Quotes</title>
        <meta name="description" content="Search for current stock prices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Stock Quotes</div>
        <div className={styles.info}>
          <form onSubmit={submitForm}>
            <input onChange={handleChange} type="text" value={stock} />
            <input type="submit" />
          </form>
          <div>
            {!!loading && <div>{loading}</div>}
            {!!current && 
              <div>{`Current Price: $${current} at ${quoteTime} ${change}`}</div>
            }
            {!!err && <div>{err}</div>}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
};

export default Home;
