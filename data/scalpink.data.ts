import { PhotoAsset } from "../components/Photo";
import { PriceColumn, PriceTableData } from "../components/PriceTable";

type TitledText = {
  title: string;
  text: string;
};

export const SCALP_INK_FEATURES: TitledText[] = [
  {
    title: "自然に見えることを大切に。",
    text: "頭皮専用の色素を使い、自毛や肌色になじむよう色や濃さを調整します。生え際、つむじ、頭頂部など、それぞれの状態に合わせて細かな陰影を重ねていきます。",
  },
  {
    title: "今だけでなく、この先の変化にも対応。",
    text: "色素は時間の経過とともに薄くなったり、色味が変化したりすることがあります。年齢や髪型、自毛の変化に合わせて、必要に応じたリタッチや調整が可能です。",
  },
];

export const SCALP_INK_MERITS: TitledText[] = [
  {
    title: "毎朝“隠す”手間を減らせる。",
    text: "パウダーやスプレーのように、その都度つけたり落としたりする必要がありません。",
  },
  {
    title: "髪が生えるのを待たず、見た目を整えられる。",
    text: "発毛を待つのではなく、頭皮に陰影を加えることで、地肌の目立ちや生え際の印象を整えます。",
  },
  {
    title: "外科手術や薬に頼らない選択肢。",
    text: "切開や植毛とは異なり、内服薬を使わずに見た目へアプローチできます。",
  },
];

export type ScalpInkCase = {
  title: string;
  photo: PhotoAsset;
  alt: string;
  description: string[];
  estimates: string[];
};

export const SCALP_INK_CASES: ScalpInkCase[] = [
  {
    title: "頭頂部のつむじ・分け目の透け",
    photo: { src: "/img/scalp/skalp_user_01.jpg", width: 1024, height: 1280 },
    alt: "頭頂部のつむじ・分け目の透けへのスカルプインク施術前後（50,000発）",
    description: [
      "髪が細くなったり、本数が減ったりすると、髪の間から地肌が見えやすくなります。",
      "頭皮に細かな陰影を加えることで、髪と地肌のコントラストを弱め、透け感を目立ちにくくします。",
    ],
    estimates: ["累計ショット数：約3万〜10万発", "施術回数：2〜3回"],
  },
  {
    title: "生え際・M字の後退",
    photo: { src: "/img/scalp/skalp_user_02.jpg", width: 1080, height: 1350 },
    alt: "生え際・M字の後退へのスカルプインク施術前後（200,000発）",
    description: [
      "生え際が後退すると、額が広く見えたり、ヘアラインの印象が変わったりします。",
      "細かなドットで陰影を加えることで、後退した生え際の見え方を整え、自然なヘアラインに近づけます。",
    ],
    estimates: ["累計ショット数：約10万〜30万発", "施術回数：2〜3回"],
  },
  {
    title: "頭頂部全体・短髪・坊主スタイル",
    photo: { src: "/img/scalp/skalp_user_03.jpg", width: 1080, height: 1350 },
    alt: "頭頂部全体へのスカルプインク施術前後（300,000発）",
    description: [
      "短髪や坊主スタイルでは、頭皮に見える毛根の密度が全体の印象を大きく左右します。",
      "細かなドットを重ねることで、短く刈った髪があるような陰影をつくり、自然な密度感を演出します。",
    ],
    estimates: ["累計ショット数：約30万〜70万発", "施術回数：3～5回"],
  },
  {
    title: "傷跡・部分的な薄毛",
    photo: { src: "/img/scalp/skalp_user_04.jpg", width: 1080, height: 1350 },
    alt: "部分的な薄毛へのスカルプインク施術前後（60,000発）",
    description: [
      "傷跡や部分的に髪が少ない箇所は、周囲との色や密度の差によって目立つことがあります。",
      "周囲の髪や頭皮になじむよう陰影を加えることで、傷跡や部分的な薄毛を目立ちにくくします。",
    ],
    estimates: ["累計ショット数：約2万〜10万発", "施術回数：1~2回"],
  },
];

export const SCALP_INK_FLOW: TitledText[] = [
  { title: "カウンセリング", text: "気になる部分や現在の髪・頭皮の状態、希望する仕上がりを確認します。" },
  {
    title: "デザイン・色味の確認",
    text: "生え際のラインや施術範囲、色・濃さなどを確認し、自然になじむデザインを決めます。",
  },
  { title: "施術", text: "頭皮に細かな点状の色素を入れ、少しずつ陰影を重ねていきます。" },
  { title: "仕上がり確認", text: "全体のバランスや濃さを確認しながら仕上げます。" },
  { title: "アフターケア", text: "施術後の過ごし方や注意点、必要に応じた次回施術についてご案内します。" },
];

const COLUMNS: PriceColumn[] = [
  { label: "施術時間" },
  { label: "通常料金（税込）", type: "price" },
  { label: "会員優待（税込）", type: "member" },
];

export const SCALP_INK_TRIAL_TABLE: PriceTableData = {
  title: "カウンセリング＆お試しプラン",
  description: [
    "初めての方に向けた、カウンセリングと体験施術のセットプランをご用意しています。無料カウンセリングのみのご利用も可能です。まずはお気軽にご相談ください。",
  ],
  photo: {
    src: "/img/scalp/skalp_TRIAL.png",
    width: 1254,
    height: 1254,
    alt: "初回セット　カウンセリング・体験施術（SS）",
  },
  nameLabel: "コース内容",
  columns: COLUMNS,
  rows: [{ name: "初回カウンセリング＋お試し施術（最大10,000発）", values: ["60分", "¥25,300", "¥19,800"] }],
};

export const SCALP_INK_PRICE_TABLE: PriceTableData = {
  title: "1回あたりの施術料金",
  description: [
    "お支払いは施術ごとの都度払いです。完成までに必要なショット数や料金の目安は、頭皮の状態や施術範囲によって異なるため、カウンセリング時にご案内します",
  ],
  notes: ["※ショット数は1回あたりの上限です。"],
  nameLabel: "ショット数",
  columns: COLUMNS,
  rows: [
    { name: "～10,000発", values: ["60分", "¥25,300", "¥19,800"] },
    { name: "～25,000発", values: ["60分", "¥39,600", "¥33,000"] },
    { name: "～50,000発", values: ["90分", "¥66,000", "¥55,000"] },
    { name: "～75,000発", values: ["90分", "¥89,100", "¥74,250"] },
    { name: "～100,000発", values: ["120分", "¥105,600", "¥88,000"] },
    { name: "～150,000発", values: ["150分", "¥158,400", "¥132,000"] },
  ],
};
