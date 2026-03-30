export const PETS = 'питомцы';
export const FARM = 'ферма';
export const PREDATORS = 'хищники';
export const INSECTS = 'насекомые';
export const SEA = 'морские';
export const REPTILES = 'рептилии';

export const FRUITS = 'фрукты';
export const VEGETABLES = 'овощи';
export const SWEETS = 'сладости';
export const BAKERY = 'выпечка';

export const FLOWERS = 'цветы';
export const TREES = 'деревья';
export const WEATHER = 'погода';

export const ROYAL = 'королевское';
export const MAGIC = 'магия';
export const TREASURE = 'сокровища';

export const SPACE = 'космос';
export const DEVICES = 'устройства';
export const TRANSPORT = 'транспорт';

export const CATEGORIES = {
  PETS,
  FARM,
  PREDATORS,
  INSECTS,
  SEA,
  REPTILES,
  FRUITS,
  VEGETABLES,
  SWEETS,
  BAKERY,
  FLOWERS,
  TREES,
  WEATHER,
  ROYAL,
  MAGIC,
  TREASURE,
  SPACE,
  DEVICES,
  TRANSPORT
};

export const wordsList = [
  // Фрукты
  { word: "Груша", categories: [FRUITS], emoji: "🍐" },
  { word: "Персик", categories: [FRUITS], emoji: "🍑" },
  { word: "Слива", categories: [FRUITS], emoji: "🍑" },
  { word: "Манго", categories: [FRUITS], emoji: "🥭" },
  { word: "Ананас", categories: [FRUITS], emoji: "🍍" },
  { word: "Виноград", categories: [FRUITS], emoji: "🍇" },
  { word: "Дыня", categories: [FRUITS], emoji: "🍈" },
  { word: "Гранат", categories: [FRUITS], emoji: "🍎" },
  { word: "Черника", categories: [FRUITS], emoji: "🫐" },
  { word: "Малина", categories: [FRUITS], emoji: "🍓" },

  // Овощи
  { word: "Помидор", categories: [VEGETABLES], emoji: "🍅" },
  { word: "Картофель", categories: [VEGETABLES], emoji: "🥔" },
  { word: "Брокколи", categories: [VEGETABLES], emoji: "🥦" },
  { word: "Капуста", categories: [VEGETABLES], emoji: "🥬" },
  { word: "Баклажан", categories: [VEGETABLES], emoji: "🍆" },
  { word: "Перец", categories: [VEGETABLES], emoji: "🌶️" },
  { word: "Чеснок", categories: [VEGETABLES], emoji: "🧄" },
  { word: "Лук", categories: [VEGETABLES], emoji: "🧅" },
  { word: "Редис", categories: [VEGETABLES], emoji: "🥕" },
  { word: "Свёкла", categories: [VEGETABLES], emoji: "🥔" },

  // Сладости
  { word: "Шоколад", categories: [SWEETS], emoji: "🍫" },
  { word: "Печенье", categories: [SWEETS], emoji: "🍪" },
  { word: "Кекс", categories: [SWEETS], emoji: "🧁" },
  { word: "Мармелад", categories: [SWEETS], emoji: "🍬" },
  { word: "Зефир", categories: [SWEETS], emoji: "🍡" },
  { word: "Мороженое", categories: [SWEETS], emoji: "🍨" },
  { word: "Леденец", categories: [SWEETS], emoji: "🍭" },
  { word: "Вафли", categories: [SWEETS], emoji: "🧇" },
  { word: "Пудинг", categories: [SWEETS], emoji: "🍮" },

  // Выпечка
  { word: "Булочка", categories: [BAKERY], emoji: "🥐" },
  { word: "Круассан", categories: [BAKERY], emoji: "🥐" },
  { word: "Багет", categories: [BAKERY], emoji: "🥖" },
  { word: "Лаваш", categories: [BAKERY], emoji: "🫓" },
  { word: "Пирог", categories: [BAKERY], emoji: "🥧" },
  { word: "Крендель", categories: [BAKERY], emoji: "🥨" },
  { word: "Тост", categories: [BAKERY], emoji: "🍞" },
  { word: "Сэндвич", categories: [BAKERY], emoji: "🥪" },

  // Питомцы
  { word: "Кошка", categories: [PETS], emoji: "🐱" },
  { word: "Собака", categories: [PETS], emoji: "🐶" },

  // Ферма
  { word: "Коза", categories: [FARM], emoji: "🐐" },
  { word: "Свинья", categories: [FARM], emoji: "🐷" },
  { word: "Утка", categories: [FARM], emoji: "🦆" },
  { word: "Гусь", categories: [FARM], emoji: "🪿" },
  { word: "Кролик", categories: [FARM], emoji: "🐰" },
  { word: "Индюк", categories: [FARM], emoji: "🦃" },
  { word: "Осёл", categories: [FARM], emoji: "🫏" },
  { word: "Цыплёнок", categories: [FARM], emoji: "🐤" },

  // Хищники
  { word: "Лев", categories: [PREDATORS], emoji: "🦁" },
  { word: "Волк", categories: [PREDATORS], emoji: "🐺" },
  { word: "Тигр", categories: [PREDATORS], emoji: "🐯" },
  { word: "Лиса", categories: [PREDATORS], emoji: "🦊" },

  // Насекомые
  { word: "Пчела", categories: [INSECTS], emoji: "🐝" },
  { word: "Бабочка", categories: [INSECTS], emoji: "🦋" },
  { word: "Муравей", categories: [INSECTS], emoji: "🐜" },
  { word: "Божья коровка", categories: [INSECTS], emoji: "🐞" },

  // Морские
  { word: "Рыба", categories: [SEA], emoji: "🐟" },
  { word: "Краб", categories: [SEA], emoji: "🦀" },
  { word: "Осьминог", categories: [SEA], emoji: "🐙" },

  // Рептилии
  { word: "Змея", categories: [REPTILES], emoji: "🐍" },
  { word: "Ящерица", categories: [REPTILES], emoji: "🦎" },

  // Цветы
  { word: "Роза", categories: [FLOWERS], emoji: "🌹" },
  { word: "Цветок", categories: [FLOWERS], emoji: "🌸" },
  { word: "Лотос", categories: [FLOWERS], emoji: "🪷" },

  // Деревья
  { word: "Дерево", categories: [TREES], emoji: "🌳" },
  { word: "Лист", categories: [TREES], emoji: "🍃" },

  // Погода
  { word: "Солнце", categories: [WEATHER], emoji: "☀️" },
  { word: "Дождь", categories: [WEATHER], emoji: "🌧️" },
  { word: "Снег", categories: [WEATHER], emoji: "❄️" },
  { word: "Молния", categories: [WEATHER], emoji: "⚡" },
  { word: "Радуга", categories: [WEATHER], emoji: "🌈" },

  // Королевское
  { word: "Король", categories: [ROYAL], emoji: "👑" },
  { word: "Королева", categories: [ROYAL], emoji: "👸" },
  { word: "Принц", categories: [ROYAL], emoji: "🤴" },
  { word: "Принцесса", categories: [ROYAL], emoji: "👸" },
  { word: "Трон", categories: [ROYAL], emoji: "🪑" },
  { word: "Замок", categories: [ROYAL], emoji: "🏰" },

  // Магия
  { word: "Кристалл", categories: [MAGIC], emoji: "💎" },
  { word: "Зелье", categories: [MAGIC], emoji: "🧪" },
  { word: "Свеча", categories: [MAGIC], emoji: "🕯️" },
  { word: "Книга", categories: [MAGIC], emoji: "📘" },

  // Сокровища
  { word: "Золото", categories: [TREASURE], emoji: "🥇" },
  { word: "Сокровище", categories: [TREASURE], emoji: "💰" },
  { word: "Ключ", categories: [TREASURE], emoji: "🔑" },
  { word: "Корона", categories: [TREASURE], emoji: "👑" },

  // Космос
  { word: "Планета", categories: [SPACE], emoji: "🪐" },
  { word: "Звезда", categories: [SPACE], emoji: "⭐" },
  { word: "Комета", categories: [SPACE], emoji: "☄️" },
  { word: "Луна", categories: [SPACE], emoji: "🌙" },

  // Устройства
  { word: "Робот", categories: [DEVICES], emoji: "🤖" },
  { word: "Микроскоп", categories: [DEVICES], emoji: "🔬" },
  { word: "Батарейка", categories: [DEVICES], emoji: "🔋" },
  { word: "Телескоп", categories: [DEVICES], emoji: "🔭" },

  // Транспорт
  { word: "Машина", categories: [TRANSPORT], emoji: "🚗" },
  { word: "Поезд", categories: [TRANSPORT], emoji: "🚂" },
  { word: "Самолёт", categories: [TRANSPORT], emoji: "✈️" },
  { word: "Лодка", categories: [TRANSPORT], emoji: "🚤" },
  { word: "Ракета", categories: [TRANSPORT], emoji: "🚀" }
];

export function getMatchDetails(item1, item2) {
  if (!item1 || !item2) return { score: 0, sharedCategories: [] };

  const sharedCategories = item1.categories.filter(cat => item2.categories.includes(cat));

  return {
    score: sharedCategories.length > 0 ? sharedCategories.length * 10 : 0,
    sharedCategories
  };
}

export function getMatchScore(item1, item2) {
  return getMatchDetails(item1, item2).score;
}

export function doItemsMatch(item1, item2) {
  return getMatchScore(item1, item2) > 0;
}

export function getRandomWordItemByCategories(allowedCategories = [], allowEmoji = true) {
  let pool = wordsList;

  if (allowedCategories && allowedCategories.length > 0) {
    pool = wordsList.filter(item =>
      item.categories.some(cat => allowedCategories.includes(cat))
    );
  }

  if (pool.length === 0) {
    console.warn("Category filter yielded 0 results. Falling back to global dictionary.");
    pool = wordsList;
  }

  const item = pool[Math.floor(Math.random() * pool.length)];
  const isEmoji = allowEmoji && Math.random() < 0.15;

  return {
    ...item,
    display: isEmoji ? item.emoji : item.word,
    isEmoji
  };
}