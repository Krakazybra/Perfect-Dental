import React, { useState } from 'react';
import { PLATFORM_RATINGS, REVIEWS, CLINIC_INFO } from '../data/clinicData';
import { Star, MessageSquarePlus, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ReviewsPageProps {
  onOpenAppointment: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenAppointment }) => {
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      date: new Date().toLocaleDateString('ru-RU'),
      rating: newRating,
      text: newText,
      initials: newAuthor.slice(0, 2).toUpperCase(),
      commentLabel: 'Комментарий от нашего клиента',
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewAuthor('');
    setNewText('');
    setIsAddReviewOpen(false);
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-16">
      {/* Top Section: Independent Ratings Grid */}
      <section>
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-on-surface mb-2">Независимый рейтинг</h1>
          <p className="text-on-surface-variant text-base">честных отзывов от наших клиентов</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {PLATFORM_RATINGS.map((rating, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[260px] relative overflow-hidden"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full border border-outline-variant/60 flex items-center justify-center shrink-0 bg-white p-3">
                  <img src={rating.logo} alt={rating.platform} className="max-h-12 w-auto object-contain" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1 text-primary text-3xl font-bold">
                    <Star className="w-6 h-6 fill-primary text-primary inline" />
                    <span>{rating.rating}</span>
                    <span className="text-xs text-secondary font-normal">из {rating.maxRating}</span>
                  </div>
                  <span className="text-sm font-semibold underline text-on-surface hover:text-primary">
                    {rating.linkText}
                  </span>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant">{rating.description}</p>
              {rating.platform === 'Yandex' && (
                <div className="absolute -bottom-6 -right-6 w-28 h-28 opacity-80 pointer-events-none hidden md:block">
                  <img src={CLINIC_INFO.diamondToothImage} alt="Diamond Tooth" className="w-full h-full object-contain" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Main Reviews Canvas Container */}
      <section className="bg-primary-fixed-dim/30 rounded-2xl p-8 md:p-12 border border-outline-variant/30 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-2xl text-primary">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Самая лучшая похвала - это ваши здоровые зубы.
            </h2>
            <p className="text-base opacity-90">Спасибо за вашу признательность!</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsAddReviewOpen(true)}
              className="bg-primary text-on-primary px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              Оставить отзыв
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((review) => (
            <article
              key={review.id}
              className="bg-surface-container-lowest flex flex-col h-full overflow-hidden shadow-sm rounded-xl border border-outline-variant/30"
            >
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-on-surface mb-1">{review.author}</h3>
                <time className="text-xs font-semibold text-primary mb-3 block">{review.date}</time>

                <div className="flex gap-1 text-[#F59E0B] mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                <p className="text-sm text-on-surface-variant flex-grow mb-6 leading-relaxed">
                  {review.text}
                </p>
              </div>

              <div className="bg-surface-container-low px-8 py-4 border-t border-outline-variant/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center text-xs font-bold text-on-surface border border-outline-variant/20 shadow-sm shrink-0">
                  {review.initials}
                </div>
                <span className="text-xs text-on-surface-variant">{review.commentLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Add Review Dialog Modal */}
      {isAddReviewOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface border border-outline-variant rounded-2xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setIsAddReviewOpen(false)}
              className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-on-surface mb-2">Оставить отзыв</h3>
            <p className="text-xs text-on-surface-variant mb-6">Ваше мнение помогает нам становиться еще лучше</p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="Мария Смирнова"
                  className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary text-on-surface"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Оценка *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setNewRating(s)}
                      className="p-1 cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          s <= newRating
                            ? 'fill-[#F59E0B] text-[#F59E0B]'
                            : 'text-outline-variant'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Текст отзыва *
                </label>
                <textarea
                  rows={4}
                  required
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder="Поделитесь вашими впечатлениями от визита в клинику DENTA..."
                  className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary text-on-surface resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-bold py-3 rounded-xl hover:bg-primary-container transition-colors uppercase tracking-wider text-xs"
              >
                Опубликовать отзыв
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
