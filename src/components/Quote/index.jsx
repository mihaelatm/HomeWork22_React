import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../../features/quote/quoteSlice";
import styles from "./styles.module.css";

function Quote() {
  const dispatch = useDispatch();
  const { data: quote, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
  };

  if (status === "failed") return <h2>{error}</h2>;
  if (status === "loading") return <h2>Loading...</h2>;

  return (
    <div className={styles.container}>
      {status === "succeeded" && (
        <div>
          <p className={styles.quote_text}>"{quote.content}"</p>
          <p className={styles.quote_author}>{quote.author}</p>
        </div>
      )}
      <button onClick={handleNewQuote} className={styles.button}>
        New Quote
      </button>
    </div>
  );
}

export default Quote;
