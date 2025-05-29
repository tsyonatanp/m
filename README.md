# Redy Food - אתר להזמנת אוכל מוכן במשלוח

אתר להזמנת אוכל מוכן טרי לפי משקל עם משלוח עד הבית.

## תכונות עיקריות

- 🛒 הזמנה אונליין של אוכל מוכן טרי לפי משקל
- 🚚 שירות משלוחים בלבד
- 📱 חוויית משתמש אופטימלית בנייד
- 📊 ניהול תפריט מתוך קובץ Excel
- 📨 שליחת סיכום הזמנה אוטומטי לטלגרם

## טכנולוגיות

- Next.js 14
- TypeScript
- Tailwind CSS
- Telegram Bot API
- Stripe Payments

## התקנה

1. התקן את הדרישות המקדימות:
   - Node.js 18 ומעלה
   - npm

2. התקן את התלויות:
```bash
npm install
```

3. הגדר את משתני הסביבה:
```bash
cp .env.example .env.local
```
עדכן את הערכים ב-.env.local עם המפתחות שלך.

4. הפעל את שרת הפיתוח:
```bash
npm run dev
```

פתח [http://localhost:3000](http://localhost:3000) בדפדפן שלך.

## תצורת Excel

קובץ ה-Excel לניהול התפריט צריך לכלול את העמודות הבאות:

- שם מנה
- קטגוריה
- מחיר ל-100 גרם
- תיאור
- משקל מינימלי/מקסימלי
- זמינות
- קישור לתמונה
- תגיות

## רישיון

MIT 