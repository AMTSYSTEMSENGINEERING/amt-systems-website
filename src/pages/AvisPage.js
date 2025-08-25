import React, { useEffect, useMemo, useState } from "react";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";
import RatingStars from "../components/RatingStars";
import Avis from "../components/avis/Avis";

const LS_KEY = "amt-reviews";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState("new"); // 'new' | 'top'
  const [filter, setFilter] = useState(0); // 0 = all; 1..5 = exact

  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) setReviews(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (data) => {
    const r = { id: crypto.randomUUID(), ...data, createdAt: Date.now() };
    setReviews((prev) => [r, ...prev]);
  };

  const stats = useMemo(() => {
    if (!reviews.length) return { avg: 0, count: 0, histogram: [0,0,0,0,0] };
    const histogram = [0,0,0,0,0];
    let sum = 0;
    for (const r of reviews) { histogram[r.rating-1]++; sum += r.rating; }
    return { avg: +(sum / reviews.length).toFixed(2), count: reviews.length, histogram };
  }, [reviews]);

  const shown = useMemo(() => {
    let list = [...reviews];
    if (filter) list = list.filter((r) => r.rating === filter);
    if (sort === "new") list.sort((a,b) => b.createdAt - a.createdAt);
    else list.sort((a,b) => b.rating - a.rating || b.createdAt - a.createdAt);
    return list;
  }, [reviews, sort, filter]);

  return (
    <div>
    <main className="reviews-page">
      <section className="rp__hero">
        <h1>Vos avis comptent</h1>
        <p>Partagez votre expérience avec AMT System Engineering. Merci !</p>
      </section>

      <section className="rp__summary">
        <div className="rp__avg">
          <div className="rp__avg-num">{stats.avg}</div>
          <RatingStars value={Math.round(stats.avg)} readOnly size="md" />
          <div className="rp__count">{stats.count} avis</div>
        </div>
        <div className="rp__filters">
          <label>Filtrer par note:</label>
          <select value={filter} onChange={(e)=>setFilter(+e.target.value)}>
            <option value={0}>Toutes</option>
            {[5,4,3,2,1].map((n)=>(<option key={n} value={n}>{n} étoiles</option>))}
          </select>
          <label>Trier:</label>
          <select value={sort} onChange={(e)=>setSort(e.target.value)}>
            <option value="new">Plus récents</option>
            <option value="top">Mieux notés</option>
          </select>
        </div>
      </section>

      <section className="rp__grid">
        <div className="rp__left">
          <h2>Laisser un avis</h2>
          <ReviewForm onSubmit={addReview} />
        </div>
        <div className="rp__right">
          <h2>Tous les avis</h2>
          {shown.length === 0 && <div className="rp__empty">Aucun avis pour le moment.</div>}
          <div className="rp__list">
            {shown.map((r) => (<ReviewCard key={r.id} review={r} />))}
          </div>
        </div>
      </section>
    </main>
       <Avis/>
       </div>
  );
}
