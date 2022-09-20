import Head from 'next/head';

type PageTitleProps = {
  title?: string;
};

const TITLE_TEMPLATE = 'Console-ing Passions 2023 @ University of Calgary';

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <Head>
      <title>{title ? `${title} | ${TITLE_TEMPLATE}` : TITLE_TEMPLATE}</title>
    </Head>
  );
};
