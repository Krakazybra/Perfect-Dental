import React, { useState } from 'react';
import { PRICE_CATEGORIES, CLINIC_INFO } from '../data/clinicData';
import { Download, MessageSquare, Search } from 'lucide-react';

interface PriceListPageProps {
  onOpenAppointment: () => void;
}

export const PriceListPage: React.FC<PriceListPageProps> = ({ onOpenAppointment }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = PRICE_CATEGORIES.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    ),
  })).filter((cat) => cat.items.length > 0);

  const handleDownloadPdf = () => {
    // Generate simple PDF download preview or printable window
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>DENTA - Прайс-лист</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; color: #191c1c; }
            h1 { color: #124346; }
            h2 { color: #124346; border-bottom: 2px solid #124346; padding-bottom: 5px; margin-top: 30px; }
            .item { display: flex; justify-content: space-between; border-bottom: 1px dotted #ccc; padding: 10px 0; }
            .price { font-weight: bold; color: #124346; }
            .footer { margin-top: 50px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <h1>Прайс-лист DENTA Стоматология</h1>
          <p>${CLINIC_INFO.address} | Тел: ${CLINIC_INFO.phones[0]}</p>
          ${PRICE_CATEGORIES.map(
            (cat) => `
            <h2>${cat.title}</h2>
            ${cat.items
              .map(
                (item) => `
              <div class="item">
                <span>${item.title}</span>
                <span class="price">${item.price}</span>
              </div>
            `
              )
              .join('')}
          `
          ).join('')}
          <div class="footer">Окончательная стоимость лечения определяется врачом после осмотра.</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
          Стоимость услуг
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Прозрачные цены на стоматологические услуги высокого класса. Окончательная стоимость лечения определяется врачом после осмотра и диагностики.
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-md relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск по прайс-листу..."
          className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary text-on-surface"
        />
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {filteredCategories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <h2 className="text-2xl font-bold text-primary border-b border-outline-variant pb-3">
              {cat.title}
            </h2>
            <ul className="space-y-6">
              {cat.items.map((item, itemIdx) => (
                <li key={itemIdx} className="group">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                    <div className="flex-grow border-b border-dotted border-outline-variant mx-2 opacity-60"></div>
                    <span className="text-base font-bold text-primary whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-xs text-on-surface-variant mt-1">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA & PDF Download */}
      <div className="bg-surface-container-low rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 border border-outline-variant shadow-sm">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-on-surface mb-2">Нужен точный расчет?</h3>
          <p className="text-sm text-on-surface-variant max-w-md">
            Свяжитесь с нами для предварительной оценки стоимости лечения или запишитесь на консультацию.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappPhone}?text=${encodeURIComponent(
              'Здравствуйте! Мне нужен расчет стоимости лечения в клинике DENTA.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white border border-[#25D366] text-[#25D366] px-6 py-3 rounded-xl font-medium text-xs sm:text-sm hover:bg-[#25D366]/10 transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            Получить расчет в WhatsApp
          </a>

          <button
            onClick={handleDownloadPdf}
            className="flex items-center justify-center gap-2 bg-transparent border border-outline text-on-surface px-6 py-3 rounded-xl font-medium text-xs sm:text-sm hover:bg-surface-variant transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Скачать прайс (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};
