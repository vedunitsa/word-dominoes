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
  { word: "Лимон", categories: [FRUITS], emoji: "🍋" },
  { word: "Яблоко", categories: [FRUITS], emoji: "🍎" },
  { word: "Банан", categories: [FRUITS], emoji: "🍌" },
  { word: "Арбуз", categories: [FRUITS], emoji: "🍉" },
  { word: "Киви", categories: [FRUITS], emoji: "🥝" },
  { word: "Апельсин", categories: [FRUITS], emoji: "🍊" },
  { word: "Вишня", categories: [FRUITS], emoji: "🍒" },
  { word: "Клубника", categories: [FRUITS], emoji: "🍓" },

  // Овощи
  { word: "Морковь", categories: [VEGETABLES], emoji: "🥕" },
  { word: "Кукуруза", categories: [VEGETABLES], emoji: "🌽" },
  { word: "Тыква", categories: [VEGETABLES], emoji: "🎃" },

  // Сладости
  { word: "Пончик", categories: [SWEETS], emoji: "🍩" },
  { word: "Торт", categories: [SWEETS], emoji: "🎂" },
  { word: "Конфета", categories: [SWEETS], emoji: "🍬" },
  { word: "Мёд", categories: [SWEETS], emoji: "🍯" },

  // Выпечка
  { word: "Хлеб", categories: [BAKERY], emoji: "🍞" },
  { word: "Пицца", categories: [BAKERY], emoji: "🍕" },

  // Питомцы
  { word: "Кошка", categories: [PETS], emoji: "🐱" },
  { word: "Собака", categories: [PETS], emoji: "🐶" },

  // Ферма
  { word: "Корова", categories: [FARM], emoji: "🐮" },
  { word: "Лошадь", categories: [FARM], emoji: "🐴" },
  { word: "Петух", categories: [FARM], emoji: "🐓" },

  // Хищники
  { word: "Лев", categories: [PREDATORS], emoji: "🦁" },
  { word: "Волк", categories: [PREDATORS], emoji: "🐺" },
  { word: "Тигр", categories: [PREDATORS], emoji: "🐯" },

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