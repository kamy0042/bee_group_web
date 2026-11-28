import { ReactNode } from "react";
import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import PageHeader from "../../components/PageHeader";
import InPageNav from "../../components/InPageNav";
import SectionHeading from "../../components/SectionHeading";
import Photo from "../../components/Photo";
import ZoomableImage from "../../components/ZoomableImage";
import FaqList from "../../components/FaqList";
import LinkButton from "../../components/LinkButton";
import { CtaButton } from "../../components/CtaButton";
import {
  ASSISTANT_SUPPORT,
  ATMOSPHERE,
  CAREER_INTRO,
  // CAREER_PATH_GOALS,
  // CAREER_PATH_STEPS,
  COMPANY_ROWS,
  ENTRY_FORM_URL,
  EVALUATIONS,
  FEATURES,
  HERO_TEXT,
  INFO_TABLE_HEAD,
  INVITATION,
  InfoRow,
  Job,
  JOBS,
  OWNER_MESSAGE,
  OWNER_SIGNATURE,
  RECRUIT_DESCRIPTION,
  RECRUIT_FAQ,
  RECRUIT_TITLE,
  SalaryExample,
  STAFF,
  STAFF_INTRO,
  STYLIST_SUPPORT,
  SUPPORT_INTRO,
  VISION,
  VISIT,
  WORK,
} from "../../data/recruit.data";
import { SHOP_INFO } from "../../public/static";
import pageStyles from "../../styles/Page.module.scss";
import styles from "../../styles/Recruit.module.scss";

const JOB_POSTINGS: Record<
  string,
  { title: string; datePosted: string; minValue: number; maxValue: number; id: string }
> = {
  "job-stylist": { title: "スタイリスト", datePosted: "2026-06-15", minValue: 230000, maxValue: 300000, id: "0001" },
  "job-assistant": { title: "アシスタント", datePosted: "2026-11-23", minValue: 220000, maxValue: 230000, id: "0002" },
};

const toJobPosting = (job: Job) => {
  const posting = JOB_POSTINGS[job.id];
  return {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    datePosted: posting.datePosted,
    validThrough: "2033-12-31",
    title: posting.title,
    employmentType: "FULL_TIME",
    description: `<p>${HERO_TEXT}</p><ul>${job.rows.map((row) => `<li>${row.term}：${row.value}</li>`).join("")}</ul>`,
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "JP",
        postalCode: "105-0004",
        addressRegion: "東京都",
        addressLocality: "港区",
        streetAddress: "新橋５丁目８−３ 代市ビル B1",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "JPY",
      value: {
        "@type": "QuantitativeValue",
        minValue: posting.minValue,
        maxValue: posting.maxValue,
        unitText: "MONTH",
      },
    },
    hiringOrganization: {
      "@type": "Organization",
      name: "Bee Group",
      sameAs: "https://beegroup.tokyo/",
      logo: "https://beegroup.tokyo/img/logo.jpg",
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Bee Group",
      value: posting.id,
    },
  };
};

const num = (i: number) => String(i + 1).padStart(2, "0");

// const Pending = ({ text }: { text: string }) =>
//   text.startsWith("【要確認") ? <span className={styles.pending}>{text}</span> : text;

const TelLink = ({ inline }: { inline?: boolean }) => (
  <a className={inline ? styles.telInline : styles.telLink} href={`tel:${SHOP_INFO.TEL_NO_HYPHEN}`}>
    {SHOP_INFO.TEL}
  </a>
);

const withTelLink = (text: string) => {
  const index = text.indexOf(SHOP_INFO.TEL);
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <TelLink inline />
      {text.slice(index + SHOP_INFO.TEL.length)}
    </>
  );
};

const EntryCta = ({ children }: { children?: ReactNode }) => (
  <div className={styles.entry}>
    <p className={styles.entryLabel}>応募・見学・お問い合わせ</p>
    <div className={styles.entryButton}>
      <CtaButton
        text={
          <>
            応募する・
            <wbr />
            見学する・
            <wbr />
            問い合わせる
          </>
        }
        link={ENTRY_FORM_URL}
      />
    </div>
    {children && <div className={styles.entryNote}>{children}</div>}
  </div>
);

const InfoValue = ({ row }: { row: InfoRow }) => {
  if (row.list) {
    return (
      <ul className={styles.valueList}>
        {row.value.split(/\s*\/\s*/).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (row.href) {
    return (
      <a className={styles.textLink} href={row.href}>
        {row.value}
      </a>
    );
  }
  return row.value;
};

const InfoTable = ({ rows }: { rows: InfoRow[] }) => (
  <table className={styles.infoTable}>
    <thead>
      <tr>
        {INFO_TABLE_HEAD.map((label) => (
          <th key={label} scope="col">
            {label}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr key={row.term}>
          <th scope="row">{row.term}</th>
          <td>
            <InfoValue row={row} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const SalaryBox = ({ salary }: { salary: SalaryExample }) => (
  <div className={styles.salary}>
    <h4 className={styles.salaryTitle}>{salary.title}</h4>
    <p className={styles.salaryCondition}>{salary.condition}</p>
    <table className={styles.salaryTable}>
      <thead>
        <tr>
          {salary.head.map((label) => (
            <th key={label} scope="col">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {salary.rows.map((row) => (
          <tr key={row.term} className={row.total ? styles.salaryTotal : undefined}>
            <th scope="row">{row.term}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className={styles.salaryNote}>{salary.note}</p>
  </div>
);

const Recruit = () => (
  <>
    <Head>
      <title>{RECRUIT_TITLE}</title>
      <meta name="description" content={RECRUIT_DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />
      <script
        key="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JOBS.map(toJobPosting)) }}
      />
    </Head>

    <MainLayout isLight>
      <PageHeader
        en="RECRUIT"
        ja="美容師・アシスタント募集"
        image={{ src: "/img/recruit/staffs.jpg", width: 1500, height: 843, position: "50% 30%" }}
      >
        <p className={styles.heroCatch}>
          出会うお客様が変われば、
          <wbr />
          美容師の未来も変わる。
        </p>
        <p className={styles.heroSub}>Bee dandyは、スタイリストとアシスタントを募集しています。</p>
      </PageHeader>
      <InPageNav
        items={[
          { id: "features", label: "FEATURES" },
          { id: "career", label: "CAREER PATH" },
          { id: "support", label: "SUPPORT" },
          { id: "staff", label: "STAFF" },
          { id: "message", label: "MESSAGE" },
          { id: "requirements", label: "REQUIREMENTS" },
          { id: "faq", label: "FAQ" },
        ]}
      />
      <div className={styles.intro}>
        <p className={styles.introText}>{HERO_TEXT}</p>
        <div className={styles.introEntry}>
          <EntryCta>
            <p>話を聞くだけでも大丈夫です。お電話でも受け付けています。</p>
            <p>
              <TelLink />
              （担当：松井）
            </p>
          </EntryCta>
        </div>
      </div>

      <section id="work" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading en="OUR WORK" lead="Bee dandyの仕事とお客様" />
          <div className={styles.split}>
            <div className={styles.splitPhoto}>
              <Photo
                src="/img/recruit/staff_cut_02.jpg"
                width={1500}
                height={844}
                position="55% 40%"
                alt="鏡越しにお客様と笑顔で話すスタイリスト"
                className={styles.photoImage}
              />
            </div>
            <div className={styles.splitBody}>
              <div className={pageStyles.text}>
                {WORK.intro.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
              <ul className={styles.pointList}>
                {WORK.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className={pageStyles.text}>
                {WORK.outro.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.container}>
          <SectionHeading en="FEATURES" lead="Bee dandyで働く4つの特徴" />
          <ol className={styles.features}>
            {FEATURES.map((feature, i) => (
              <li key={feature.title} className={styles.feature}>
                <span className={styles.featureNum} aria-hidden="true">
                  {num(i)}
                </span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                {feature.text && (
                  <div className={styles.featureText}>
                    {feature.text.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                )}
                {feature.list && (
                  <ul className={styles.checkList}>
                    {feature.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {feature.terms && (
                  <dl className={styles.terms}>
                    {feature.terms.map((term) => (
                      <div key={term.term}>
                        <dt>{term.term}</dt>
                        <dd>{term.description}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {feature.footer && (
                  <div className={styles.featureText}>
                    {feature.footer.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="vision" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading en="VISION" lead="Bee dandyが目指す美容師像" />
          <div className={`${styles.split} ${styles.splitReverse}`}>
            <div className={styles.splitPhoto}>
              <Photo
                src="/img/recruit/staff_cut_01.jpg"
                width={1700}
                height={1133}
                position="45% 40%"
                alt="カットを担当するスタイリスト"
                className={styles.photoImage}
              />
            </div>
            <div className={styles.splitBody}>
              <p className={styles.visionLead}>{VISION.lead}</p>
              <div className={pageStyles.text}>
                <p>{VISION.intro}</p>
              </div>
              <ul className={styles.pillars}>
                {VISION.pillars.map((pillar) => (
                  <li key={pillar}>{pillar}</li>
                ))}
              </ul>
              <div className={pageStyles.text}>
                {VISION.outro.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="career" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.container}>
          <SectionHeading en="CAREER PATH" lead="キャリアパス｜成長と評価の仕組み" />
          <div className={styles.centerText}>
            {CAREER_INTRO.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className={styles.careerChart}>
            <ZoomableImage
              src="/img/recruit/Bee_dandy_career.png"
              width={1752}
              height={897}
              alt="Bee dandyのキャリアパス。アシスタント、ジュニアスタイリスト、スタイリスト、トップスタイリストと段階的にステップアップし、その先は技術専門職（テクニカルディレクター）またはマネジメント職（店長・幹部候補）を選べます。"
            />
          </div>
          {/* <figure className={styles.path}>
            <figcaption className={styles.pathTitle}>キャリアパス</figcaption>
            <ol className={styles.pathSteps}>
              {CAREER_PATH_STEPS.map((step) => (
                <li key={step} className={styles.pathStep}>
                  {step}
                </li>
              ))}
              <li className={styles.pathGoals}>
                <ul>
                  {CAREER_PATH_GOALS.map((goal) => (
                    <li key={goal}>{goal}</li>
                  ))}
                </ul>
              </li>
            </ol>
          </figure> */}
          <div className={styles.block}>
            <h3 className={pageStyles.subHeading}>成長を収入につなげる評価制度</h3>
            <ul className={styles.evaluations}>
              {EVALUATIONS.map((item) => (
                <li key={item.title} className={styles.evaluation}>
                  <h4>{item.title}</h4>
                  {item.text.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </li>
              ))}
            </ul>
            <p className={styles.note}>※各制度の適用条件は、当社規定によります。</p>
          </div>
        </div>
      </section>

      <section id="support" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading en="SUPPORT" lead="経験に合わせた成長サポート" />
          <div className={styles.centerText}>
            {SUPPORT_INTRO.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className={styles.tracks}>
            <article id="debut" className={styles.track}>
              <header className={styles.trackHead}>
                <p className={styles.trackTarget}>{ASSISTANT_SUPPORT.target}</p>
                <h3 className={styles.trackTitle}>{ASSISTANT_SUPPORT.title}</h3>
              </header>
              <div className={styles.trackBody}>
                <div className={pageStyles.text}>
                  {ASSISTANT_SUPPORT.text.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
                <h4 className={styles.checkHeading}>{ASSISTANT_SUPPORT.stepsTitle}</h4>
                <table className={styles.stepTable}>
                  <thead>
                    <tr>
                      {ASSISTANT_SUPPORT.stepsHead.map((label) => (
                        <th key={label} scope="col">
                          {label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ASSISTANT_SUPPORT.steps.map((step) => (
                      <tr key={step.step}>
                        <th scope="row">
                          <span className={styles.stepBadge}>{step.step}</span>
                        </th>
                        <td data-label={ASSISTANT_SUPPORT.stepsHead[1]}>{step.content}</td>
                        <td data-label={ASSISTANT_SUPPORT.stepsHead[2]}>{step.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className={styles.note}>{ASSISTANT_SUPPORT.stepsNote}</p>
                <h4 className={styles.checkHeading}>{ASSISTANT_SUPPORT.trainingTitle}</h4>
                <dl className={styles.training}>
                  {ASSISTANT_SUPPORT.training.map((item) => (
                    <div key={item.term}>
                      <dt>{item.term}</dt>
                      <dd>{item.description}</dd>
                    </div>
                  ))}
                </dl>
                <p className={styles.note}>{ASSISTANT_SUPPORT.trainingNote}</p>
              </div>
            </article>

            <article className={styles.track}>
              <header className={styles.trackHead}>
                <p className={styles.trackTarget}>{STYLIST_SUPPORT.target}</p>
                <h3 className={styles.trackTitle}>{STYLIST_SUPPORT.title}</h3>
              </header>
              <div className={styles.trackBody}>
                <div className={styles.trackLead}>
                  <div className={pageStyles.text}>
                    {STYLIST_SUPPORT.text.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                  <div className={styles.trackPhoto}>
                    <Photo
                      src="/img/recruit/staff_1.jpg"
                      width={1700}
                      height={1133}
                      alt="お客様のヘアカットを担当するスタイリスト"
                      className={styles.photoImage}
                    />
                  </div>
                </div>
                <ul className={styles.trackPoints}>
                  {STYLIST_SUPPORT.points.map((point) => (
                    <li key={point.title}>
                      <h4 className={styles.checkHeading}>{point.title}</h4>
                      {point.text.map((text) => (
                        <p key={text}>{text}</p>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="staff" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.container}>
          <SectionHeading en="STAFF" lead="一緒に働くスタッフの紹介" />
          <div className={styles.centerText}>
            {STAFF_INTRO.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <ul className={styles.staffList}>
            {STAFF.map((member) => (
              <li key={member.name} className={styles.staffCard}>
                <div className={styles.staffPhoto}>
                  <Photo {...member.photo} alt={`${member.role} ${member.name}`} className={styles.photoImage} />
                </div>
                <div className={styles.staffBody}>
                  <p className={styles.staffRole}>{member.role}</p>
                  <h3 className={styles.staffName}>{member.name}</h3>
                  <dl className={styles.staffSkill}>
                    <dt>得意な施術</dt>
                    <dd>{member.specialty}</dd>
                  </dl>
                  <p className={styles.staffComment}>{member.comment}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.atmosphere}>
            <h3 className={styles.atmosphereTitle}>{ATMOSPHERE.title}</h3>
            <p>{ATMOSPHERE.text}</p>
          </div>
          <div className={pageStyles.actions}>
            <LinkButton href="/hairstyle#stylist">スタッフ紹介を見る</LinkButton>
          </div>
        </div>
      </section>

      <section id="message" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading en="MESSAGE" lead="Bee dandyのこれから｜オーナーメッセージ" />
          <div className={styles.message}>
            <div className={styles.messagePhoto}>
              <Photo
                src="/img/recruit/owner_message.jpg"
                width={980}
                height={653}
                position="60% 40%"
                alt="株式会社Bee Group 代表 松井祐太"
                className={styles.photoImage}
              />
            </div>
            <div className={styles.messageBody}>
              {OWNER_MESSAGE.map((text, i) => (
                <p key={text} className={i === 0 ? styles.messageLead : undefined}>
                  {text}
                </p>
              ))}
              <p className={styles.signature}>{OWNER_SIGNATURE}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="requirements" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.narrow}>
          <SectionHeading en="REQUIREMENTS" lead="募集要項" />
          <ul className={styles.jobIndex}>
            {JOBS.map((job, i) => (
              <li key={job.id}>
                <a href={`#${job.id}`}>
                  <span className={styles.jobIndexNum}>{num(i)}</span>
                  {job.title}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.jobs}>
            {JOBS.map((job, i) => (
              <article key={job.id} id={job.id} className={styles.job}>
                <h3 className={styles.jobTitle}>
                  <span className={styles.jobNum} aria-hidden="true">
                    {num(i)}
                  </span>
                  {job.title}
                </h3>
                <InfoTable rows={job.rows} />
                {job.salary && <SalaryBox salary={job.salary} />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading en="FLOW" lead="まずはサロン見学から" />
          <div className={styles.centerText}>
            <p>{VISIT.intro}</p>
          </div>
          <div className={styles.block}>
            <h3 className={pageStyles.subHeading}>{VISIT.flowTitle}</h3>
            <ol className={styles.visitSteps}>
              {VISIT.steps.map((step, i) => (
                <li key={step.title} className={styles.visitStep}>
                  <span className={styles.visitNum} aria-hidden="true">
                    {num(i)}
                  </span>
                  <h4 className={styles.visitTitle}>{step.title}</h4>
                  {step.text.map((text) => (
                    <p key={text} className={styles.visitText}>
                      {withTelLink(text)}
                    </p>
                  ))}
                </li>
              ))}
            </ol>
          </div>
          <div className={`${styles.centerText} ${styles.visitOutro}`}>
            <p>{VISIT.outro}</p>
          </div>
          <div className={styles.visitEntry}>
            <EntryCta />
          </div>
        </div>
      </section>

      <section id="faq" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.narrow}>
          <SectionHeading en="FAQ" lead="よくある質問" />
          <FaqList items={RECRUIT_FAQ} />
        </div>
      </section>

      <section id="entry" className={pageStyles.section}>
        <div className={pageStyles.narrow}>
          <SectionHeading en="ENTRY" lead="サロン見学・応募のご案内" />
          <p className={styles.inviteLead}>{INVITATION.lead}</p>
          <div className={pageStyles.text}>
            <p>{INVITATION.intro}</p>
          </div>
          <ul className={styles.reasonList}>
            {INVITATION.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
          <div className={pageStyles.text}>
            <p>{INVITATION.outro}</p>
          </div>
          <div className={styles.inviteEntry}>
            <EntryCta>
              <div className={styles.phone}>
                <p className={styles.phoneTitle}>お電話でのお問い合わせも受け付けています。</p>
                <p className={styles.phoneNumber}>
                  <TelLink />
                  （Bee dandy）担当：松井
                </p>
                <p>お急ぎの方や、個別に相談したいことがある方は、お電話でお気軽にご連絡ください。</p>
              </div>
            </EntryCta>
          </div>
        </div>
      </section>

      <section id="company" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.narrow}>
          <SectionHeading en="COMPANY" lead="会社情報" />
          <InfoTable rows={COMPANY_ROWS} />
        </div>
      </section>
    </MainLayout>
  </>
);

export default Recruit;
