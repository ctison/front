// https://nextjs.org/docs/advanced-features/custom-error-page

import Error from 'next/error'

export default function Page(): JSX.Element {
  return <Error statusCode={404} />
}
